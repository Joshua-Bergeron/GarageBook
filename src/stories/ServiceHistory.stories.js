import ServiceHistory from "@/components/ServiceHistory";
import { serviceHistoryMock } from "@/mocks/vehicleMocks";

export default {
  title: "Service History Table",
  component: ServiceHistory,
};

export const History = {
  args: {
    serviceHistory: serviceHistoryMock,
  },
};
