export const transportTypeOptions = [
  {
    value: "sprinter",
    label: "Sprinter",
    description: "Für zeitkritische und kleinere Direkttransporte.",
  },
  {
    value: "truck-7-5t",
    label: "7,5-Tonner",
    description: "Für mittlere Sendungen mit höherem Platz- oder Gewichtsbedarf.",
  },
  {
    value: "truck-12-5t",
    label: "12,5-Tonner",
    description: "Für größere Sendungen mit zusätzlichem Platz- oder Gewichtsbedarf.",
  },
  {
    value: "truck-40t",
    label: "40-Tonner",
    description: "Für größere Sendungen, Teil- oder Komplettladungen.",
  },
  {
    value: "other",
    label: "Anderes",
    description: "Für sonstige Anforderungen oder noch unklare Transportarten.",
  },
] as const;

export type TransportType = (typeof transportTypeOptions)[number]["value"];

export const packageTypeOptions = [
  "Europalette",
  "Einwegpalette",
  "Karton",
  "Bündel",
  "Gitterbox",
  "CHEP-Palette",
  "Halbe Europalette",
  "Sonstiges",
] as const;

export const goodsTypeOptions = [
  "Getränke, Lebensmittel & Pflanzen",
  "Chemikalien & Gesundheitsprodukte",
  "Möbel & Zubehör",
  "Industrieprodukte",
  "Kleidung & Accessoires",
  "Baumaterial",
  "Fahrzeuge, Motoren & Ersatzteile",
  "Geräte & Material",
  "Freizeitartikel",
  "Kartons & Drucke",
  "Sonstiges",
] as const;

export type TransportRequestData = {
  transportType: TransportType | "";
  pickupCountry: string;
  pickupPostalCode: string;
  pickupCity: string;
  deliveryCountry: string;
  deliveryPostalCode: string;
  deliveryCity: string;
  pickupDate: string;
  pickupTime: string;
  pickupEndDate: string;
  pickupEndTime: string;
  isFixedPickup: boolean;
  packages: string;
  packageType: "" | (typeof packageTypeOptions)[number];
  goodsType: "" | (typeof goodsTypeOptions)[number];
  weightKg: string;
  lengthCm: string;
  widthCm: string;
  heightCm: string;
  company: string;
  contactPerson: string;
  email: string;
  phone: string;
  message: string;
  privacyAccepted: boolean;
  website: string;
};

export type FieldErrors = Partial<Record<keyof TransportRequestData, string>>;

export type UpdateTransportRequestField = <K extends keyof TransportRequestData>(
  field: K,
  value: TransportRequestData[K],
) => void;
