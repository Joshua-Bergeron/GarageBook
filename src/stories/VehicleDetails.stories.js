import { fn } from "@storybook/test";
import VehicleDetails from "@/components/VehicleDetails";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Vehicle Details",
  component: VehicleDetails,
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
    color: "White",
  },
};
