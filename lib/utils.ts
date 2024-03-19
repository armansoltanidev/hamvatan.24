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

function getOperatorsByNumber(number: Number) {
  if (!number) return;

  const numberString = number.toString().length;

  if (numberString > 4 && numberString <= 10) {
    const code = number.toString().substr(1, 2);
    const findOperator = operators.find((number) => number.code === code);

    if (findOperator) {
      return findOperator.name;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export default getOperatorsByNumber;
