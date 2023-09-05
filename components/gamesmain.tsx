import Image from "next/image"

import HeroHattori from '@/public/Homehattorri.png'
import play from '@/public/play.png'

export default function GamesMain() {


    return (
        <div className='w-full h-screen '>
        <Image
          className='top-0 left-0 w-full h-screen object-cover'
          src={HeroHattori}
          alt='/'
        />
         <div className='bg-black/20 absolute top-0 left-0 w-full h-screen' />
       
        <div className='absolute top-0  w-full h-full flex flex-col justify-center py-8 text-white'>
         
            
            <div className='flex  items-center justify-center  '>
              <Image src={play} alt="play button" className="md:h-30 md:w-30 h-25 w-25" quality={92}/>
            </div>

            <div className='md:left-[10%] flex flex-col justify-end h-[600px] max-w-[1100px] m-auto absolute p-4'>
          
          <h1 className='font-bold text-5xl md:text-6xl drop-shadow-2xl'>
            Let's Play
          </h1>
          
        </div>
            
          
        </div>
      </div> )
}