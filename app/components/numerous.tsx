import Image from 'next/image'
import { Anek } from "../utils/fonts"
import { Gloria } from "../utils/fonts"

export default function Numerous() {
  return (
    <div className="flex flex-col gap-3 h-fit relative">
        <div
            className="pattern fixed inset-0 pointer-events-none -z-10"
            aria-hidden="true"
        />
        
        {/* Decorative vector - hidden on mobile */}
        <div className="absolute -mt-12 sm:-mt-16 md:-mt-18 left-12 sm:left-32 md:left-48 lg:left-60 hidden sm:block">
            <Image 
                src="/num1.png" 
                alt="vector" 
                width={84.1} 
                height={71.77}
                className="w-12 h-auto sm:w-16 md:w-20 lg:w-auto"
            />
        </div>
        
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 flex flex-col lg:flex-row items-center justify-between  h-fit  lg:h-[80vh] py-12 lg:py-0'>
            <div className='flex flex-col gap-6 max-w-5xl '>
                <div className=' w-full flex items-center justify-center'>
                    <h2 className={`${Anek.className} text-[#D2D4D7] lg:text-7xl text-4xl text-center lg:text-left`}>
                        NUMEROUS <br className='lg:block hidden' /> PLAYER 
                        <span className={`${Gloria.className} text-[#D0F091]`}> projections</span>
                    </h2>
                </div>
                <div>
                    <p className='text-sm sm:text-base md:text-lg lg:text-[20px] lg:text-left text-center text-[#D2D4D7]'>
                        Available player stats categories for you to pick from: <br className='hidden sm:block' /> 
                        Shots, goals, assists, saves, passes, and more.
                    </p>
                </div>
            </div>

            {/* Decorative vector - positioned differently on mobile */}
            <div className='mt-8 lg:mt-0 lg:block hidden'>
                <Image 
                    src="/vecwin.png" 
                    alt="vector" 
                    width={20.95} 
                    height={17.8}
                    className="w-4 h-auto sm:w-5 md:w-6 lg:w-auto"
                />
            </div>
        </div>
    </div>
  )
}