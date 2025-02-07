import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

export const compareArrays = (a: unknown[], b: unknown[]): boolean => {
  return JSON.stringify(a) === JSON.stringify(b);
};
