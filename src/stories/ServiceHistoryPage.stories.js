import ServiceHistoryPage from "@/components/ServiceHistoryPage";
import { serviceHistoryMock } from "@/mocks/vehicleMocks";
import { corolla } from "@/mocks/vehicleMocks";

export default {
  title: "Vehicle Service History",
  component: ServiceHistoryPage,
};

export const History = {
  args: {
    vehicle: corolla,
    serviceHistory: serviceHistoryMock,
  },
};
