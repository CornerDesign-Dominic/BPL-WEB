import { NextResponse } from "next/server";

const transportTypes = new Set(["groupage", "sprinter", "small-truck", "truck-40t", "special"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type TransportRequestPayload = Record<string, unknown>;

function stringValue(payload: TransportRequestPayload, key: string, maxLength = 500) {
  const value = payload[key];
  return typeof value === "string" && value.length <= maxLength ? value.trim() : "";
}

function isValidRequest(payload: TransportRequestPayload) {
  const transportType = stringValue(payload, "transportType", 40);
  const pickupCountry = stringValue(payload, "pickupCountry", 80);
  const pickupPostalCode = stringValue(payload, "pickupPostalCode", 5);
  const pickupCity = stringValue(payload, "pickupCity", 120);
  const deliveryCountry = stringValue(payload, "deliveryCountry", 80);
  const deliveryPostalCode = stringValue(payload, "deliveryPostalCode", 5);
  const deliveryCity = stringValue(payload, "deliveryCity", 120);
  const pickupDate = stringValue(payload, "pickupDate", 20);
  const pickupTime = stringValue(payload, "pickupTime", 20);
  const pickupEndDate = stringValue(payload, "pickupEndDate", 20);
  const pickupEndTime = stringValue(payload, "pickupEndTime", 20);
  const isFixedPickup = payload.isFixedPickup === true;
  const packages = Number(stringValue(payload, "packages", 20));
  const packageType = stringValue(payload, "packageType", 80);
  const goodsType = stringValue(payload, "goodsType", 160);
  const weightKg = Number(stringValue(payload, "weightKg", 20));
  const lengthCm = Number(stringValue(payload, "lengthCm", 20));
  const widthCm = Number(stringValue(payload, "widthCm", 20));
  const heightCm = Number(stringValue(payload, "heightCm", 20));
  const email = stringValue(payload, "email", 254);
  const privacyAccepted = payload.privacyAccepted === true;

  return (
    transportTypes.has(transportType) &&
    Boolean(pickupCountry) &&
    /^\d{5}$/.test(pickupPostalCode) &&
    Boolean(pickupCity) &&
    Boolean(deliveryCountry) &&
    /^\d{5}$/.test(deliveryPostalCode) &&
    Boolean(deliveryCity) &&
    Boolean(pickupDate) &&
    Boolean(pickupTime) &&
    (isFixedPickup || (Boolean(pickupEndDate) && Boolean(pickupEndTime))) &&
    Number.isFinite(packages) && packages > 0 &&
    Boolean(packageType) &&
    Boolean(goodsType) &&
    Number.isFinite(weightKg) && weightKg > 0 &&
    Number.isFinite(lengthCm) && lengthCm > 0 &&
    Number.isFinite(widthCm) && widthCm > 0 &&
    Number.isFinite(heightCm) && heightCm > 0 &&
    emailPattern.test(email) &&
    privacyAccepted
  );
}

export async function POST(request: Request) {
  let payload: TransportRequestPayload;

  try {
    payload = await request.json() as TransportRequestPayload;
  } catch {
    return NextResponse.json({ message: "Ungültige Anfrage." }, { status: 400 });
  }

  if (stringValue(payload, "website", 200)) {
    return NextResponse.json({ message: "Die Anfrage konnte nicht verarbeitet werden." }, { status: 400 });
  }

  if (!isValidRequest(payload)) {
    return NextResponse.json({ message: "Bitte prüfen Sie Ihre Pflichtangaben." }, { status: 400 });
  }

  const mailConfigured = Boolean(
    process.env.TRANSPORT_REQUEST_RECIPIENT &&
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASSWORD,
  );

  if (mailConfigured) {
    return NextResponse.json(
      { message: "Ihre Anfrage konnte derzeit nicht übermittelt werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt." },
      { status: 501 },
    );
  }

  // Die Mail-Infrastruktur wird bewusst erst nach Konfiguration eines Anbieters aktiviert.
  return NextResponse.json(
    { message: "Ihre Anfrage konnte derzeit nicht übermittelt werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt." },
    { status: 503 },
  );
}
