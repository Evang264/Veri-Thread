import Image from "next/image";
import two from "../global/2.png"
import three from "../global/3.png"
import four from "../global/4.png"
import five from "../global/5.png"
import six from "../global/6.png"
import seven from "../global/7.png"
import eight from "../global/8.png"





export default function Carousel() {
    return(
        <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
                <Image src={two} alt="2" />
            </div>
            <div className="carousel-item">
                <Image
                    src={three}
                    alt="3" />
            </div>
            <div className="carousel-item">
                <Image
                    src={four}
                    alt="Pizza" />
            </div>
            <div className="carousel-item">
                <Image
                    src={five}
                    alt="Pizza" />
            </div>
            <div className="carousel-item">
                <Image src={six} alt="Pizza" />
            </div>
            <div className="carousel-item">
                <Image src={seven} alt="Pizza" />
            </div>
            <div className="carousel-item">
                <Image
                    src={eight}
                    alt="Pizza" />
            </div>

        </div>
    );
}