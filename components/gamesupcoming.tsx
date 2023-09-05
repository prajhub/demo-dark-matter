import Image from "next/image"
import casino from '@/public/casino.png'
import bgone from '@/public/backgroundcasino1.png'
import bgtwo from '@/public/backgroundcasino2.png'

export default function UpcomingGames() {


    return (
        <section className="max-w-full bg-white">
            <div className="flex flex-col items-center py-10">
                <div className="text-black flex flex-col md:pt-28 px-4  max-w-[1000px] mx-auto">
                    <h1 className=" text-center text-black md:mt-4 font-bold md:text-5xl text-4xl tracking-wide">Upcoming Project: Casual Casino</h1>

                    <p className="text-center text-black leading-normal font-medium md:text-2xl text-lg line tracking-wide py-6">Get ready to redefine your casino gaming experience! We're introducing an innovative blend of classic fun and exciting gameplay, creating a captivating journey like no other. Prepare to play and win in a whole new way. Stay Tuned!</p>

                </div>
                <div className="">
                    <Image src={casino} className=" md:w-[700px] md:h-[700px] w-[500px] h-[500px]" alt="Casino" quality={96} />
                </div>

                <div className=' absolute top-0 left-0   h-screen' >
                    <Image src={bgone} className="hidden md:block mt-[2250px]  ml-[1090px]" quality={100} alt="Coins" />
                </div>

                <div className=' absolute top-0 left-14 h-screen' >
                    <Image src={bgtwo} className=" hidden md:block mt-[3180px]  -ml-[50px] " quality={100} alt="Coins" />
                </div>

                <div className="flex flex-col items-center py-10">
                <div className="text-black flex flex-col py-2 px-4  max-w-[1200px] mx-auto">
                    <h1 className=" text-center md:mt-4 font-bold md:text-3xl text-xl tracking-wide">Join the Gaming Revolution:</h1>

                    <p className="text-center leading-normal font-medium md:text-2xl text-lg line tracking-wide py-5 md:py-16">Shape the future of Gaming with an extraordinary venture.</p>

                </div>
                <button className="text-white  leading-loose tracking-wide   bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xl md:py-4 py-2 md:px-20 px-12 text-center mr-2 md:mb-56">Invest Today</button>
            </div>
            </div>
        </section>
    )
}