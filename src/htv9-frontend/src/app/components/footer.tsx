import Image from "next/image";
import HomeIcon from "../global/Home.png"
import QrScanner from "../global/qricon.png"
import UserIcon from "../global/User.png"

export default function Footer() {
    return (
        <footer className="sticky">
            <div className=" mt-2 flex justify-center bg-white space-x-10">
                <a href="/qr-code"><Image className=" items-center " src={HomeIcon} alt="Home" width={50} height={50} /></a>
                <a href="../qrscan"><Image className=" items-center " src={QrScanner} alt="Home" width={50} height={50} /></a>
                <Image className=" items-center " src={UserIcon} alt="Home" width={50} height={50} />             
            </div>
        </footer> 
    );
}
