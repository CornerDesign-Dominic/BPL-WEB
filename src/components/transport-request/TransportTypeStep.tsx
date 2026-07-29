import { transportTypeOptions, type FieldErrors, type TransportRequestData, type UpdateTransportRequestField } from "./types";

type TransportTypeStepProps = {
  data: TransportRequestData;
  errors: FieldErrors;
  onChange: UpdateTransportRequestField;
};

export function TransportTypeStep({ data, errors, onChange }: TransportTypeStepProps) {
  return (
    <fieldset className="request-fieldset">
      <legend>Fahrzeug- oder Transportart wählen</legend>
      <p className="request-step__intro">
        Wählen Sie die passende Option für Ihre Anfrage.
      </p>
      <div className="transport-type-grid" role="radiogroup" aria-describedby={errors.transportType ? "transport-type-error" : undefined}>
        {transportTypeOptions.map((option) => {
          const isSelected = data.transportType === option.value;

          return (
            <label className={`transport-type-card ${isSelected ? "is-selected" : ""}`} key={option.value}>
              <input
                className="visually-hidden"
                type="radio"
                name="transportType"
                value={option.value}
                checked={isSelected}
                onChange={() => onChange("transportType", option.value)}
              />
              <span className="transport-type-card__content">
                <strong>{option.label}</strong>
                <span>{option.description}</span>
              </span>
            </label>
          );
        })}
      </div>
      {errors.transportType ? <p className="field-error" id="transport-type-error" role="alert">{errors.transportType}</p> : null}
    </fieldset>
  );
}
