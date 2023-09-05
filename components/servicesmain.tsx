import Image from "next/image"
  import service from '@/public/services.png'



export default function AboutMain() {
    return (
        <div className='w-full h-screen hidden md:block'>
        <Image
          className='top-0 left-0 w-full h-screen object-cover'
          src={service}
          alt='/'
        />
        <div  className='bg-black/40 absolute top-0 left-0 w-full h-screen' />
        <div className='absolute top-0  w-full h-full flex flex-col justify-center py-8 text-white'>
         
            
            <h1 className='font-bold text-center text-4xl mt-2 tracking-wider md:text-7xl drop-shadow-2xl'>
              Our Services
            </h1>
            
          
        </div>
      </div>
    )
}