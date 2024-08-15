import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  within,
  wait,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewVehicleForm from "./NewVehicleForm";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

it("renders without crashing", () => {
  render(<NewVehicleForm />);
});

it("renders all fields", () => {
  render(<NewVehicleForm />);

  expect(screen.getByTestId("make-combo-box")).toBeInTheDocument();
  expect(screen.getByTestId("model-combo-box")).toBeInTheDocument();
  expect(screen.getByTestId("year-combo-box")).toBeInTheDocument();
  expect(screen.getByTestId("mileage-field")).toBeInTheDocument();
  expect(screen.getByTestId("license-field")).toBeInTheDocument();
  expect(screen.getByTestId("color-combo-box")).toBeInTheDocument();
  expect(screen.getByTestId("submit-button")).toBeInTheDocument();
});

it("allows user to select from the make field", async () => {
  render(<NewVehicleForm />);

  expect(screen.queryByText("Toyota")).not.toBeInTheDocument();
  const autocomplete = screen.getByTestId("make-combo-box");
  const input = within(autocomplete).getByRole("combobox");
  userEvent.click(input);
  userEvent.type(input, "Toyota");
  const option = await screen.findByText("Toyota");
  userEvent.click(option);
  await userEvent.click(input);
  await delay(200); // deplay for value to be updated
  expect(input).toHaveValue("Toyota");
});

it("allows user to select from the model field", async () => {
  render(<NewVehicleForm />);

  expect(screen.queryByText("Corolla")).not.toBeInTheDocument();
  const autocomplete = screen.getByTestId("model-combo-box");
  const input = within(autocomplete).getByRole("combobox");
  userEvent.click(input);
  userEvent.type(input, "Corolla");
  const option = await screen.findByText("Corolla");
  userEvent.click(option);
  await userEvent.click(input);
  await delay(200);
  expect(input).toHaveValue("Corolla");
});

it("allows user to select from the year field", async () => {
  render(<NewVehicleForm />);

  expect(screen.queryByText("2003")).not.toBeInTheDocument();
  const autocomplete = screen.getByTestId("year-combo-box");
  const input = within(autocomplete).getByRole("combobox");
  userEvent.click(input);
  userEvent.type(input, "2003");
  const option = await screen.findByText("2003");
  userEvent.click(option);
  await userEvent.click(input);
  await delay(100);
  expect(input).toHaveValue("2003");
});

it("allows user to type in the mileage field", () => {
  render(<NewVehicleForm />);

  const input = screen.getByTestId("mileage-field").querySelector("input");
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "123456" } });
  expect(input.value).toBe("123456");
});

it("allows user to type in the license field", () => {
  render(<NewVehicleForm />);

  const input = screen.getByTestId("license-field").querySelector("input");
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "9WKA201" } });
  expect(input.value).toBe("9WKA201");
});

it("allows user to select from the color field", async () => {
  render(<NewVehicleForm />);

  expect(screen.queryByText("White")).not.toBeInTheDocument();
  const autocomplete = screen.getByTestId("color-combo-box");
  const input = within(autocomplete).getByRole("combobox");
  userEvent.click(input);
  userEvent.type(input, "White");
  const option = await screen.findByText("White");
  userEvent.click(option);
  await userEvent.click(input);
  await delay(100);
  expect(input).toHaveValue("White");
});

it("disables the submit button when no selections are made", async () => {
  render(<NewVehicleForm />);

  const button = screen.getByTestId("submit-button");
  expect(button).toBeEnabled();
  fireEvent.click(button);
  expect(button).toBeDisabled();
});

it("calls function on submit button click", async () => {
  console.log = jest.fn();
  render(<NewVehicleForm />);

  const button = screen.getByTestId("submit-button");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(console.log).toHaveBeenCalledTimes(1);
});
