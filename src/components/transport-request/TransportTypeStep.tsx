import { transportTypeOptions, type TransportRequestData, type UpdateTransportRequestField } from "./types";

type TransportTypeStepProps = {
  data: TransportRequestData;
  onChange: UpdateTransportRequestField;
};

export function TransportTypeStep({ data, onChange }: TransportTypeStepProps) {
  return (
    <fieldset className="request-fieldset request-step">
      <legend>Fahrzeug wählen</legend>
      <p className="request-step__intro">
        Wählen Sie die passende Option für Ihre Anfrage.
      </p>
      <div className="transport-type-grid" role="radiogroup">
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
                <span className="transport-type-card__header">
                  <strong>{option.label}</strong>
                </span>
                <span>{option.description}</span>
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
