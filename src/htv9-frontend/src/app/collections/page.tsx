import Image from "next/image";
import shirt from '../global/isseymiyake.png'


export default function Page() {
    return(
        <section>
            <div className="flex justify-center w-full text-center text-3xl p-2 mt-4">
                <h1>Congrats for Shopping Sustainably!</h1>
            </div>
            <div className="flex justify-center w-full">
                <Image className="mt-4 mb-4" src={shirt} alt="shirt" width={300} height={800} />
            </div>
            <div className="flex justify-center items-center mt-4">
                <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded">
                    About this piece
                </button>
            </div>

        </section>
    );
}