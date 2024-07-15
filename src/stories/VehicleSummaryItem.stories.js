import { fn } from "@storybook/test";
import VehicleSummaryItem from "../components/VehicleSummaryItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Vehicle Summary Item",
  component: VehicleSummaryItem,
  // parameters: {
  //   layout: "centered",
  // },
  // tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithAllInformation = {
  args: {
    make: "Toyota",
    model: "Corolla",
    year: 2003,
    mileage: 178234,
    color: "White",
    lastServiceDate: "05/16/2024",
    lastServiceType: "Oil Change",
  },
};

export const WithNoLastServiceDate = {
  args: {
    make: "Toyota",
    model: "Camry",
    year: 2017,
    mileage: 78910,
    color: "Silver",
    lastServiceType: "",
  },
};
