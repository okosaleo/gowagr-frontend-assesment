import Link from 'next/link'
import { Anek } from "../utils/fonts"
import Image from 'next/image'

export default function Start() {
  return (
    <div className='bg-[#141B23] -mt-9 z-10 flex items-center flex-col justify-center w-full min-h-screen py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
        <div className='mt-16 sm:mt-24 md:mt-32 lg:mt-38 flex items-center justify-center p-4 sm:p-6 flex-col max-w-7xl'>
            <div>
                <h2 className={`${Anek.className} text-[#D2D4D7] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center leading-tight`}>
                    START WINNING 
                    <br /> WITH THE SQUAD
                </h2>
            </div>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#D2D4D7] mt-4 sm:mt-6 text-center max-w-3xl'>
                From signing up to winning your first entry, it only takes a few steps
            </p>
            <Link href="/" className="px-6 sm:px-8 md:px-10 font-bold mt-6 sm:mt-8 md:mt-10 py-3 md:py-4 lg:py-5 text-sm sm:text-base md:text-lg lg:text-xl bg-[#D0F091] text-[#2A343F] rounded-[7.62px] hover:bg-[#c0e081] transition-colors">
                Join the Community    
            </Link>
        </div>

        {/* Bento Cards */}
        <div className='bg-[#121920] flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 w-full max-w-[1183px] px-4 sm:px-6 md:px-12 lg:px-26 py-6 sm:py-8 md:py-10 mt-12 sm:mt-16 md:mt-20 lg:mt-24 rounded-2xl md:rounded-3xl'>
            
            {/* Row 1 */}
            <div className='w-full flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6'>
                {/* Card 1 */}
                <div className='w-full lg:w-2/5 min-h-80 sm:min-h-[360px] md:min-h-[400px] bg-[#232D39] relative overflow-hidden rounded-xl p-6 sm:p-8 md:p-10'>
                    <div
                        style={{
                            backgroundImage: "url('/pattern.png')",
                            backgroundRepeat: "repeat",
                            backgroundSize: "25rem",
                            opacity: 0.08
                        }}
                        className="absolute inset-0 pointer-events-none z-0"
                        aria-hidden="true"
                    />
                    <div
                        style={{
                            backgroundImage: "url('/pattern.png')",
                            backgroundRepeat: "repeat",
                            backgroundSize: "18rem",
                            backgroundPosition: "50px 50px",
                            opacity: 0.12
                        }}
                        className="absolute inset-0 pointer-events-none z-0"
                        aria-hidden="true"
                    />

                    <div className='relative gap-3 sm:gap-3.5 flex flex-col items-start justify-start z-10'>
                        <div className='relative w-20 h-20 sm:w-24 sm:h-24 md:w-[104px] md:h-[110px]'>
                            <Image src="/start1.png" alt='bento image' fill className='object-contain' />
                        </div>
                        <div className='flex flex-col gap-3 sm:gap-4'>
                            <Link href="/" className='py-1.5 px-4 bg-[#2F3843] w-20 sm:w-24 rounded-sm text-xs sm:text-sm text-center'>
                                Register
                            </Link>
                            <h4 className='font-extrabold text-lg sm:text-xl md:text-2xl'>Join the Squads Community</h4>
                        </div>
                        <div>
                            <p className='text-xs sm:text-sm text-[#B6B8BB]'>Create your account in seconds with just your name and email address</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='w-full lg:w-3/5 min-h-[360px] sm:min-h-[400px] bg-[#1F2935] relative overflow-hidden rounded-xl'>
                    <div
                        style={{
                            backgroundImage: "url('/pattern.png')",
                            backgroundRepeat: "repeat",
                            backgroundSize: "25rem",
                            opacity: 0.08
                        }}
                        className="absolute inset-0 pointer-events-none z-0"
                        aria-hidden="true"
                    />
                    <div
                        style={{
                            backgroundImage: "url('/pattern.png')",
                            backgroundRepeat: "repeat",
                            backgroundSize: "18rem",
                            backgroundPosition: "50px 50px",
                            opacity: 0.12
                        }}
                        className="absolute inset-0 pointer-events-none z-0"
                        aria-hidden="true"
                    />
                    
                    <div className='flex gap-4 lg:flex-row flex-col-reverse  relative items-center lg:p-0 '>
                        <div className='relative lg:hidden block w-[278px] h-[180px] shrink-0'>
                            <Image src="/phone.png" alt='Bento Image' fill className='object-contain' />
                        </div>
                        <div className='relative lg:block hidden  lg:w-[281px] lg:h-[400px] shrink-0'>
                            <Image src="/start2.png" alt='Bento Image' fill className='object-contain' />
                        </div>
                        <div className='flex flex-col gap-3 sm:gap-4 md:gap-5 w-full lg:p-0 p-6 sm:w-auto sm:flex-1 sm:pr-6'>
                            <Link href="/" className='py-1.5 flex items-center justify-center bg-[#2F3843] w-28 sm:w-32 rounded-sm text-xs sm:text-sm'>
                                Fund Wallet
                            </Link>
                            <h4 className='font-extrabold text-lg sm:text-xl md:text-2xl'>Fund Your Account</h4>
                            <p className='text-xs sm:text-sm text-[#B6B8BB]'>
                                Deposit funds instantly using your preferred payment method to create an entry.
                                All our payment methods are fast & secure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2 */}
            <div className='w-full flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6'>
                {/* Card 3 */}
                <div className='w-full lg:w-3/5 min-h-[360px] sm:min-h-[400px] bg-[#1F2935] relative overflow-hidden rounded-xl py-6 sm:py-7'>
                    <div
                        style={{
                            backgroundImage: "url('/pattern.png')",
                            backgroundRepeat: "repeat",
                            backgroundSize: "25rem",
                            opacity: 0.08
                        }}
                        className="absolute inset-0 pointer-events-none z-0"
                        aria-hidden="true"
                    />
                    <div
                        style={{
                            backgroundImage: "url('/pattern.png')",
                            backgroundRepeat: "repeat",
                            backgroundSize: "18rem",
                            backgroundPosition: "50px 50px",
                            opacity: 0.12
                        }}
                        className="absolute inset-0 pointer-events-none z-0"
                        aria-hidden="true"
                    />

                    <div className='relative flex flex-col items-center gap-5 sm:gap-5 p-0'>
                        <div className='relative lg:block hidden w-[605.37px] h-[167.9px] -ml-8'>
                            <Image src="/start3.png" alt='Bento Image' fill className='object-contain' />
                        </div>
                         <div className='relative lg:hidden block w-73 h-[93.5px] mb-4'>
                            <Image src="/osi.png" alt='Bento Image' fill className='object-contain' />
                        </div>
                        <div className='flex flex-col gap-3 sm:gap-4 px-6 sm:px-8 md:px-9'>
                            <Link href="/" className='py-1.5 flex items-center justify-center bg-[#2F3843] w-20 sm:w-24 rounded-sm text-xs sm:text-sm'>
                                Picks
                            </Link>
                            <h4 className='font-extrabold text-lg sm:text-xl md:text-2xl'>Create your Entry</h4>
                            <p className='text-xs sm:text-sm text-[#B6B8BB]'>Browse the players market, pick more or less on available players and create your entry.</p>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='w-full lg:w-2/5 min-h-[360px] sm:min-h-[400px] bg-[#1F2935] relative overflow-hidden rounded-xl'>
                    <div
                        style={{
                            backgroundImage: "url('/pattern.png')",
                            backgroundRepeat: "repeat",
                            backgroundSize: "25rem",
                            opacity: 0.08
                        }}
                        className="absolute inset-0 pointer-events-none z-0"
                        aria-hidden="true"
                    />
                    <div
                        style={{
                            backgroundImage: "url('/pattern.png')",
                            backgroundRepeat: "repeat",
                            backgroundSize: "18rem",
                            backgroundPosition: "50px 50px",
                            opacity: 0.12
                        }}
                        className="absolute inset-0 pointer-events-none z-0"
                        aria-hidden="true"
                    />

                    <div className='relative flex flex-col gap-3 sm:gap-4 h-full'>
                        <div className='flex flex-col gap-2 sm:gap-3 p-6 sm:p-7 md:p-8'>
                            <Link href="/" className='py-1.5 px-4 bg-[#2F3843] w-20 sm:w-24 rounded-sm text-xs sm:text-sm text-center'>
                                Cashout
                            </Link>
                            <h4 className='font-extrabold text-lg sm:text-xl md:text-2xl'>
                                Withdraw your <br className='hidden sm:block' /> winnings
                            </h4>
                            <p className='text-xs sm:text-sm text-[#B6B8BB]'>Your entry is looking green? Withdraw straight to your bank account with ease.</p>
                        </div>

                        <div className='relative w-full h-40 sm:h-44 md:h-46 mt-auto'>
                            <Image src="/eco4.png" alt='Bento Image' fill className='object-cover rounded-b-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}