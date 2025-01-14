import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import VehicleSummaryItem from "./VehicleSummaryItem";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

useRouter.mockImplementation(() => ({
  push: jest.fn(),
}));

it("renders without crashing", () => {
  render(
    <VehicleSummaryItem
      make={"Toyota"}
      model={"Corolla"}
      year={2003}
      color={"White"}
    />
  );

  expect(screen.getByText("Toyota Corolla")).toBeInTheDocument();
  expect(screen.getByText("2003 - White")).toBeInTheDocument();
});
