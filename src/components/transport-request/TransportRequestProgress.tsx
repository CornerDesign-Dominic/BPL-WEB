const steps = ["Fahrzeug", "Strecke", "Sendung", "Kontakt", "Prüfen"];

type TransportRequestProgressProps = {
  currentStep: number;
  highestReachedStep: number;
  onStepChange: (step: number) => void;
};

export function TransportRequestProgress({ currentStep, highestReachedStep, onStepChange }: TransportRequestProgressProps) {
  return (
    <ol className="request-progress" aria-label="Fortschritt der Transportanfrage">
      {steps.map((label, index) => {
        const step = index + 1;
        const isCurrent = step === currentStep;
        const isReachable = step <= highestReachedStep;
        const state = isCurrent ? "is-current" : isReachable ? "is-complete" : "is-locked";

        return (
          <li className={state} key={label}>
            <button
              type="button"
              disabled={!isReachable}
              aria-current={isCurrent ? "step" : undefined}
              aria-label={`Schritt ${step}: ${label}`}
              onClick={() => onStepChange(step)}
            >
              <span>{step}</span>
              <strong>{label}</strong>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
