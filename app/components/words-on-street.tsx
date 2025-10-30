'use client';
import Image from "next/image"
import { Anek } from "../utils/fonts"
import { Gloria } from "../utils/fonts"
import WordsMarquee from "./words-marquee"
import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function WordsOnStreet() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const desktopCardsContainerRef = useRef<HTMLDivElement>(null)
  const mobileCardsContainerRef = useRef<HTMLDivElement>(null)
  const wordsHeadingRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      headingRef.current,
      { 
        opacity: 0,
        y: 40
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

    const mm = gsap.matchMedia()
    
    mm.add("(min-width: 1024px)", () => {
      const desktopCards = gsap.utils.toArray<HTMLDivElement>(
        desktopCardsContainerRef.current?.querySelectorAll('.desktop-card') || []
      )
      
      gsap.fromTo(
        desktopCards,
        {
          opacity: 0,
          y: 60,
          rotation: (i) => [-10, 5, 10, -5][i] || 0
        },
        {
          opacity: 1,
          y: 0,
          rotation: (i) => [-5, 2, 6, -4][i] || 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: desktopCardsContainerRef.current,
            start: "top 75%",
          }
        }
      )
    })

    mm.add("(max-width: 1023px)", () => {
      const mobileCards = gsap.utils.toArray<HTMLDivElement>(
        mobileCardsContainerRef.current?.querySelectorAll('.mobile-card') || []
      )
      
      gsap.fromTo(
        mobileCards,
        {
          opacity: 0,
          x: -30,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mobileCardsContainerRef.current,
            start: "top 80%",
          }
        }
      )
    })

    gsap.fromTo(
      wordsHeadingRef.current,
      {
        opacity: 0,
        scale: 0.95,
        y: 30
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wordsHeadingRef.current,
          start: "top 80%",
        }
      }
    )

    gsap.fromTo(
      marqueeRef.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top 85%",
        }
      }
    )

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='bg-[#141B23] min-h-screen w-full pt-12 sm:pt-16 md:pt-20 relative pb-20 md:pb-32 lg:pb-54'>
        <div className="bg-[url('/words1.png')] absolute top-12 sm:top-16 md:top-20 left-0 z-0 bg-cover bg-top w-full h-[130vh]">
        </div>

        <div className='relative flex flex-col w-full z-10 top-0 mt-20 sm:mt-28 md:mt-36 lg:mt-42 px-4 sm:px-6 lg:px-8'>
            
            <div ref={headingRef} className="flex flex-col gap-3 md:gap-4 opacity-0">
                <h2 className={`${Anek.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center leading-tight`}>
                    WHY THE STREETS 
                    <span className={`${Gloria.className} text-[#D0F091] text-[28px] sm:text-[36px] md:text-[45px] lg:text-[55px] xl:text-[63.08px]`}> F**K</span> 
                    <br />WITH SQUADS
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto">
                    Enjoy the swift and sweet benefits squads have for you. We are here for you 100% any day anytime!
                </p>
            </div>

            {/* Cards Container */}
            <div className="mt-16 sm:mt-20 md:mt-28 lg:mt-34 mx-auto w-full max-w-7xl">
                {/* Desktop: Overlapping Cards */}
                <div ref={desktopCardsContainerRef} className="hidden lg:flex relative justify-center">
                    {/* Card 1 */}
                    <div className="desktop-card relative z-10 opacity-0">
                        <div className="absolute z-20  -left-6 top-2">
                          <Image src="/whyvec1.png" alt="vector" width={27} height={28.44} />
                         </div>
                        <div className="bg-linear-to-tl from-[#000000] -rotate-5 p-4 to-[#232D39] w-64 h-68 rounded-[18.42px] flex flex-col">
                            <div className="h-3/5 flex items-center justify-center">
                                <Image src="/card1.png" alt="card image" width={105.18} height={132.06}/>
                            </div> 
                            <div className="flex flex-col gap-2">
                                <h5 className="font-bold text-lg text-[#D0F091]">Numerous Options</h5>
                                <p className="text-[#FAFEF4] text-[10px]">Bet Your Way with Endless Options! No matter your game, we&apos;ve got the odds, the excitement, and the options just for you!</p>
                            </div>
                        </div>
                    </div> 
                    {/* Card 2 */}
                    <div className="desktop-card relative z-20 opacity-0">
                        <div className="bg-linear-to-tl from-[#28A981] rotate-2 to-[#104333] p-4 w-64 h-68 rounded-[18.42px] -mt-8">
                            <div className="h-3/5 flex items-center justify-center">
                                <Image src="/card2.png" alt="card image" width={150.87} height={132.87}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h5 className="font-bold text-lg text-[#D0F091]">Instant Cashout</h5>
                                <p className="text-[#FAFEF4] text-[10px]">Say goodbye to waiting! With Squads, you can cash out your funds instantly—any time, any day. Whether it&apos;s a weekend or midnight, your money is just a tap away. 🚀</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="desktop-card relative z-30 opacity-0">
                        <div className="bg-white w-64 rotate-6 h-68 p-4 rounded-[18.42px] mt-5 -ml-5">
                            <div className="h-3/5 flex items-center justify-center">
                                <Image src="/card3.png" alt="card image" width={113.25} height={123.21}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h5 className="font-bold text-lg text-[#20262E]">Fast Deposit</h5>
                                <p className="text-[#20262E] text-[10px]">Don&apos;t let slow transactions hold you back. With Squads, you can deposit funds instantly and stay in the game. Your winning streak starts here!🚀</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="desktop-card relative z-20 opacity-0">
                        <div className="bg-linear-to-t from-[#FFFBFD] p-4 -rotate-4 -ml-4 to-[#FFC2F7] w-64 h-68 rounded-[18.42px]">
                            <div className="h-3/5 flex items-center justify-center">
                                <Image src="/card4.png" alt="card image" width={113.25} height={123.21}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h5 className="font-bold text-lg text-[#20262E]">Bonuses & Rewards</h5>
                                <p className="text-[#20262E] text-[10px]">No dey hide updates!!!! Invite your friends and family to join squads and get paid <strong>N1000</strong> when they use your referral link</p>
                            </div>
                        </div>
                        <div className="absolute z-20 -right-5 top-52">
                          <Image src="/whyvec2.png" alt="vector" width={27} height={28.44} />
                         </div>
                    </div>
                </div>

                {/* Mobile & Tablet: Grid Layout */}
                <div ref={mobileCardsContainerRef} className="flex flex-col items-center justify-center lg:hidden">
                    {/* Card 1 */}
                    <div className="mobile-card rotate-9 relative bg-linear-to-tl md:w-[320px] w-[248.34px] h-[289.61px] from-[#000000] to-[#232D39] p-4 rounded-[18.42px] flex flex-col opacity-0">
                        <div className="absolute z-20  -left-16 top-2">
                          <Image src="/whyvec1.png" alt="vector" width={27} height={28.44} />
                         </div>
                        <div className="h-40 flex items-center justify-center">
                            <Image src="/card1.png" alt="card image" width={105.18} height={132.06} className="max-h-full w-auto"/>
                        </div> 
                        <div className="flex flex-col gap-2 mt-3">
                            <h5 className="font-bold text-base sm:text-lg text-[#D0F091]">Numerous Options</h5>
                            <p className="text-[#FAFEF4] text-xs sm:text-sm">Bet Your Way with Endless Options! No matter your game, we&apos;ve got the odds, the excitement, and the options just for you!</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="mobile-card -rotate-4 ml-16 mt-5 bg-linear-to-tl md:w-[320px] w-[251.12px]  h-[289.74px] from-[#28A981] to-[#104333] p-4 rounded-[18.42px] flex flex-col opacity-0">
                        <div className="h-40 flex items-center justify-center">
                            <Image src="/card2.png" alt="card image" width={150.87} height={132.87} className="max-h-full w-auto"/>
                        </div>
                        <div className="flex flex-col gap-2 mt-3">
                            <h5 className="font-bold text-base sm:text-lg text-[#D0F091]">Instant Cashout</h5>
                            <p className="text-[#FAFEF4] text-xs sm:text-sm">Say goodbye to waiting! With Squads, you can cash out your funds instantly—any time, any day. Whether it&apos;s a weekend or midnight, your money is just a tap away. 🚀</p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="mobile-card rotate-6 mt-4 mr-8 md:w-[320px] bg-white w-[251.12px] h-[289.61px] p-4  rounded-[18.42px] flex flex-col opacity-0">
                        <div className="h-40 flex items-center justify-center">
                            <Image src="/card3.png" alt="card image" width={113.25} height={123.21} className="max-h-full w-auto"/>
                        </div>
                        <div className="flex flex-col gap-2 mt-3">
                            <h5 className="font-bold text-base sm:text-lg text-[#20262E]">Fast Deposit</h5>
                            <p className="text-[#20262E] text-xs sm:text-sm">Don&apos;t let slow transactions hold you back. With Squads, you can deposit funds instantly and stay in the game. Your winning streak starts here!🚀</p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="mobile-card relative -rotate-4 mt-4 md:w-[320px] bg-linear-to-t w-[249.08px] h-[288.87px] from-[#FFFBFD] to-[#FFC2F7] p-4 rounded-[18.42px] flex flex-col opacity-0">
                        <div className="h-40 flex items-center justify-center">
                            <Image src="/card4.png" alt="card image" width={113.25} height={123.21} className="max-h-full w-auto"/>
                        </div>
                        <div className="flex flex-col gap-2 mt-3">
                            <h5 className="font-bold text-base sm:text-lg text-[#20262E]">Bonuses & Rewards</h5>
                            <p className="text-[#20262E] text-xs sm:text-sm">No dey hide updates!!!! Invite your friends and family to join squads and get paid <strong>N1000</strong> when they use your referral link</p>
                        </div>
                        <div className="absolute z-20 -right-4 top-32">
                          <Image src="/whyvec2.png" alt="vector" width={27} height={28.44} />
                         </div>
                    </div>
                </div>
            </div>

            {/* Words on the Street Section */}
            <div className="flex items-center justify-center flex-col mt-24 sm:mt-32 md:mt-40 lg:mt-48 w-full">
                <div ref={wordsHeadingRef} className="flex flex-col items-center justify-center opacity-0">
                    <h2 className={`${Anek.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center`}>
                        WORDS ON THE <br /> STREET
                    </h2>
                    <div className="-mt-1">
                        <Image 
                            src="/wordsvecc.png" 
                            alt="" 
                            width={245.52} 
                            height={16.82}
                            className="w-32 sm:w-40 md:w-52 lg:w-auto h-auto"
                        />
                    </div>
                </div>
            </div>
            <div ref={marqueeRef} className="mt-8 opacity-0">
                <WordsMarquee />
            </div>
        </div>
    </div>
  )
}