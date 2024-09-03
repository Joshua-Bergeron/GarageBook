import ServiceSummary from "@/components/ServiceSummary";

export default {
  title: "Service Summary",
  component: ServiceSummary,
};

export const Summary = {
  args: {
    lastServiceDate: "2005-07-25",
    lastServiceType: "Wheel Alignment",
    totalServices: 10,
  },
};
