import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">Data Analytics DashBoard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            sapiente dolorem ducimus explicabo ipsa, rem quas sint consequuntur
            maxime repellendus in, aliquam quo inventore voluptas rerum! Et,
            perspiciatis! Tenetur, rerum.
          </p>
          <button className="bg-black text-[#00df9a] rounded-md w-[200px]font-medium my-6 mx-auto py-3"> Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
