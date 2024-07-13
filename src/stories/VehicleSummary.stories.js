import { fn } from "@storybook/test";
import VehicleSummary from "../components/VehicleSummary";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Vehicle Summary Card",
  component: VehicleSummary,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const VehicleSummaryCard = {
  args: {},
};
