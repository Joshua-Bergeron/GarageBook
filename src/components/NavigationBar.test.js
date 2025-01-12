import "@testing-library/jest-dom";
import { render, screen, fireEvent, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavigationBar from "./NavigationBar";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: () => null,
    };
  },
}));

it("renders without crashing", () => {
  render(<NavigationBar />);
});

it("renders all fields", async () => {
  render(<NavigationBar />);

  expect(screen.getByTestId("garage-icon")).toBeInTheDocument();
  expect(screen.getByTestId("title-text")).toBeInTheDocument();
  expect(screen.getByTestId("vehicles-link")).toBeInTheDocument();
  expect(screen.getByTestId("avatar-icon")).toBeInTheDocument();

  const profile = screen.getByTestId("avatar-icon");
  userEvent.click(profile);

  expect(await screen.findByTestId("account-link")).toBeInTheDocument();
  expect(await screen.findByTestId("logout-link")).toBeInTheDocument();
});

it("callls function when vehicles link is clicked", async () => {
  console.log = jest.fn();
  render(<NavigationBar />);

  const button = screen.getByTestId("vehicles-link");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(console.log).toHaveBeenCalledTimes(1);
});

it("callls function when account link is clicked", async () => {
  console.log = jest.fn();
  render(<NavigationBar />);
  const profile = screen.getByTestId("avatar-icon");
  userEvent.click(profile);

  const button = await screen.findByTestId("account-link");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(console.log).toHaveBeenCalledTimes(1);
});

it("callls function when logout link is clicked", async () => {
  console.log = jest.fn();
  render(<NavigationBar />);
  const profile = screen.getByTestId("avatar-icon");
  userEvent.click(profile);

  const button = await screen.findByTestId("logout-link");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(console.log).toHaveBeenCalledTimes(1);
});
