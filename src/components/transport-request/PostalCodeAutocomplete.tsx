"use client";

import { useEffect, useId, useState } from "react";
import { findPostalCodeSuggestions, type PostalCodeSuggestion } from "./postalCodeProvider";

type PostalCodeAutocompleteProps = {
  id: string;
  country: string;
  value: string;
  onChange: (postalCode: string) => void;
  onSuggestionSelect: (suggestion: PostalCodeSuggestion) => void;
  invalid?: boolean;
};

export function PostalCodeAutocomplete({
  id,
  country,
  value,
  onChange,
  onSuggestionSelect,
  invalid = false,
}: PostalCodeAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<PostalCodeSuggestion[]>([]);
  const listId = useId();

  useEffect(() => {
    let active = true;

    if (country !== "Deutschland" || value.length < 3) return;

    void findPostalCodeSuggestions(country, value).then((results) => {
      if (active) setSuggestions(results);
    });

    return () => {
      active = false;
    };
  }, [country, value]);

  return (
    <div className="postal-code-autocomplete">
      <input
        id={id}
        value={value}
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength={5}
        autoComplete="postal-code"
        aria-invalid={invalid}
        aria-autocomplete="list"
        aria-controls={country === "Deutschland" && value.length >= 3 && suggestions.length > 0 ? listId : undefined}
        onChange={(event) => onChange(event.target.value.replace(/\D/g, "").slice(0, 5))}
      />
      {country === "Deutschland" && value.length >= 3 && suggestions.length > 0 ? (
        <ul className="postal-code-autocomplete__list" id={listId} role="listbox">
          {suggestions.map((suggestion) => (
            <li key={`${suggestion.postalCode}-${suggestion.city}`}>
              <button type="button" onClick={() => onSuggestionSelect(suggestion)}>
                {suggestion.postalCode} {suggestion.city}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
