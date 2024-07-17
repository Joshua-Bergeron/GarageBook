import VehicleList from "@/components/VehicleList";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Vehicle List",
  component: VehicleList,
  // parameters: {
  //   layout: "centered",
  // },
  // tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithMultipleVehicles = {
  args: {
    vehicleList: [
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
        lastServiceType: "New Air Filter",
      },
    ],
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithNoVehicles = {
  args: {
    vehicleList: [],
  },
};
