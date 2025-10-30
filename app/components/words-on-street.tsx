import Image from "next/image"
import { Anek } from "../utils/fonts"
import { Gloria } from "../utils/fonts"
import WordsMarquee from "./words-marquee"


export default function WordsOnStreet() {
  return (
    <div className='bg-[#141B23] min-h-screen w-full pt-12 sm:pt-16 md:pt-20 relative pb-20 md:pb-32 lg:pb-54'>
        <div className="bg-[url('/words1.png')] absolute top-12 sm:top-16 md:top-20 left-0 z-0 bg-cover bg-top w-full h-[130vh]">
        </div>

        <div className='relative flex flex-col w-full z-10 top-0 mt-20 sm:mt-28 md:mt-36 lg:mt-42 px-4 sm:px-6 lg:px-8'>
            <div className="flex flex-col gap-3 md:gap-4">
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
                <div className="hidden lg:flex relative justify-center">
                    {/* Card 1 */}
                    <div className="relative z-10">
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
                    <div className="relative z-20">
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
                    <div className="relative z-30">
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
                    <div className="relative z-20">
                        <div className="bg-linear-to-t from-[#FFFBFD] p-4 -rotate-4 -ml-4 to-[#FFC2F7] w-64 h-68 rounded-[18.42px]">
                            <div className="h-3/5 flex items-center justify-center">
                                <Image src="/card4.png" alt="card image" width={113.25} height={123.21}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h5 className="font-bold text-lg text-[#20262E]">Bonuses & Rewards</h5>
                                <p className="text-[#20262E] text-[10px]">No dey hide updates!!!! Invite your friends and family to join squads and get paid <strong>N1000</strong> when they use your referral link</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet: Grid Layout */}
                <div className="flex flex-col items-center justify-center  lg:hidden">
                    {/* Card 1 */}
                    <div className="rotate-9 bg-linear-to-tl md:w-[320px] w-[248.34px] h-[289.61px] from-[#000000] to-[#232D39] p-4 rounded-[18.42px] flex flex-col">
                        <div className="h-40 flex items-center justify-center">
                            <Image src="/card1.png" alt="card image" width={105.18} height={132.06} className="max-h-full w-auto"/>
                        </div> 
                        <div className="flex flex-col gap-2 mt-3">
                            <h5 className="font-bold text-base sm:text-lg text-[#D0F091]">Numerous Options</h5>
                            <p className="text-[#FAFEF4] text-xs sm:text-sm">Bet Your Way with Endless Options! No matter your game, we&apos;ve got the odds, the excitement, and the options just for you!</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="-rotate-4 ml-16 mt-5 bg-linear-to-tl md:w-[320px] w-[251.12px]  h-[289.74px] from-[#28A981] to-[#104333] p-4 rounded-[18.42px] flex flex-col">
                        <div className="h-40 flex items-center justify-center">
                            <Image src="/card2.png" alt="card image" width={150.87} height={132.87} className="max-h-full w-auto"/>
                        </div>
                        <div className="flex flex-col gap-2 mt-3">
                            <h5 className="font-bold text-base sm:text-lg text-[#D0F091]">Instant Cashout</h5>
                            <p className="text-[#FAFEF4] text-xs sm:text-sm">Say goodbye to waiting! With Squads, you can cash out your funds instantly—any time, any day. Whether it&apos;s a weekend or midnight, your money is just a tap away. 🚀</p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className=" rotate-6 mt-4 mr-8 md:w-[320px] bg-white w-[251.12px] h-[289.61px] p-4  rounded-[18.42px] flex flex-col">
                        <div className="h-40 flex items-center justify-center">
                            <Image src="/card3.png" alt="card image" width={113.25} height={123.21} className="max-h-full w-auto"/>
                        </div>
                        <div className="flex flex-col gap-2 mt-3">
                            <h5 className="font-bold text-base sm:text-lg text-[#20262E]">Fast Deposit</h5>
                            <p className="text-[#20262E] text-xs sm:text-sm">Don&apos;t let slow transactions hold you back. With Squads, you can deposit funds instantly and stay in the game. Your winning streak starts here!🚀</p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="-rotate-4 mt-4 md:w-[320px] bg-linear-to-t w-[249.08px] h-[288.87px] from-[#FFFBFD] to-[#FFC2F7] p-4 rounded-[18.42px] flex flex-col">
                        <div className="h-40 flex items-center justify-center">
                            <Image src="/card4.png" alt="card image" width={113.25} height={123.21} className="max-h-full w-auto"/>
                        </div>
                        <div className="flex flex-col gap-2 mt-3">
                            <h5 className="font-bold text-base sm:text-lg text-[#20262E]">Bonuses & Rewards</h5>
                            <p className="text-[#20262E] text-xs sm:text-sm">No dey hide updates!!!! Invite your friends and family to join squads and get paid <strong>N1000</strong> when they use your referral link</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Words on the Street Section */}
            <div className="flex items-center justify-center flex-col mt-24 sm:mt-32 md:mt-40 lg:mt-48 w-full">
                <div className="flex flex-col items-center justify-center">
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
            <div className="mt-8">
                <WordsMarquee />
            </div>
        </div>
    </div>
  )
}