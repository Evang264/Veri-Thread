import "../app/globals.css";
import Carousel from "./components/carousel";
import Card from "./components/card";
export default function Home() {
  return (
    
    <div className="">
      <Card />
      <Carousel />
      <button className=" text-black btn display-flex justify-items-center items-center btn-neutral bg-lime-300">Go to collection</button>
    </div>
  );
}
