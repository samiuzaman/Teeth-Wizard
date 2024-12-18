import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const { treatment, image, description, cost, id } = service;

  return (
    <div className="bg-white rounded-xl w-full md:max-w-[350px] shadow-xl border border-[#FFC312] flex flex-col text-left">
      <CardHeader>
        <img src={image} className="w-full h-60 rounded-t-xl"></img>
      </CardHeader>
      <CardContent className="space-y-3 ">
        <CardTitle className="text-xl font-semibold">{treatment}</CardTitle>
        <CardDescription>{description.slice(0, 100)}</CardDescription>
        <div className="mt-0 lg:mt-3 flex lg:flex-row items-center gap-4">
          <span className=" bg-[#04917ed8] text-white px-3 py-2 rounded-xl">
            Cost: ${cost}
          </span>
          <Button onClick={() => navigate(`/details/${id}`)}>Checkout</Button>
        </div>
      </CardContent>
    </div>
  );
};

export default ServiceCard;
