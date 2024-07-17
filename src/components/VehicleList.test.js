import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import VehicleList from "./VehicleList";

const mockData = [
  {
    make: "Toyota",
    model: "Corolla",
    year: "2003",
    mileage: 178234,
    color: "White",
    lastServiceDate: "05/16/2024",
    lastServiceType: "Oil Change",
  },
  {
    make: "BMW",
    model: "Z4",
    year: "2008",
    mileage: 84772,
    color: "Black",
  },
  {
    make: "Honda",
    model: "Civic Type R",
    year: "2023",
    mileage: 2102,
    color: "Blue",
    lastServiceDate: "07/22/2024",
    lastServiceType: "New Tires",
  },
];

it("renders each vehicle summary item as a list", () => {
  render(<VehicleList vehicleList={mockData} />);

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
    screen.getByText("Last Service: 07/22/2024 - New Tires")
  ).toBeInTheDocument();

  expect(screen.queryAllByTestId("maintenance-button")).toHaveLength(3);
  expect(screen.queryAllByTestId("settings-button")).toHaveLength(3);
});
