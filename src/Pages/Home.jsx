import { Helmet } from "react-helmet-async";
import Banner from "../components/HomeLayout/Banner";
import ServicesContainer from "../components/HomeLayout/ServicesContainer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | React App</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="w-11/12 mx-auto ">
        <Banner></Banner>
        <ServicesContainer></ServicesContainer>
      </div>
    </div>
  );
};

export default Home;
