import Garage from "@/components/Garage";
import { vehicleList } from "@/mocks/vehicleMocks";

export default {
  title: "Garage",
  component: Garage,
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
