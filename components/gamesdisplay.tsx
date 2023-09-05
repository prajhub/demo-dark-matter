import Image from "next/image"
import backgroundtwo from '@/public/background2.png'
import coins from '@/public/coins.png'
import hattoritwo from '@/public/hattori2.png'
import mobile from '@/public/mobile.png'

import mobiletwo from '@/public/mobile2.png'


export default function GamesDisplay() {
  return (
    <>
      <section className="w-full bg-white md:p-10 p-12">
        <div className="bg-black rounded-3xl h-[500px] max-w-[1200px] flex justify-between mx-auto">
          <div className="flex max-w-[600px] md:mt-2 mt-1 md:items-end items-center p-16 flex-col justify-start">
            <h1 className="md:text-4xl text-4xl tracking-wide font-bold">Sprite Ninja Run</h1>
            <p className="md:text-lg md:py-9 md:text-end text-center py-10 tracking-wide">Join Ninja Hattori on an adrenaline-pumping adventure in Sprite Ninja and experience the thrill of endless running like never before!</p>
            <button className="text-white border-2 leading-loose tracking-wide border-white hover:text-black hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-full text-2xl md:py-2 md:px-20 px-12 text-center mr-2 md:mb-28">Let's Run</button>
          </div>
          <div className=" hidden md:block">
            <Image src={backgroundtwo} className="h-full object-cover    rounded-r-3xl" alt="Background two" />
          </div>
          <div className=' absolute top-0 left-0 w-full h-screen' >
            <Image src={coins} className=" hidden md:block mt-[870px]" quality={100} alt="Coins" />
          </div>
          <div className=' absolute top-0 left-0  w-full h-screen' >
            <Image src={hattoritwo} className="hidden md:block mt-[870px]  ml-[1050px]" quality={100} alt="Coins" />
          </div>
          <div className=' absolute top-0 left-14  h-screen' >
            <Image src={mobile} className=" hidden md:block mt-[1470px]" quality={100} alt="Coins" />
          </div>

        </div>
      </section>




    </>

  )
}