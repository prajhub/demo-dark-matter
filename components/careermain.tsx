import Image from "next/image"
import career from '@/public/career1.png'

export default function CareerMain() {

    return (
        <div className='w-full h-screen'>
        <Image
          className='top-0 left-0 w-full h-screen object-cover'
          src={career}
          alt='/'
        />
        <div className='bg-black/10 absolute top-0 left-0 w-full h-screen' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-end py-8 text-white'>
          <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <p className=" text-3xl drop-shadow-2xl tracking-wider">Let's Work Together</p>
            <h1 className='font-bold text-9xl mt-2 tracking-wider md:text-5xl drop-shadow-2xl'>
              Join the Team!
            </h1>
            
          </div>
        </div>
      </div>
    )
}