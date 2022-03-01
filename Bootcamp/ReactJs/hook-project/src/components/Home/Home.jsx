import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const Home = () => {
  return (
    <div className="flex justify-center mt-20 font-nunito">
      <div className="w-full sm:max-w-xl md:max-w-lg">
        <Card>
          <h1 className="font-[800] text-cyan-900  underline underline-offset-4 text-xl  tracking-wider text-center py-2 mb-4">
            Welcome To Home Page
          </h1>
          <p className="text-gray-500 tracking-wider px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            asperiores fugiat, repellat non corrupti consequatur est quidem
            maiores veniam voluptatibus architecto ipsum nostrum vitae?
            Voluptatum ex voluptas aperiam consectetur nisi.
          </p>
          <div className="w-ful max-w-sm left-0 right-0 mx-auto mt-7">
            <Button>Go Back</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
