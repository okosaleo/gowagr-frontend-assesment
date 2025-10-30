import Image from 'next/image'
import { Anek } from "../utils/fonts"
import Link from 'next/link'

export default function Ecosystem() {
  return (
     <div className="bg-[url('/ecovecc.png')] z-20 -mt-10 w-full bg-cover bg-center bg-no-repeat relative  pb-32 pt-20">
          <div className="absolute top-0 -mt-3 left-[280px]">
            <Image src="/ecovec.png" alt="vector" width={84.1} height={71.77} />
          </div>

          <div className='w-full flex flex-col gap-24 mt-48 max-w-6xl mx-auto lg:px-6 px-3'>
            <div className='w-full flex items-center justify-center flex-col '>
              <h2 className={`${Anek.className} text-center lg:text-8xl text-5xl text-[#271437]`}>
                JOIN AN ECOSYSTEM <br className='lg:block hidden' /> THAT KEEPS GIVING</h2>
                <p className='text-[20px] text-[#402562] text-center'>Our values are more than just words—they are the guiding principles that shape our company culture, 
                <br /> help us navigate challenges, and ensure we stay true to our purpose.</p>
                 <Link href="/" className="px-5 mt-10 py-3 flex gap-2  bg-[#D0F091] text-[#2A343F] rounded-[7.62px]">
                    <p> Sign Up on Squads </p>
                        <Image src="/cash.png" alt="cash" width={18} height={23}/>
                    </Link>
            </div>

            {/* Cards */}
            <div className='flex md:flex-row flex-col items-center justify-center '>
               <div className='rotate-4 relative w-[292px] h-[365.25px] lg:w-[379px] lg:h-[474.54px] md:-rotate-6'>
                  <Image src="/eco1.png" alt='Section Image' fill  />
               </div>
               <div className='relative w-[290.02px] h-[365.03px] lg:w-[379px] lg:h-[474.25px] md:-rotate-2 -rotate-2 -mt-12 md:mt-18 ml-4 md:-ml-8 z-10'>
                  <Image src="/eco2.png" alt='Section Image' fill  />
               </div>
               <div className='relative w-[290.98px] h-[363.72px] lg:w-[378px] lg:h-[472.54px] md:-ml-14  md:rotate-0 md:mt-0 -mt-10 -rotate-6'>
                  <Image src="/eco3.png" alt='Section Image' fill  />
               </div>
            </div>
          </div>
    </div>
  )
}
