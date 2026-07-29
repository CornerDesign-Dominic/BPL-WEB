import { PostalCodeAutocomplete } from "./PostalCodeAutocomplete";
import type { FieldErrors, TransportRequestData, UpdateTransportRequestField } from "./types";

type RouteStepProps = {
  data: TransportRequestData;
  errors: FieldErrors;
  onChange: UpdateTransportRequestField;
};

const countries = ["Deutschland", "Österreich", "Belgien", "Niederlande", "Anderes Land"];

export function RouteStep({ data, errors, onChange }: RouteStepProps) {
  return (
    <div className="request-step">
      <div className="request-step__heading">
        <h3>Strecke angeben</h3>
      </div>
      <div className="route-grid">
        <fieldset className="request-subfieldset">
          <legend>Abholung</legend>
          <div className="request-control"><label htmlFor="pickup-country">Land</label><select id="pickup-country" value={data.pickupCountry} onChange={(event) => onChange("pickupCountry", event.target.value)} aria-invalid={Boolean(errors.pickupCountry)}>{countries.map((country) => <option key={country}>{country}</option>)}</select></div>
          <div className="request-control"><label htmlFor="pickup-postal-code">Postleitzahl</label><PostalCodeAutocomplete id="pickup-postal-code" country={data.pickupCountry} value={data.pickupPostalCode} invalid={Boolean(errors.pickupPostalCode)} onChange={(value) => onChange("pickupPostalCode", value)} onSuggestionSelect={(suggestion) => { onChange("pickupPostalCode", suggestion.postalCode); onChange("pickupCity", suggestion.city); }} /></div>
          <div className="request-control"><label htmlFor="pickup-city">Ort</label><input id="pickup-city" value={data.pickupCity} onChange={(event) => onChange("pickupCity", event.target.value)} autoComplete="address-level2" aria-invalid={Boolean(errors.pickupCity)} /></div>
        </fieldset>
        <fieldset className="request-subfieldset">
          <legend>Zustellung</legend>
          <div className="request-control"><label htmlFor="delivery-country">Land</label><select id="delivery-country" value={data.deliveryCountry} onChange={(event) => onChange("deliveryCountry", event.target.value)} aria-invalid={Boolean(errors.deliveryCountry)}>{countries.map((country) => <option key={country}>{country}</option>)}</select></div>
          <div className="request-control"><label htmlFor="delivery-postal-code">Postleitzahl</label><PostalCodeAutocomplete id="delivery-postal-code" country={data.deliveryCountry} value={data.deliveryPostalCode} invalid={Boolean(errors.deliveryPostalCode)} onChange={(value) => onChange("deliveryPostalCode", value)} onSuggestionSelect={(suggestion) => { onChange("deliveryPostalCode", suggestion.postalCode); onChange("deliveryCity", suggestion.city); }} /></div>
          <div className="request-control"><label htmlFor="delivery-city">Ort</label><input id="delivery-city" value={data.deliveryCity} onChange={(event) => onChange("deliveryCity", event.target.value)} autoComplete="address-level2" aria-invalid={Boolean(errors.deliveryCity)} /></div>
        </fieldset>
      </div>
    </div>
  );
}
