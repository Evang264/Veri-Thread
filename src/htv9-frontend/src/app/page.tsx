// import Image from "next/image";
import "../app/globals.css";
import Carousel from "./components/carousel";
import Card from "./components/card";
export default function Home() {
  return (
    <div className="flex flex-col items-center"> {/* This flexbox container will center its children */}
      <Card />
      <Carousel />
      <button className="bg-lime-300 hover:bg-lime-500 text-black font-departure py-2 px-4 rounded mt-4 mb-4">
        My collection
      </button>
    </div>
  );
}
