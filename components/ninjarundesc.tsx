"use client"

import Image from 'next/image'
import gemtwo from '@/public/gem2.png'
import barrel from '@/public/barrel.png'

export default function NinjaDesc() {
    return (
        <section className="max-w-full bg-black">
            <div className="flex flex-col items-center py-10">
                <div className="text-black flex flex-col md:py-28 px-4  max-w-[900px] mx-auto">
                    <h1 className=" text-center text-white md:mt-4 font-bold md:text-5xl text-4xl tracking-wide">Sprite Ninja Run</h1>

                    <p className="text-center text-white leading-normal font-medium md:text-2xl text-lg line tracking-wide py-6">Join Ninja Hattori on an adrenaline-pumping adventure in Sprite Ninja and experience the thrill of endless running like never before!</p>

                </div>
                <button className="text-white border-2  leading-loose tracking-wide border-white hover:text-black   hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-full text-2xl md:py-2 md:px-20 px-12 text-center mr-2 md:mb-28">Let's Run</button>
            </div>
            <div className='bg-black/10 absolute top-0 left-0 w-full h-screen' >
            <Image src={gemtwo} className=" hidden md:block mt-[1830px]" quality={100} alt="Gem"/>
        </div>

        <div className='bg-black/10 absolute top-0 left-0 w-full h-screen' >
            <Image src={barrel} className="hidden md:block mt-[1965px] ml-[1250px]   " quality={100} alt="Coins"/>
        </div>

        </section>
    )
}