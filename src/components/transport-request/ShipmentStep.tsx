import type { FieldErrors, TransportRequestData, UpdateTransportRequestField } from "./types";

type ShipmentStepProps = {
  data: TransportRequestData;
  errors: FieldErrors;
  onChange: UpdateTransportRequestField;
};

function FieldError({ message }: { message?: string }) {
  return message ? <p className="field-error" role="alert">{message}</p> : null;
}

export function ShipmentStep({ data, errors, onChange }: ShipmentStepProps) {
  const specialLabel = data.transportType === "special" ? "Besonderheiten *" : "Besonderheiten";

  return (
    <div className="request-step">
      <div className="request-step__heading">
        <h3>Sendung und Termin</h3>
        <p>Diese Angaben helfen uns, Ihre Anfrage passend einzuordnen.</p>
      </div>
      <div className="request-form-grid">
        <label>Gewünschtes Abholdatum<input type="date" value={data.pickupDate} onChange={(event) => onChange("pickupDate", event.target.value)} aria-invalid={Boolean(errors.pickupDate)} /></label>
        <label>Abholzeit oder Zeitfenster<input value={data.pickupTime} onChange={(event) => onChange("pickupTime", event.target.value)} placeholder="z. B. 09:00–12:00 Uhr" /></label>
        <label>Anzahl der Packstücke<input type="number" min="1" inputMode="numeric" value={data.packages} onChange={(event) => onChange("packages", event.target.value)} aria-invalid={Boolean(errors.packages)} /></label>
        <label>Gesamtgewicht in kg<input type="number" min="1" inputMode="decimal" value={data.weightKg} onChange={(event) => onChange("weightKg", event.target.value)} aria-invalid={Boolean(errors.weightKg)} /></label>
      </div>
      <FieldError message={errors.pickupDate || errors.packages || errors.weightKg} />
      <div className="request-form-grid request-form-grid--full">
        <label>Beschreibung der Ware<textarea value={data.goodsDescription} onChange={(event) => onChange("goodsDescription", event.target.value)} rows={3} /></label>
        <label>Maße<input value={data.dimensions} onChange={(event) => onChange("dimensions", event.target.value)} placeholder="z. B. 120 × 80 × 100 cm" /></label>
        <label>{specialLabel}<textarea value={data.specialNotes} onChange={(event) => onChange("specialNotes", event.target.value)} rows={3} aria-invalid={Boolean(errors.specialNotes)} /></label>
      </div>
      <FieldError message={errors.specialNotes} />
    </div>
  );
}
