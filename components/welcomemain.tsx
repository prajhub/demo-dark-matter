"use client"

import Image from "next/image"
import coins from '@/public/coins.png'
import ninja from '@/public/ninjarun.png'
import gemone from '@/public/gem1.png'


export default function WelcomeMain() {
    return (
        <section className="max-w-full bg-white">
            <div className="flex flex-col items-center py-10">
                <div className="text-black flex flex-col py-2 px-4  max-w-[1200px] mx-auto">
                    <h1 className=" text-center md:mt-4 font-bold md:text-5xl text-3xl tracking-wide">Welcome to Dark Matter!</h1>

                    <p className="text-center leading-normal font-medium md:text-2xl text-lg line tracking-wide py-16">Our passion for creativity and innovation drives us to explore new dimensions of gaming, delivering meaningful and immersive adventures for players worldwide. We embark on an unparalleled journey to craft beyond current gaming experiences.</p>

                </div>
                <button className="text-white  leading-loose tracking-wide   bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xl md:py-4 py-2 md:px-20 px-12 text-center mr-2 md:mb-56">Know Us</button>
            </div>
            <div className=' absolute top-0 left-0 w-full h-screen' >
                <Image src={coins} className=" hidden md:block mt-[1030px]" quality={100} alt="Coins" />
            </div>
            <div className=' absolute top-0 left-0 w-full h-screen' >
                <Image src={ninja} className="hidden md:block mt-[1325px] ml-96" quality={100} alt="Coins" />
            </div>
            <div className='0 absolute top-0 left-0 w-full h-screen' >
                <Image src={gemone} className="hidden md:block mt-[1100px] ml-[1250px]   " quality={100} alt="Coins" />
            </div>
        </section>

    )
}