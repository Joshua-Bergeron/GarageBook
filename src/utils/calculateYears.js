/**
 * Calculates a list of all years in the past 75 years
 * @return {String[]} array of years
 */

export function calculateYears() {
  return Array.from(new Array(75), (val, index) =>
    (new Date().getFullYear() - index).toString()
  );
}
