import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import VehicleList from "./VehicleList";
import { vehicleList } from "@/mocks/vehicleMocks";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

useRouter.mockImplementation(() => ({
  push: jest.fn(),
}));

it("renders without crashing", () => {
  render(<VehicleList vehicleList={vehicleList} />);
});

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

  expect(screen.getByText("Honda Civic")).toBeInTheDocument();
  expect(screen.getByText("2023 - Blue")).toBeInTheDocument();
  expect(screen.getByText("Mileage: 2,102 miles")).toBeInTheDocument();
  expect(
    screen.getByText("Last Service: 07/22/2024 - New Air Filter")
  ).toBeInTheDocument();

  expect(screen.queryAllByTestId("history-button")).toHaveLength(3);
  expect(screen.queryAllByTestId("settings-button")).toHaveLength(3);
});
