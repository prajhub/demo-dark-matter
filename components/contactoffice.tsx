import Image from "next/image";
import map from '@/public/Map.png'

export default function ContactOffice() {

    return (
        <section className="bg-white w-full">
            <h1 className="md:text-5xl text-center md:py-3 text-black text-4xl font-bold">Our Office</h1>

            <div className="flex gap-10 md:p-10 items-center justify-center">
                <div className="flex flex-col gap-4">
                    <h2 className="text-black hidden md:block md:text-3xl text-xl font-bold">Chitwan, Nepal</h2>
                    <div className="flex flex-col md:text-start mt-4 md:mt-0 text-center">
                        <h3 className=" text-black font-bold mt-4 md:mt-0 md:text-2xl">Address</h3>
                        <span className="text-black">Beltandi, Bharatpur-02,</span>
                        <span className="text-black">Chitwan,</span>
                        <span className="text-black">Nepal</span>
                    </div>
                    <div className="flex flex-col my-4 md:my-0">
                        <h3 className="text-2xl font-bold md:text-start text-center text-black">Phone</h3>
                        <span className="text-black md:text-start text-center">+977 9860940096</span>
                    </div>

                </div>

                <div>
                    <Image src={map} quality={98} className="hidden md:block h-98 w-98" alt="location" />
                </div>
            </div>
        </section>
    )
}