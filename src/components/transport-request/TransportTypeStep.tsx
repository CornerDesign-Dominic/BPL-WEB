import { transportTypeOptions, type TransportRequestData, type TransportType, type UpdateTransportRequestField } from "./types";

type TransportTypeStepProps = {
  data: TransportRequestData;
  onChange: UpdateTransportRequestField;
};

function TransportTypeIcon({ type }: { type: TransportType }) {
  const props = {
    "aria-hidden": true,
    className: "transport-type-card__icon",
    fill: "none",
    viewBox: "0 0 32 32",
  };

  if (type === "groupage") {
    return <svg {...props}><path d="M6 10h20v14H6zM10 6h12v4H10zM4 26h24M10 24v2m12-2v2" /><path d="M6 16h20M16 10v14" /></svg>;
  }

  if (type === "sprinter") {
    return <svg {...props}><path d="M4 11h16v12H4zM20 15h5l3 4v4h-8z" /><path d="M7 23a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm15 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM20 15v8" /></svg>;
  }

  if (type === "small-truck") {
    return <svg {...props}><path d="M3 8h18v15H3zM21 14h5l3 4v5h-8z" /><path d="M7 23a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm16 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM21 14v9" /></svg>;
  }

  if (type === "truck-40t") {
    return <svg {...props}><path d="M2 9h19v14H2zM21 13h6l3 4v6h-9z" /><path d="M6 23a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm17 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM21 13v10M2 13h19" /></svg>;
  }

  return <svg {...props}><path d="M16 4a12 12 0 1 0 12 12" /><path d="M20 4h8v8M28 4l-9 9M10 18l3 3 7-8" /></svg>;
}

export function TransportTypeStep({ data, onChange }: TransportTypeStepProps) {
  return (
    <fieldset className="request-fieldset">
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
                  <span className="transport-type-card__radio" aria-hidden="true" />
                  <TransportTypeIcon type={option.value} />
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
