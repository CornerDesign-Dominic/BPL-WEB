export const transportTypeOptions = [
  {
    value: "groupage",
    label: "Sammelgut",
    description: "Für kleinere Sendungen, einzelne Paletten oder gebündelte Transporte.",
  },
  {
    value: "sprinter",
    label: "Sprinter",
    description: "Für zeitkritische und kleinere Direkttransporte.",
  },
  {
    value: "small-truck",
    label: "Klein-Lkw",
    description: "Für mittlere Sendungen mit höherem Platz- oder Gewichtsbedarf.",
  },
  {
    value: "truck-40t",
    label: "40-Tonner",
    description: "Für größere Sendungen, Teil- oder Komplettladungen.",
  },
  {
    value: "special",
    label: "Spezial / Weiteres",
    description: "Für besondere Abmessungen, Anforderungen oder noch unklare Transportarten.",
  },
] as const;

export type TransportType = (typeof transportTypeOptions)[number]["value"];

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
  packages: string;
  weightKg: string;
  goodsDescription: string;
  dimensions: string;
  specialNotes: string;
  company: string;
  contactPerson: string;
  email: string;
  phone: string;
  customerNumber: string;
  message: string;
  privacyAccepted: boolean;
  website: string;
};

export type FieldErrors = Partial<Record<keyof TransportRequestData, string>>;

export type UpdateTransportRequestField = <K extends keyof TransportRequestData>(
  field: K,
  value: TransportRequestData[K],
) => void;
