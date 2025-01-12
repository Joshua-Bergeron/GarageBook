import Garage from "@/components/Garage";
import { vehicleList } from "@/mocks/vehicleMocks";

export default {
  title: "Garage",
  component: Garage,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const WithMultipleVehicles = {
  args: {
    vehicleList: vehicleList,
  },
};

export const WithNoVehicles = {
  args: {
    vehicleList: [],
  },
};
