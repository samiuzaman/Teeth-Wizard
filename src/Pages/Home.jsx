import { Helmet } from "react-helmet-async";
import Banner from "../components/HomeLayout/Banner";
import ServicesContainer from "../components/HomeLayout/ServicesContainer";
import { useEffect, useState } from "react";
import Feedback from "../components/HomeLayout/Feedback";

const Home = () => {
  const [feedbackData, setFeedbackData] = useState();
  useEffect(() => {
    fetch("happyclients.json")
      .then((response) => response.json())
      .then((data) => setFeedbackData(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home | React App</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="w-11/12 mx-auto ">
        <Banner></Banner>
        <ServicesContainer></ServicesContainer>
        <Feedback feedbackData={feedbackData}></Feedback>
      </div>
    </div>
  );
};

export default Home;
