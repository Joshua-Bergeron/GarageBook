import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ServiceSummary from "./ServiceSummary";

it("renders without crashing", () => {
  render(
    <ServiceSummary
      lastServiceDate={"2005-07-25"}
      lastServiceType={"Wheel Alignment"}
      totalServices={10}
      mileage={178234}
      licensePlate={"7JSN910"}
    />
  );
});

it("renders all fields", () => {
  render(
    <ServiceSummary
      lastServiceDate={"2005-07-25"}
      lastServiceType={"Wheel Alignment"}
      totalServices={10}
      mileage={178234}
      licensePlate={"7JSN910"}
    />
  );
  expect(screen.getByText("Service Summary")).toBeInTheDocument();
  expect(screen.getByText("Last Service Date: 07/25/2005")).toBeInTheDocument();
  expect(
    screen.getByText("Last Service Type: Wheel Alignment")
  ).toBeInTheDocument();
  expect(screen.getByText("Total Services: 10")).toBeInTheDocument();
  expect(screen.getByText("Current Mileage: 178,234")).toBeInTheDocument();
  expect(screen.getByText("License Plate: 7JSN910")).toBeInTheDocument();
});
