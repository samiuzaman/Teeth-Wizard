import { useLoaderData } from "react-router-dom";
import ServiceCard from "../components/HomeLayout/ServiceCard";

const AllTreatments = () => {
  const servicesData = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 mb-10">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllTreatments;
