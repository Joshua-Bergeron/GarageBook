import { calculateYears } from "./calculateYears";

it("should return an array of 75 years starting from the current year", () => {
  const currentYear = new Date().getFullYear();
  const years = calculateYears();

  expect(years.length).toBe(75);
  expect(years[0]).toBe(currentYear.toString());
  expect(years[74]).toBe((currentYear - 74).toString());
});

it("should return years as strings", () => {
  const years = calculateYears();
  years.forEach((year) => {
    expect(typeof year).toBe("string");
  });
});
