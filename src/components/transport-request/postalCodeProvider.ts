export type PostalCodeSuggestion = {
  postalCode: string;
  city: string;
  country: string;
};

export async function findPostalCodeSuggestions(
  country: string,
  postalCodePrefix: string,
): Promise<PostalCodeSuggestion[]> {
  if (country !== "Deutschland" || postalCodePrefix.length < 3) {
    return [];
  }

  // Später wird hier eine freigegebene PLZ- oder Adress-API angebunden.
  return [];
}
