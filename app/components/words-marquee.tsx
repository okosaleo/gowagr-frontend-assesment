import Image from "next/image"
import Marquee from "react-fast-marquee"

export default function WordsMarquee() {
  return (
    <div className="mt-28">
    <Marquee  autoFill>
        <div className="flex gap-9">
        <div>
            <Image src="/Frame.png" alt="MARQUEE image" width={314} height={444} />
        </div>
        <div>
            <Image src="/Frame1.png" alt="MARQUEE image" width={298} height={314} />
        </div>
        <div >
            <Image src="/Frame2.png" alt="MARQUEE image" width={314.96} height={360.47} />
        </div>
        <div className="mr-9">
            <Image src="/Frame3.png" alt="MARQUEE image" width={278.33} height={263.77} />
        </div>
        </div>
    </Marquee>
    <Marquee className="mt-28" autoFill>
        <div className="flex gap-9">
        <div>
            <Image src="/Frame4.png" alt="MARQUEE image" width={314} height={360.47} />
        </div>
        <div>
            <Image src="/Frame5.png" alt="MARQUEE image" width={278.33} height={263.77} />
        </div>
        <div >
            <Image src="/Frame6.png" alt="MARQUEE image" width={314.71} height={493.44} />
        </div>
        <div className="mr-9">
            <Image src="/Frame7.png" alt="MARQUEE image" width={298} height={314.77} />
        </div>
        </div>
    </Marquee>
    </div>
  )
}
