import { goodsTypeOptions, packageTypeOptions, type FieldErrors, type TransportRequestData, type UpdateTransportRequestField } from "./types";

type ShipmentStepProps = {
  data: TransportRequestData;
  errors: FieldErrors;
  onChange: UpdateTransportRequestField;
};

export function ShipmentStep({ data, errors, onChange }: ShipmentStepProps) {
  return (
    <div className="request-step request-step--shipment">
      <div className="request-step__heading">
        <h3>Sendung</h3>
      </div>
      <div className="shipment-form-grid">
        <div className="shipment-time-grid">
          <label>Abholtermin von: Datum<input type="date" value={data.pickupDate} onChange={(event) => onChange("pickupDate", event.target.value)} aria-invalid={Boolean(errors.pickupDate)} /></label>
          <label>Abholtermin von: Uhrzeit<input type="time" value={data.pickupTime} onChange={(event) => onChange("pickupTime", event.target.value)} aria-invalid={Boolean(errors.pickupTime)} /></label>
          {!data.isFixedPickup ? <label>Abholtermin bis: Datum<input type="date" value={data.pickupEndDate} onChange={(event) => onChange("pickupEndDate", event.target.value)} aria-invalid={Boolean(errors.pickupEndDate)} /></label> : null}
          {!data.isFixedPickup ? <label>Abholtermin bis: Uhrzeit<input type="time" value={data.pickupEndTime} onChange={(event) => onChange("pickupEndTime", event.target.value)} aria-invalid={Boolean(errors.pickupEndTime)} /></label> : null}
          <label className="shipment-fix-check"><input type="checkbox" checked={data.isFixedPickup} onChange={(event) => onChange("isFixedPickup", event.target.checked)} /> Fixtermin</label>
        </div>
        <label>Anzahl der Packstücke<input type="number" min="1" inputMode="numeric" value={data.packages} onChange={(event) => onChange("packages", event.target.value)} aria-invalid={Boolean(errors.packages)} /></label>
        <label>Packstückart<select value={data.packageType} onChange={(event) => onChange("packageType", event.target.value as TransportRequestData["packageType"])} aria-invalid={Boolean(errors.packageType)}><option value="">Bitte auswählen</option>{packageTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
        <label>Warenart<select value={data.goodsType} onChange={(event) => onChange("goodsType", event.target.value as TransportRequestData["goodsType"])} aria-invalid={Boolean(errors.goodsType)}><option value="">Bitte auswählen</option>{goodsTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
        <label>Gesamtgewicht der Ware in kg<input type="number" min="1" inputMode="decimal" value={data.weightKg} onChange={(event) => onChange("weightKg", event.target.value)} aria-invalid={Boolean(errors.weightKg)} /></label>
        <div className="shipment-dimensions">
          <label>Länge in cm<input type="number" min="1" inputMode="decimal" value={data.lengthCm} onChange={(event) => onChange("lengthCm", event.target.value)} aria-invalid={Boolean(errors.lengthCm)} /></label>
          <label>Breite in cm<input type="number" min="1" inputMode="decimal" value={data.widthCm} onChange={(event) => onChange("widthCm", event.target.value)} aria-invalid={Boolean(errors.widthCm)} /></label>
          <label>Höhe in cm<input type="number" min="1" inputMode="decimal" value={data.heightCm} onChange={(event) => onChange("heightCm", event.target.value)} aria-invalid={Boolean(errors.heightCm)} /></label>
        </div>
      </div>
    </div>
  );
}
