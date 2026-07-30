import { goodsTypeOptions, packageTypeOptions, type FieldErrors, type TransportRequestData, type UpdateTransportRequestField } from "./types";

type ShipmentStepProps = {
  data: TransportRequestData;
  errors: FieldErrors;
  onChange: UpdateTransportRequestField;
};

const hourOptions = [
  ...Array.from({ length: 23 }, (_, index) => String(index + 1).padStart(2, "0")),
  "00",
];
const minuteOptions = Array.from({ length: 60 }, (_, index) => String(index).padStart(2, "0"));

type TimeSelectProps = {
  value: string;
  invalid: boolean;
  onChange: (value: string) => void;
};

function TimeSelect({ value, invalid, onChange }: TimeSelectProps) {
  const [hour = "", minute = ""] = value.split(":");

  const updateTime = (nextHour: string, nextMinute: string) => {
    onChange(nextHour && nextMinute ? `${nextHour}:${nextMinute}` : "");
  };

  return (
    <div className="shipment-time-control" role="group" aria-label="Uhrzeit">
      <span className="shipment-time-control__label">Uhrzeit</span>
      <div className="shipment-time-control__selects">
        <select
          aria-label="Stunde"
          value={hour}
          onChange={(event) => updateTime(event.target.value, minute)}
          aria-invalid={invalid}
        >
          <option value="">Std.</option>
          {hourOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
        <select
          aria-label="Minute"
          value={minute}
          onChange={(event) => updateTime(hour, event.target.value)}
          aria-invalid={invalid}
        >
          <option value="">Min.</option>
          {minuteOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>
    </div>
  );
}

export function ShipmentStep({ data, errors, onChange }: ShipmentStepProps) {
  return (
    <div className="request-step request-step--shipment">
      <div className="request-step__heading">
        <h3>Sendung</h3>
      </div>
      <div className="shipment-groups">
        <fieldset className="shipment-group">
          <legend>Abholtermin</legend>
          <div className="shipment-time-grid">
            <div className="shipment-time-row">
              <p>Von</p>
              <label>Datum<input type="date" value={data.pickupDate} onChange={(event) => onChange("pickupDate", event.target.value)} aria-invalid={Boolean(errors.pickupDate)} /></label>
              <TimeSelect value={data.pickupTime} invalid={Boolean(errors.pickupTime)} onChange={(value) => onChange("pickupTime", value)} />
            </div>
            {!data.isFixedPickup ? <div className="shipment-time-row">
              <p>Bis</p>
              <label>Datum<input type="date" value={data.pickupEndDate} onChange={(event) => onChange("pickupEndDate", event.target.value)} aria-invalid={Boolean(errors.pickupEndDate)} /></label>
              <TimeSelect value={data.pickupEndTime} invalid={Boolean(errors.pickupEndTime)} onChange={(value) => onChange("pickupEndTime", value)} />
            </div> : null}
          </div>
          <label className="shipment-fix-check"><input type="checkbox" checked={data.isFixedPickup} onChange={(event) => onChange("isFixedPickup", event.target.checked)} /> Fixtermin</label>
        </fieldset>
        <fieldset className="shipment-group">
          <legend>Packstücke &amp; Ware</legend>
          <div className="shipment-group__grid">
            <label>Anzahl der Packstücke<input type="number" min="1" inputMode="numeric" value={data.packages} onChange={(event) => onChange("packages", event.target.value)} aria-invalid={Boolean(errors.packages)} /></label>
            <label>Packstückart<select value={data.packageType} onChange={(event) => onChange("packageType", event.target.value as TransportRequestData["packageType"])} aria-invalid={Boolean(errors.packageType)}><option value="">Bitte auswählen</option>{packageTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
            <label>Warenart<select value={data.goodsType} onChange={(event) => onChange("goodsType", event.target.value as TransportRequestData["goodsType"])} aria-invalid={Boolean(errors.goodsType)}><option value="">Bitte auswählen</option>{goodsTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
            <label>Gesamtgewicht der Ware in kg<input type="number" min="1" inputMode="decimal" value={data.weightKg} onChange={(event) => onChange("weightKg", event.target.value)} aria-invalid={Boolean(errors.weightKg)} /></label>
          </div>
        </fieldset>
        <fieldset className="shipment-group">
          <legend>Maße pro Packstück</legend>
          <div className="shipment-dimensions">
            <label>Länge in cm<input type="number" min="1" inputMode="decimal" value={data.lengthCm} onChange={(event) => onChange("lengthCm", event.target.value)} aria-invalid={Boolean(errors.lengthCm)} /></label>
            <label>Breite in cm<input type="number" min="1" inputMode="decimal" value={data.widthCm} onChange={(event) => onChange("widthCm", event.target.value)} aria-invalid={Boolean(errors.widthCm)} /></label>
            <label>Höhe in cm<input type="number" min="1" inputMode="decimal" value={data.heightCm} onChange={(event) => onChange("heightCm", event.target.value)} aria-invalid={Boolean(errors.heightCm)} /></label>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
