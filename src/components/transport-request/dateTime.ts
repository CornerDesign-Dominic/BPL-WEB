function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function toLocalDateValue(date = new Date()) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function toLocalTimeValue(date = new Date()) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function isPastTransportDate(dateValue: string, now = new Date()) {
  return Boolean(dateValue) && dateValue < toLocalDateValue(now);
}

export function isPastTransportTime(dateValue: string, timeValue: string, now = new Date()) {
  return (
    Boolean(dateValue) &&
    /^\d{2}:\d{2}$/.test(timeValue) &&
    dateValue === toLocalDateValue(now) &&
    timeValue < toLocalTimeValue(now)
  );
}
