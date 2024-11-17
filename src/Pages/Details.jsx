import { CardHeader } from "keep-react";
import { useLoaderData } from "react-router-dom";

import { CardContent, CardDescription, CardTitle } from "keep-react";
import { ModalComponent } from "../components/ModalComponent";

const Details = () => {
  const { treatment, image, description, cost } = useLoaderData();

  return (
    <div className="w-11/12 md:w-4/5 mx-auto ">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl p-4 border-2">
        <CardHeader className="">
          <img
            src={image}
            className="rounded-l-xl "
            alt="image"
            width={600}
            height={300}
          />
        </CardHeader>
        <CardContent className="w-10/12 space-y-3">
          <CardTitle>{treatment}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="mt-0 lg:mt-3 flex flex-col md:flex-row justify-start items-center gap-4">
            <span className=" bg-[#04917ed8] text-white px-3 py-2 rounded-xl">
              Cost: ${cost}
            </span>
            {/* <Button onClick={() => navigate(`/profile`)}></Button> */}
            <ModalComponent></ModalComponent>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default Details;
