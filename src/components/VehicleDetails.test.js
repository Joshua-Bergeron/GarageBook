import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import VehicleSummaryItem from "./VehicleSummaryItem";

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
