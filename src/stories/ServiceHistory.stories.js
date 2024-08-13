import ServiceHistory from "@/components/ServiceHistory";
import { serviceHistory } from "@/mocks/vehicleData";

export default {
  title: "Service History Table",
  component: ServiceHistory,
};

export const History = {
  args: {
    serviceHistory: serviceHistory,
  },
};
