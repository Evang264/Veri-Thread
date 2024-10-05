import Image from "next/image";
import "../app/globals.css";
import Carousel from "./components/carousel";
import Navbar from "./components/navbar";
import Card from "./components/card";
export default function Home() {
  return (
    
    <div className="">
      <Navbar />
      <Card />
      <Carousel />
      <button className=" text-black btn display-flex justify-items-center items-center btn-neutral bg-lime-300">Go to collection</button>
    </div>
  );
}
