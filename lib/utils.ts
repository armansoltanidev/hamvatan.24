import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const operators = [
  {
    name: "ام تــی ان",
    code: "77",
  },
  {
    name: "سلام",
    code: "79",
  },
];

export function detectOperator(phoneNumber: string): string {
  // Remove any non-digit characters from the input
  const cleanedNumber = phoneNumber.replace(/\D/g, "");

  // Check the length of the cleaned number
  if (cleanedNumber.length !== 10) {
    return "Invalid phone number length. Please provide a 10-digit number.";
  }

  // Define operator prefixes and their corresponding names
  const operatorPrefixes: Record<string, string> = {
    "070": "افغــان بیسیم",
    "071": "افغــان بیسیم",
    "072": "روشــن",
    "079": "روشــن",
    "073": "اتصــالات",
    "078": "اتصــالات",
    "076": "ام تی ان",
    "077": "ام تی ان",
    "074": "سلام",
    "075": "سلام",
  };

  // Extract the first three digits (prefix) from the cleaned number
  const prefix = cleanedNumber.slice(0, 3);

  // Check if the prefix corresponds to any known operator
  if (operatorPrefixes.hasOwnProperty(prefix)) {
    return ` ${operatorPrefixes[prefix]}.`;
  } else {
    return "Unknown operator. Please check the provided prefix.";
  }
}

export function persianDateString() {
  const date = new Date();
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  //@ts-ignore
  const fullDate = date.toLocaleDateString("fa-IR", option);
  return fullDate;
}
