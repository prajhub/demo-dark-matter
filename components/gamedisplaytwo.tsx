
import Image from "next/image"
import sismanu from '@/public/sisimanu2.png'
import hattoribg from '@/public/hattoribg.png'

import shuriken from '@/public/shuriken.png'


export default function GameDisplayTwo() {
    return (
        <section className="w-full bg-white md:p-10 p-12">
            <div className="bg-black rounded-3xl h-[500px] md:mt-36 max-w-[1200px] flex justify-between mx-auto">
                <div className="hidden md:block">
                    <Image src={hattoribg} className="h-full object-cover rounded-3xl" alt="Background two" />
                </div>
                <div className="flex max-w-[600px] md:mt-2 mt-1 md:items-end items-center p-16 flex-col justify-start">
                    <h1 className="md:text-4xl text-4xl tracking-wide font-bold">Sprite Ninja: RPG</h1>
                    <p className="md:text-lg text-md md:py-9 p-6 md:text-end text-center tracking-wide">Epic RPG adventure, Sprite Ninja, where you&apos;ll unlock powerful heroes, utilize their unique powers to conquer challenging foes, and unlock a vast array of captivating maps as you journey through a world of excitement and strategy.</p>
                    <button className="text-white border-2 leading-loose tracking-wide border-white hover:text-black hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-full text-2xl md:py-2 md:px-20 px-12 text-center mr-2 md:mb-28">Let&apos;s Run</button>
                </div>
                <div className=' absolute top-0 left-0  w-full h-screen' >
                    <Image src={shuriken} className="hidden md:block mt-[1820px]  ml-[1230px]" quality={100} alt="Coins" />
                </div>
                <div className=' absolute top-0 left-14 h-screen' >
                    <Image src={sismanu} className=" hidden md:block mt-[2330px] ml-[50px]" quality={100} alt="Coins" />
                </div>
             


            </div>
        </section>
    )
}