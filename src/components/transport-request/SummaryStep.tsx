import { transportTypeOptions, type TransportRequestData } from "./types";
import type { ReactNode } from "react";

type SummaryStepProps = {
  data: TransportRequestData;
  onEdit: (step: number) => void;
};

type SummaryGroupProps = {
  title: string;
  step: number;
  children: ReactNode;
  onEdit: (step: number) => void;
};

function SummaryGroup({ title, step, children, onEdit }: SummaryGroupProps) {
  return (
    <section className="summary-group">
      <div className="summary-group__heading">
        <h4>{title}</h4>
        <button type="button" onClick={() => onEdit(step)}>Bearbeiten</button>
      </div>
      {children}
    </section>
  );
}

export function SummaryStep({ data, onEdit }: SummaryStepProps) {
  const transportType = transportTypeOptions.find((option) => option.value === data.transportType)?.label ?? "–";

  return (
    <div className="request-step">
      <div className="request-step__heading">
        <h3>Ihre Anfrage prüfen</h3>
        <p>Kontrollieren Sie Ihre Angaben vor dem Absenden.</p>
      </div>
      <div className="summary-grid">
        <SummaryGroup title="Transportart" step={1} onEdit={onEdit}><p>{transportType}</p></SummaryGroup>
        <SummaryGroup title="Strecke" step={2} onEdit={onEdit}><p><strong>Abholung:</strong> {data.pickupPostalCode} {data.pickupCity}, {data.pickupCountry}<br /><strong>Zustellung:</strong> {data.deliveryPostalCode} {data.deliveryCity}, {data.deliveryCountry}</p></SummaryGroup>
        <SummaryGroup title="Termin und Sendung" step={3} onEdit={onEdit}><p><strong>Abholung:</strong> {data.pickupDate || "–"} {data.pickupTime}<br /><strong>Packstücke:</strong> {data.packages || "–"}<br /><strong>Gewicht:</strong> {data.weightKg ? `${data.weightKg} kg` : "–"}<br /><strong>Ware:</strong> {data.goodsDescription || "–"}<br /><strong>Maße:</strong> {data.dimensions || "–"}<br /><strong>Besonderheiten:</strong> {data.specialNotes || "–"}</p></SummaryGroup>
        <SummaryGroup title="Kontaktdaten" step={4} onEdit={onEdit}><p><strong>{data.company}</strong><br />{data.contactPerson}<br />{data.email}<br />{data.phone}<br />{data.customerNumber && `Kundennummer: ${data.customerNumber}`}<br />{data.message && `Nachricht: ${data.message}`}</p></SummaryGroup>
      </div>
      <p className="request-unbinding-note">Die Anfrage ist unverbindlich. Wir melden uns nach Prüfung Ihrer Angaben.</p>
    </div>
  );
}
