import type { FieldErrors, TransportRequestData, UpdateTransportRequestField } from "./types";

type ContactStepProps = {
  data: TransportRequestData;
  errors: FieldErrors;
  onChange: UpdateTransportRequestField;
};

function FieldError({ message }: { message?: string }) {
  return message ? <p className="field-error" role="alert">{message}</p> : null;
}

export function ContactStep({ data, errors, onChange }: ContactStepProps) {
  return (
    <div className="request-step">
      <div className="request-step__heading">
        <h3>Wie dürfen wir Sie erreichen?</h3>
      </div>
      <div className="request-form-grid request-form-grid--contact">
        <label>Firmenname (optional)<input value={data.company} onChange={(event) => onChange("company", event.target.value)} autoComplete="organization" /></label>
        <label>Ansprechpartner (optional)<input value={data.contactPerson} onChange={(event) => onChange("contactPerson", event.target.value)} autoComplete="name" /></label>
        <label>E-Mail-Adresse<input type="email" value={data.email} onChange={(event) => onChange("email", event.target.value)} autoComplete="email" aria-invalid={Boolean(errors.email)} /></label>
        <label>Telefonnummer (optional)<input type="tel" value={data.phone} onChange={(event) => onChange("phone", event.target.value)} autoComplete="tel" /></label>
        <label className="request-form-grid__full">Nachricht (optional)<textarea value={data.message} onChange={(event) => onChange("message", event.target.value)} rows={3} /></label>
      </div>
      <FieldError message={errors.email} />
      <label className="privacy-check"><input type="checkbox" checked={data.privacyAccepted} onChange={(event) => onChange("privacyAccepted", event.target.checked)} /> <span>Ich habe die Datenschutzhinweise und die AGB gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden.</span></label>
      <FieldError message={errors.privacyAccepted} />
      <label className="honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={data.website} onChange={(event) => onChange("website", event.target.value)} /></label>
    </div>
  );
}
