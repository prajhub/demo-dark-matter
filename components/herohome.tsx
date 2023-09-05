"use client"

import Image from "next/image"
import HeroHattori from '@/public/Homehattorri.png'

export default function HeroHome() {

    return (
        <div className='w-full h-screen'>
      <Image
        className='top-0 left-0 w-full h-screen object-cover'
        src={HeroHattori}
        alt='/'
      />
      <div className='bg-black/10 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-end py-8 text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p className=" text-3xl drop-shadow-2xl">New dimension of gaming:</p>
          <h1 className='font-bold text-3xl md:text-5xl drop-shadow-2xl'>
            An Unparalleled Journey Awaits!
          </h1>
          
        </div>
      </div>
    </div>
    )
}