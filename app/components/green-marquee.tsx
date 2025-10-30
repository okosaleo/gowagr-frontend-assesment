import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Anek } from "../utils/fonts"

const marqueeData = [
    {
        id: 1,
        text: "DRIBBLE",
        img: "/maq1.png"
    },
    {
        id: 2,
        text: "SHOTS",
        img: "/maq2.png"
    },
    {
        id: 3,
        text: "GOALIE-SAVES",
        img: "/maq3.png"
    },
    {
        id: 4,
        text: "TACKLES",
        img: "/maq4.png"
    },
    {
        id: 5,
        text: "FOULS",
        img: "/maq5.png"
    },
]

export default function GreenMarquee() {
  return (
    <div className="overflow-hidden w-full py-8 -mt-24">
      <Marquee className="bg-[#12DD27] flex items-center rotate-1" autoFill>
          {marqueeData.map((item) => (
              <div key={item.id} className="flex gap-5 p-4 items-center justify-center">
                  <p className={`${Anek.className} text-[#262F3B] text-5xl`}>{item.text}</p>
                  <div className="-mt-4">
                      <Image src={item.img} alt="Marquee Images" width={38} height={38} />
                  </div> 
              </div>
          ))}
      </Marquee>
    </div>
  )
}