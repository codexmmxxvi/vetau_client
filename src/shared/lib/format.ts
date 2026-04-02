const vndFormatter = new Intl.NumberFormat("vi-VN", {
  currency: "VND",
  style: "currency",
  maximumFractionDigits: 0,
});

const shortDateFormatter = new Intl.DateTimeFormat("vi-VN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export function formatVnd(value: number) {
  return vndFormatter.format(value);
}

export function formatShortDate(value: string) {
  return shortDateFormatter.format(new Date(value));
}
