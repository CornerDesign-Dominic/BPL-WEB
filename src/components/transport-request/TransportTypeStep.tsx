import { transportTypeOptions, type TransportRequestData, type UpdateTransportRequestField } from "./types";

type TransportTypeStepProps = {
  data: TransportRequestData;
  onChange: UpdateTransportRequestField;
};

export function TransportTypeStep({ data, onChange }: TransportTypeStepProps) {
  return (
    <div className="request-step">
      <fieldset className="request-fieldset">
        <legend>Fahrzeug wählen</legend>
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
    </div>
  );
}
