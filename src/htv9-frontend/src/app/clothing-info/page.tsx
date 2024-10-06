import Image from "next/image";
import shirt from '../global/isseymiyake2.png'


export default function Page() {
    return (
        <section>
            <div className="flex justify-center w-full">
                <Image className="mt-4 mb-4" src={shirt} alt="shirt" width={300} height={800} />
            </div>
            <div className="flex justify-center items-center mt-4">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}