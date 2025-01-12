import Garage from "@/components/Garage";
import { vehicleList } from "@/mocks/vehicleMocks";

export default function Page() {
  return <Garage vehicleList={vehicleList} />;
}
