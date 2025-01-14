"use client";
import ServiceHistoryPage from "@/components/ServiceHistoryPage";
import { vehicleList, serviceHistoryMock } from "@/mocks/vehicleMocks";

export default function HistoryPage({ params }) {
  const { id } = params;

  const vehicle = vehicleList.find((vehicle) => vehicle.id === Number(id));

  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  return (
    <ServiceHistoryPage vehicle={vehicle} serviceHistory={serviceHistoryMock} />
  );
}
