"use client";

import { useState } from "react";
import { ContactStep } from "./ContactStep";
import { RouteStep } from "./RouteStep";
import { ShipmentStep } from "./ShipmentStep";
import { SummaryStep } from "./SummaryStep";
import { TransportRequestProgress } from "./TransportRequestProgress";
import { TransportTypeStep } from "./TransportTypeStep";
import type { FieldErrors, TransportRequestData, UpdateTransportRequestField } from "./types";

const initialData: TransportRequestData = {
  transportType: "",
  pickupCountry: "Deutschland",
  pickupPostalCode: "",
  pickupCity: "",
  deliveryCountry: "Deutschland",
  deliveryPostalCode: "",
  deliveryCity: "",
  pickupDate: "",
  pickupTime: "",
  pickupEndDate: "",
  pickupEndTime: "",
  isFixedPickup: false,
  packages: "",
  packageType: "",
  goodsType: "",
  weightKg: "",
  lengthCm: "",
  widthCm: "",
  heightCm: "",
  company: "",
  contactPerson: "",
  email: "",
  phone: "",
  message: "",
  privacyAccepted: false,
  website: "",
};

function validateStep(step: number, data: TransportRequestData): FieldErrors {
  const errors: FieldErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (step === 1 && !data.transportType) errors.transportType = "Bitte wählen Sie eine Transportart.";
  if (step === 2) {
    if (!data.pickupCountry) errors.pickupCountry = "Bitte wählen Sie das Abholland.";
    if (!/^\d{5}$/.test(data.pickupPostalCode)) errors.pickupPostalCode = "Bitte geben Sie eine fünfstellige Abhol-PLZ an.";
    if (!data.pickupCity.trim()) errors.pickupCity = "Bitte geben Sie den Abholort an.";
    if (!data.deliveryCountry) errors.deliveryCountry = "Bitte wählen Sie das Zustellland.";
    if (!/^\d{5}$/.test(data.deliveryPostalCode)) errors.deliveryPostalCode = "Bitte geben Sie eine fünfstellige Zustell-PLZ an.";
    if (!data.deliveryCity.trim()) errors.deliveryCity = "Bitte geben Sie den Zustellort an.";
  }
  if (step === 3) {
    if (!data.pickupDate) errors.pickupDate = "Bitte geben Sie ein Abholdatum an.";
    if (!data.pickupTime) errors.pickupTime = "Bitte geben Sie eine Abholuhrzeit an.";
    if (!data.isFixedPickup && !data.pickupEndDate) errors.pickupEndDate = "Bitte geben Sie ein Enddatum an.";
    if (!data.isFixedPickup && !data.pickupEndTime) errors.pickupEndTime = "Bitte geben Sie eine Enduhrzeit an.";
    if (!data.packages || Number(data.packages) < 1) errors.packages = "Bitte geben Sie die Anzahl der Packstücke an.";
    if (!data.packageType) errors.packageType = "Bitte wählen Sie eine Packstückart.";
    if (!data.goodsType) errors.goodsType = "Bitte wählen Sie eine Warenart.";
    if (!data.weightKg || Number(data.weightKg) <= 0) errors.weightKg = "Bitte geben Sie ein Gesamtgewicht an.";
    if (!data.lengthCm || Number(data.lengthCm) <= 0) errors.lengthCm = "Bitte geben Sie die Länge an.";
    if (!data.widthCm || Number(data.widthCm) <= 0) errors.widthCm = "Bitte geben Sie die Breite an.";
    if (!data.heightCm || Number(data.heightCm) <= 0) errors.heightCm = "Bitte geben Sie die Höhe an.";
  }
  if (step === 4) {
    if (!emailPattern.test(data.email)) errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!data.privacyAccepted) errors.privacyAccepted = "Bitte bestätigen Sie die Datenschutzhinweise und die AGB.";
  }

  return errors;
}

export function TransportRequestForm() {
  const [data, setData] = useState(initialData);
  const [step, setStep] = useState(1);
  const [highestReachedStep, setHighestReachedStep] = useState(1);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const updateField: UpdateTransportRequestField = (field, value) => {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const goNext = () => {
    const stepErrors = validateStep(step, data);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length === 0) {
      const nextStep = Math.min(step + 1, 5);
      setHighestReachedStep((current) => Math.max(current, nextStep));
      setStep(nextStep);
    }
  };

  const submit = async () => {
    const stepErrors = validateStep(4, data);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) {
      setStep(4);
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/transport-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message ?? "Die Anfrage konnte nicht übermittelt werden.");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const submitLabel = status === "submitting" ? "Anfrage wird übermittelt …" : "Transportanfrage absenden";

  return (
    <section className="transport-request-section" id="transportanfrage" aria-labelledby="transport-request-heading">
      <div className="page-container transport-request-section__heading">
        <h2 id="transport-request-heading">Transportangebot anfragen</h2>
      </div>
      <div className="page-container transport-request-box">
        <form noValidate onSubmit={(event) => { event.preventDefault(); if (step === 5) void submit(); }}>
          <div className="request-step-content">
            {step === 1 ? <TransportTypeStep data={data} onChange={updateField} /> : null}
            {step === 2 ? <RouteStep data={data} errors={errors} onChange={updateField} /> : null}
            {step === 3 ? <ShipmentStep data={data} errors={errors} onChange={updateField} /> : null}
            {step === 4 ? <ContactStep data={data} errors={errors} onChange={updateField} /> : null}
            {step === 5 ? <SummaryStep data={data} onEdit={setStep} /> : null}
          </div>
          <div className="request-actions">
            {step > 1 ? <button className="button button--secondary" type="button" onClick={() => setStep((current) => current - 1)}>Zurück</button> : <span aria-hidden="true" />}
            {step < 5 ? <button className="button button--primary" type="button" disabled={step === 1 && !data.transportType} onClick={goNext}>Weiter</button> : <button className="button button--primary" type="submit" disabled={status === "submitting"}>{submitLabel}</button>}
          </div>
          <TransportRequestProgress currentStep={step} highestReachedStep={highestReachedStep} onStepChange={setStep} />
        </form>
      </div>
    </section>
  );
}
