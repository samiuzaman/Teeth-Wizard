import { useLoaderData, useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { Button } from "keep-react";

const ServicesContainer = () => {
  const navigate = useNavigate();
  const servicesData = useLoaderData();

  return (
    <div className="mt-32 lg:mt-0 text-center py-10">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8 ">
        Our Service
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 mb-10">
        {servicesData.slice(0, 4).map((service, index) => (
          <ServiceCard key={index} service={service}></ServiceCard>
        ))}
      </div>

      <Button onClick={() => navigate("/alltreatments")}>Show All</Button>
    </div>
  );
};

export default ServicesContainer;
