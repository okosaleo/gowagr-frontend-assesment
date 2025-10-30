import Link from "next/link"
import { Anek } from "../utils/fonts"
import { Gloria } from "../utils/fonts"
import { onest } from "../utils/fonts"
import Image from "next/image"

const blogImage = [
    {
        id: 1,
        image: "/latest1.png",
        head: "News",
        color: "#218208",
        head2: "Introducing: The new way to win money on sports.",
        para: "Lorem ipsum dolor sit amet consectetur. Massa a nec leo arcu sed netus. Feugiat diam aliquam sapien."
    },
     {
        id: 2,
        image: "/latest2.png",
        head: "Tips",
        color: "#FD89ED",
        head2: "From signing up to enjoying our sweet benefits, it only takes a few..",
        para: "Lorem ipsum dolor sit amet consectetur. Massa a nec leo arcu sed netus. Feugiat diam aliquam sapien."
    },
     {
        id: 3,
        image: "/latest3.png",
        head: "News",
        color: "#6DE0E7",
        head2: "Squads Game: Win real money with your football knowledge",
        para: "Lorem ipsum dolor sit amet consectetur. Massa a nec leo arcu sed netus. Feugiat diam aliquam sapien."
    },
]


export default function Latest() {
  return (
    <div className='bg-[#141B23] flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full px-4 sm:px-6 lg:px-8'>
        <div className='mt-16 md:mt-24 lg:mt-32 flex items-center flex-col justify-center text-center'>
            <h2 className={`${Anek.className} text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
                Latest from the <span className={`${Gloria.className} text-[#D0F091]`}>Gang</span>
            </h2>
            <p className={`${onest.className} text-[#D9D9D9] text-base sm:text-lg md:text-xl mt-2`}>
                Subscribe to get latest yap from Wadmin
            </p>
        </div>

        {/* Blog Cards */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
            {blogImage.map((props) => (
              <div key={props.id} className="flex flex-col gap-5">
                  <div className="relative w-full aspect-[378/240] max-w-[378px] mx-auto lg:mx-0"> 
                    <Image 
                        src={props.image} 
                        alt="Blog Post Image" 
                        fill 
                        className="object-cover"
                    />
                   </div> 
                  <div className="w-full max-w-[378px] mx-auto lg:mx-0 flex flex-col gap-4 px-4 sm:px-0">
                    <h2 
                        style={{ color: props.color }}
                        className="text-sm sm:text-base font-semibold"
                    >
                        {props.head}
                    </h2>
                    <h4 className="text-white font-bold text-base sm:text-lg">
                        {props.head2}
                    </h4>
                    <p className="text-sm text-[#797F86]">
                        {props.para}
                    </p>
                  </div>
              </div>
            ))}
        </div>

        <div className="mb-16 md:mb-20 lg:mb-24">
            <Link 
                href="/" 
                className="px-5 py-3 inline-flex bg-[#D0F091] text-[#2A343F] rounded-[7.62px] font-medium hover:bg-[#c4e682] transition-colors"
            >
                <p>Read More on blog</p>
            </Link>
        </div>
    </div>
  )
}