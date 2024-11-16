import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | React App</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="w-11/12 mx-auto bg-[#036C5E]">
        <h2 className="text-red-500">This is Home Page</h2>
      </div>
    </div>
  );
};

export default Home;
