import { fn } from "@storybook/test";
import VehicleSummaryItem from "../components/VehicleSummaryItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Vehicle Summary Item",
  component: VehicleSummaryItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example = {
  args: {},
};
