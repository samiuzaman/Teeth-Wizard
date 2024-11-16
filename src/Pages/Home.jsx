import { Helmet } from "react-helmet-async";
import Banner from "../components/HomeLayout/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | React App</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="w-11/12 mx-auto ">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
