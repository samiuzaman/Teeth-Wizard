import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServicesContainer = () => {
  const servicesData = useLoaderData();

  return (
    <div className="mt-32 lg:mt-0">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8 ">Our Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesContainer;
