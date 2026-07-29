import type { FieldErrors, TransportRequestData, UpdateTransportRequestField } from "./types";

type ContactStepProps = {
  data: TransportRequestData;
  errors: FieldErrors;
  onChange: UpdateTransportRequestField;
};

export function ContactStep({ data, errors, onChange }: ContactStepProps) {
  return (
    <div className="request-step">
      <div className="request-step__heading">
        <h3>Wie dürfen wir Sie erreichen?</h3>
      </div>
      <div className="request-form-grid request-form-grid--contact">
        <label>E-Mail-Adresse<input type="email" value={data.email} onChange={(event) => onChange("email", event.target.value)} autoComplete="email" aria-invalid={Boolean(errors.email)} /></label>
        <label>Firmenname (optional)<input value={data.company} onChange={(event) => onChange("company", event.target.value)} autoComplete="organization" /></label>
        <label>Telefonnummer (optional)<input type="tel" value={data.phone} onChange={(event) => onChange("phone", event.target.value)} autoComplete="tel" /></label>
        <label>Ansprechpartner (optional)<input value={data.contactPerson} onChange={(event) => onChange("contactPerson", event.target.value)} autoComplete="name" /></label>
        <label className="request-form-grid__full">Nachricht (optional)<textarea value={data.message} onChange={(event) => onChange("message", event.target.value)} rows={3} /></label>
      </div>
      <label className="privacy-check"><input type="checkbox" checked={data.privacyAccepted} onChange={(event) => onChange("privacyAccepted", event.target.checked)} /> <span>Ich habe die <a href="/datenschutz" target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>Datenschutzhinweise</a> und die <a href="/agb" target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>AGB</a> gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage einverstanden.</span></label>
      <label className="honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={data.website} onChange={(event) => onChange("website", event.target.value)} /></label>
    </div>
  );
}
