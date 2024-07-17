import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import VehicleList from "./VehicleList";
import { vehicleList } from "@/mocks/vehicleMocks";

it("renders each vehicle summary item as a list", () => {
  render(<VehicleList vehicleList={vehicleList} />);

  expect(screen.getByText("Toyota Corolla")).toBeInTheDocument();
  expect(screen.getByText("2003 - White")).toBeInTheDocument();
  expect(screen.getByText("Mileage: 178,234 miles")).toBeInTheDocument();
  expect(
    screen.getByText("Last Service: 05/16/2024 - Oil Change")
  ).toBeInTheDocument();

  expect(screen.getByText("BMW Z4")).toBeInTheDocument();
  expect(screen.getByText("2008 - Black")).toBeInTheDocument();
  expect(screen.getByText("Mileage: 84,772 miles")).toBeInTheDocument();

  expect(screen.getByText("Honda Civic Type R")).toBeInTheDocument();
  expect(screen.getByText("2023 - Blue")).toBeInTheDocument();
  expect(screen.getByText("Mileage: 2,102 miles")).toBeInTheDocument();
  expect(
    screen.getByText("Last Service: 07/22/2024 - New Air Filter")
  ).toBeInTheDocument();

  expect(screen.queryAllByTestId("maintenance-button")).toHaveLength(3);
  expect(screen.queryAllByTestId("settings-button")).toHaveLength(3);
});
