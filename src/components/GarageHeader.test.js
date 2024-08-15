import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import GarageHeader from "./GarageHeader";

it("renders without crashing", () => {
  render(<GarageHeader />);

  expect(screen.getByText("My Garage")).toBeInTheDocument();
  expect(screen.getByTestId("export-button")).toBeInTheDocument();
  expect(screen.getByTestId("new-vehicle-button")).toBeInTheDocument();
});

it("calls function on export pdf button click", () => {
  console.log = jest.fn();
  render(<GarageHeader />);

  const exportButton = screen.getByTestId("export-button");
  fireEvent.click(exportButton);
  expect(console.log).toHaveBeenCalledTimes(1);
});

it("calls function on new vehicle button click", () => {
  console.log = jest.fn();
  render(<GarageHeader />);

  const newVehicleButton = screen.getByTestId("new-vehicle-button");
  fireEvent.click(newVehicleButton);
  expect(console.log).toHaveBeenCalledTimes(1);
});
