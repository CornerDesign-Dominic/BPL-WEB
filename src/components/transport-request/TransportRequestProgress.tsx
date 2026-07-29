const steps = ["Fahrzeug", "Strecke", "Sendung", "Kontakt", "Prüfen"];

type TransportRequestProgressProps = {
  currentStep: number;
};

export function TransportRequestProgress({ currentStep }: TransportRequestProgressProps) {
  return (
    <ol className="request-progress" aria-label="Fortschritt der Transportanfrage">
      {steps.map((label, index) => {
        const step = index + 1;
        const state = step === currentStep ? "is-current" : step < currentStep ? "is-complete" : "";

        return (
          <li className={state} key={label} aria-current={step === currentStep ? "step" : undefined}>
            <span>{step}</span>
            <strong>{label}</strong>
          </li>
        );
      })}
    </ol>
  );
}
