import Image from "next/image";
import "../app/globals.css";
import Carousel from "./components/carousel";
export default function Home() {
  return (
    <div className="">
      <div className="w-60 h-10 text-black text-xl font-normal font-['Jersey 10'] mb-2 p-2">VeriThread</div>

            <div className="p-2 text-black text-2xl font-normal font-['Departure Mono']"
        >Welcome back Sammy</div>
      <div className="p-2 text-black text-2xl font-family-DepartureMono font-normal"
      >Welcome back Sammy</div>
      <div className="p-2 text-black text-2xl font-normal font-['Departure Mono']"
      >Welcome back Sammy</div>

      <Carousel />
      <button className="btn btn-neutral">Go to collection</button>

    </div>
  );
}
