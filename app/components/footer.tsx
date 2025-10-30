import Image from "next/image"
import { Gloria } from "../utils/fonts"
import Link from "next/link"

export default function Footer() {
  return (
    <div className='bg-[#141B23] flex items-center flex-col justify-center px-4 sm:px-6 lg:px-8'>
      {/* Main CTA Section */}
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-2 bg-linear-to-br from-[#19212A] from-50% w-full max-w-[1199px] min-h-[500px] lg:h-[664px] to-[#000000] mt-16 sm:mt-24 md:mt-32 lg:mt-38 py-8 sm:py-10 md:py-12 px-6 sm:px-8 md:px-12 rounded-2xl md:rounded-3xl mb-8 md:mb-10'>
        
        {/* Left Content */}
        <div className='flex flex-col w-full lg:w-[740px]'>
          <div className={`${Gloria.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#D0F091] lg:flex hidden flex-col gap-1`}>
            <h2 className="ml-2 sm:ml-4 md:ml-7">The Streets</h2>
            <h2 className="text-[#88C80C]">F**k with</h2>
            <h2 className="ml-12 sm:ml-32 md:ml-52 lg:ml-68">Squads</h2>
          </div>
          
          <div className="flex flex-col items-center gap-6 sm:gap-0 mt-6 lg:mt-0">
            <div className="flex lg:flex-row flex-col items-center">
              <div className="flex">
              <div className="relative w-40 h-[153px] sm:w-[190px] sm:h-[182px] md:w-[238px] md:h-[228.58px] -mt-8 sm:-mt-10 md:-mt-12">
                 <Image src="/fot1.png" alt="footer image" fill className="object-contain" />
              </div>
              <div className="relative w-40 h-[153px] sm:w-[190px] sm:h-[182px] md:w-[238px] md:h-[228.58px] mt-2 sm:mt-3 md:mt-4 -ml-8 sm:-ml-10 md:-ml-12">
                 <Image src="/fot2.png" alt="footer image" fill className="object-contain" />
              </div>
              </div>
              <div className="sm:mt-16 w-3/4 mt-3 mb-4 flex items-center justify-center md:mt-16 lg:mt-26 sm:ml-6 md:ml-8 lg:ml-10">
              <Link href="/" className="px-4 sm:px-5 py-2.5 sm:py-3 flex gap-2 bg-[#D0F091] text-[#2A343F] rounded-[7.62px] hover:bg-[#c0e081] transition-colors text-sm sm:text-base font-medium">
                <p>Sign Up on Squads</p>
                <Image src="/cash.png" alt="cash" width={18} height={23} className="w-4 h-5 sm:w-[18px] sm:h-[23px]" />
              </Link>
            </div>
            </div>

            <div className={`${Gloria.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#D0F091] lg:hidden flex flex-col gap-1`}>
            <h2 className="ml-2 sm:ml-4 md:ml-7">The Streets</h2>
            <h2 className="text-[#88C80C]">F**k with</h2>
            <h2 className="ml-12 sm:ml-32 md:ml-52 lg:ml-68">Squads</h2>
          </div>
          </div>
        </div>

        {/* Right Images - Hidden on mobile, shown on tablet+ */}
        <div className="flex relative justify-center  lg:justify-start">
          <div className="relative w-[180px] h-[170px] lg:w-[278px] lg:h-[263px] z-10 -mr-32 lg:-mr-60 mt-20 lg:mt-28 -rotate-5">
             <Image src="/fot3.png" alt="footer image" fill className="object-contain" />
          </div>
          <div className="relative w-[204px] h-72 lg:w-[315.02px] lg:h-[444.47px] z-20">
             <Image src="/fot4.png" alt="footer image" fill className="object-contain" />
          </div>
          <div className="relative w-[193px] h-[204px] lg:w-[298.02px] lg:h-[315px] z-30 -ml-32 lg:-ml-60 mt-28 lg:mt-46">
            <Image src="/fot5.png" alt="footer image" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* Footer Info Section */}
      <div className="w-full max-w-[1199px] flex flex-col lg:flex-row gap-4 mb-12 sm:mb-16 md:mb-20">
        
        {/* Left Column - Company Info */}
        <div className="flex flex-col p-5 sm:p-6 gap-3 sm:gap-4 border border-[#2A343F] min-h-60 w-full lg:w-1/2 rounded-2xl md:rounded-3xl">
          <div className="relative w-[140px] h-[24.82px] sm:w-40 sm:h-[28.38px] md:w-[184px] md:h-[32.65px]">
            <Image src="/fotlogo.png" alt="footerlogo" fill className="object-contain" />
          </div>
          <p className="text-[#797F86] text-[10px] sm:text-xs leading-5 sm:leading-6">
            Squads Daily Fantasy uses official league statistics provided by reputable partners and only includes statistics from sporting events the relevant league deems to be official. Squads is not affiliated or connected with sports teams, and/or players displayed on its platform.
          </p>
          <p className="text-xs sm:text-sm">
            Want to reach us? 
            <a 
              className="text-[#D0F091] hover:underline ml-1"
              href="mailto:sup@squads.game">
              sup@squads.game
            </a>
          </p>
        </div>

        {/* Right Column - Links & Social */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          
          {/* Links & Social Card */}
          <div className="border border-[#2A343F] min-h-28 w-full rounded-2xl md:rounded-3xl gap-3 sm:gap-4 flex flex-col p-5 sm:p-6">
            <div className="text-white text-[10px] sm:text-[12px] flex flex-wrap gap-3 sm:gap-4 justify-between">
              <Link href="/" className="hover:text-[#D0F091] transition-colors">How To Play</Link>
              <Link href="/" className="hover:text-[#D0F091] transition-colors">FAQs</Link>
              <Link href="/" className="hover:text-[#D0F091] transition-colors">Terms</Link>
              <Link href="/" className="hover:text-[#D0F091] transition-colors">Privacy Policy</Link>
              <Link href="/" className="hover:text-[#D0F091] transition-colors">Responsible Gaming</Link>
            </div>
            
            <div className="flex items-center justify-between w-full">
              <div className="flex justify-between items-center gap-4 sm:gap-6 md:gap-8">
                <Link href="/" className="hover:opacity-70 transition-opacity">
                  <Image src="/twitter.png" alt='twitter link' height={18} width={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </Link>
                <Link href="/" className="hover:opacity-70 transition-opacity">
                  <Image src="/tiktok.png" alt='tiktok link' height={18} width={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </Link>
                <Link href="/" className="hover:opacity-70 transition-opacity">
                  <Image src="/youtube.png" alt='youtube link' height={18} width={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </Link>
                <Link href="/" className="hover:opacity-70 transition-opacity">
                  <Image src="/IG.png" alt='Ig link' height={18} width={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </Link>
              </div>
              <div>
                <Image src="/18.png" alt='18+ icon' height={25} width={25} className="w-5 h-5 sm:w-[25px] sm:h-[25px]" />
              </div>
            </div>
          </div>

          {/* Copyright Card */}
          <div className="flex items-center justify-center border border-[#2A343F] min-h-28 w-full text-[10px] sm:text-[12px] text-[#797F86] rounded-2xl md:rounded-3xl p-4 text-center">
            <p>
              Copyright © 2025 SquadsDFS. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
