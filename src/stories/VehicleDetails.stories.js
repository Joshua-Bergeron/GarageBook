import VehicleDetails from "@/components/VehicleDetails";
import { corollaDetails } from "@/mocks/vehicleMocks";

export default {
  title: "Vehicle Details",
  component: VehicleDetails,
};

export const WithAllInformation = {
  args: corollaDetails,
};
