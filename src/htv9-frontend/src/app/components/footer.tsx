import Image from "next/image";
import HomeIcon from "../global/Home.png"
import QrScanner from "../global/qricon.png"
import UserIcon from "../global/User.png"

export default function Footer() {
    return (
        <footer className="sticky container mx-auto">
            <div className=" mt-2 flex justify-center bg-white space-x-10">
                <a href="/qr-code"><Image className=" items-center mt-3 " src={HomeIcon} alt="Home" width={50} height={50} /></a>
                <a href="../qrscan"><Image className=" items-center ml-5" src={QrScanner} alt="Home" width={80} height={80} /></a>
                <Image className=" items-center mb-7 mt-3 " src={UserIcon} alt="Home" width={40} height={32} />             
            </div>
        </footer> 
    );
}
