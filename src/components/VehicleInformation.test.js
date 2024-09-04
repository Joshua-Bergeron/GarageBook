import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import VehicleInformation from "./VehicleInformation";

it("renders without crashing", () => {
  render(
    <VehicleInformation
      mileage={178234}
      licensePlate={"7JSN910"}
      vin={"00000000000000000"}
    />
  );
});

it("renders all fields", () => {
  render(
    <VehicleInformation
      mileage={178234}
      licensePlate={"7JSN910"}
      vin={"00000000000000000"}
    />
  );
  expect(screen.getByText("Vehicle Information")).toBeInTheDocument();
  expect(screen.getByText("Current Mileage: 178,234")).toBeInTheDocument();
  expect(screen.getByText("License Plate: 7JSN910")).toBeInTheDocument();
  expect(screen.getByText("VIN: 00000000000000000")).toBeInTheDocument();
});
