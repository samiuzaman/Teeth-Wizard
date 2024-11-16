import { Button } from "keep-react";
import BannerImage from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="h-[83vh] flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full lg:w-1/2 mt-8 text-center lg:text-left">
        <h1 className="text-[#1d26a3] text-4xl md:text-5xl lg:text-7xl font-bold">
          We care about your smill
        </h1>
        <p className="text-gray-100 my-6">
          We are a team of dentists, hygienists, and receptionists who work
          together to ensure you receive the best treatment you require.
        </p>
        <Button variant="default">Book Now</Button>
      </div>
      <div>
        <img src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
