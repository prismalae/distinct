/**
 * Cleaning prices, taken from the cleaning services brochure. Figures live
 * here rather than in the component so a price change is a one-line edit.
 */

export type CleaningPackage = {
  /** Property size the price is quoted against. */
  name: string;
  /** What the price buys. */
  detail: string;
  /** Numeric part only — the currency and qualifier are rendered separately. */
  price: string;
};

export const deepCleanPackages: CleaningPackage[] = [
  { name: "3 Bed Villa", detail: "Deep clean", price: "850" },
  { name: "4 Bed Villa", detail: "Deep clean", price: "1,050" },
];

export const deepCleanNote =
  "Prices may vary depending on the size, condition and specific requirements of the property.";

export const deepCleanIncludes: string[] = [
  "Full kitchen deep clean (cabinets exterior, counters, sink, hob)",
  "Oven (exterior)",
  "Bathrooms — descaling, sanitising and polishing",
  "Bedrooms & living areas — dusting & cleaning",
  "Skirting boards & door frames",
  "Light switches & sockets",
  "Internal windows & glass",
  "Window tracks & sills",
  "Cupboards (exterior)",
  "Floors — vacuuming & mopping",
  "Cobweb removal",
  "Dusting high & hard-to-reach areas",
  "Cleaning under and behind accessible furniture",
  "Freshening up the entire villa",
];

/** The promotional hourly-style general clean shown alongside the deep clean. */
export const generalClean = {
  name: "General clean",
  badge: "Promo price",
  currency: "AED",
  price: "30",
  suffix: "only",
  includes: [
    "Dusting all accessible surfaces",
    "Vacuuming & mopping floors",
    "Wiping kitchen countertops & outer surfaces",
    "Cleaning sinks & taps",
    "Cleaning bathroom (toilet, basin, mirror)",
    "Emptying bins",
  ],
} as const;
