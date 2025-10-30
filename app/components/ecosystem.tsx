'use client';
import Image from 'next/image'
import { Anek } from "../utils/fonts"
import Link from 'next/link'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function Ecosystem() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        }
      }
    )

    gsap.fromTo(
      descriptionRef.current,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
        }
      }
    )

    gsap.fromTo(
      ctaRef.current,
      {
        opacity: 0,
        scale: 0.95
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.3)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        }
      }
    )

    const cards = gsap.utils.toArray<HTMLDivElement>(
      cardsContainerRef.current?.querySelectorAll('.eco-card') || []
    )

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 75%",
        }
      }
    )

  }, { scope: containerRef })

  return (
     <div ref={containerRef} className="bg-[url('/ecovecc.png')] z-20 -mt-10 w-full bg-cover bg-center bg-no-repeat relative pb-32 pt-20">
          <div className="absolute top-0 -mt-3 left-[280px]">
            <Image src="/ecovec.png" alt="vector" width={84.1} height={71.77} />
          </div>

          <div className='w-full flex flex-col gap-24 mt-48 max-w-6xl mx-auto lg:px-6 px-3'>
            <div className='w-full flex items-center justify-center flex-col'>
              <h2 
                ref={headingRef}
                className={`${Anek.className} text-center lg:text-8xl text-5xl text-[#271437] opacity-0`}
              >
                JOIN AN ECOSYSTEM <br className='lg:block hidden' /> THAT KEEPS GIVING
              </h2>
              <p 
                ref={descriptionRef}
                className='text-[20px] text-[#402562] text-center opacity-0'
              >
                Our values are more than just words—they are the guiding principles that shape our company culture, 
                <br /> help us navigate challenges, and ensure we stay true to our purpose.
              </p>
              <Link 
                ref={ctaRef}
                href="/" 
                className="px-5 mt-10 py-3 flex gap-2 bg-[#D0F091] text-[#2A343F] rounded-[7.62px] hover:bg-[#c0e081] transition-colors opacity-0"
              >
                <p> Sign Up on Squads </p>
                <Image src="/cash.png" alt="cash" width={18} height={23}/>
              </Link>
            </div>

            {/* Cards */}
            <div ref={cardsContainerRef} className='flex md:flex-row flex-col items-center justify-center'>
               <div className='eco-card rotate-4 relative w-[292px] h-[365.25px] lg:w-[379px] lg:h-[474.54px] md:-rotate-6 opacity-0'>
                  <Image src="/eco1.png" alt='Section Image' fill  />
               </div>
               <div className='eco-card relative w-[290.02px] h-[365.03px] lg:w-[379px] lg:h-[474.25px] md:-rotate-2 -rotate-2 -mt-12 md:mt-18 ml-4 md:-ml-8 z-10 opacity-0'>
                  <Image src="/eco2.png" alt='Section Image' fill  />
               </div>
               <div className='eco-card relative w-[290.98px] h-[363.72px] lg:w-[378px] lg:h-[472.54px] md:-ml-14 md:rotate-0 md:mt-0 -mt-10 -rotate-6 opacity-0'>
                  <Image src="/eco3.png" alt='Section Image' fill  />
               </div>
            </div>
          </div>
    </div>
  )
}