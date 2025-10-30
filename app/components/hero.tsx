import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:h-fit mb-42 h-[79vh]  md:h-[50vh]">
        <div className="flex flex-row w-full ">
            <div
          className="pattern fixed inset-0 bg-size-[10rem] md:bg-size-[14rem] lg:bg-size-18rem pointer-events-none -z-10"
          aria-hidden="true"  
        />
            <div className="relative flex justify-center  w-full">
                <div className="absolute z-20 lg:flex hidden justify-between items-center w-full px-36">
                   <div className="w-1/2">
                       <Image src="/vec1.png" alt="vector" width={54} height={31} />
                   </div>
                   <div className="w-1/2 lg:flex hidden justify-between">
                       <div className="mt-18 ml-72">
                            <Image src="/vec3.png" alt="vector" width={27} height={28.44} />
                       </div>
                       <div className=" mt-24 -mr-12">
                            <Image src="/vec6.png" alt="vector" width={171} height={141.48} />
                       </div>
                   </div>
                </div>
                <div className="flex flex-col mt-12">
                    {/* Show on Mobile */}
                    <div className="mt-45 w-full flex lg:hidden justify-between overflow-hidden">
                        <div className="mt-20 ml-9">
                          <Image src="/vec1.png" alt="vector" width={35.11} height={20.15} />
                        </div>
                        <div className=" md:hidden">
                            <Image src="/vec6.png" alt="vector" width={100.49} height={82.14} />
                       </div>
                    </div>
                    <div className="relative w-full">
                        <div className="lg:hidden absolute mt-13 flex w-full items-end justify-end -ml-9">
                            <Image src="/vec3.png" alt="vector" width={27} height={28.44} />
                        </div>
                      <div className="relative lg:w-[844px] lg:h-[300px] w-[374.98px] h-[148.2px] mt-16 ">
                          <Image src="/mainImg.png" alt="Hero Image" fill />
                      </div>
                   </div>
                  <div className="-mt-14 z-20 lg:block hidden -ml-7">
                     <Image src="/vec2.png" alt="vector" width={85.15} height={88.26} />
                  </div>
                </div>
            </div>
        </div>


        <div className=" flex lg:flex-row flex-col justify-between items-center w-full px-12">
            <div className="lg:block hidden">
                <Image src="/vec5.png" alt="vector" width={129.08} height={140.79} />
            </div>
            <div className="flex flex-col items-center justify-center lg:gap-4 gap-6 -mr-4 lg:mt-0 mt-14">
                <p className="text-center lg:text-xl text-base">Just pick  <strong className="font-extrabold font"> More</strong> or <strong className="font-extrabold">Less</strong> on player stats <br /> win up to 
                <span className="text-[#D0F091]"> 100X your cash!</span>
                </p>
                <Link href="/" className="px-5 py-3 flex gap-2  bg-[#D0F091] text-[#2A343F] rounded-[7.62px]">
                   <p> Wanna play? Tap in </p>
                    <Image src="/cash.png" alt="cash" width={18} height={23}/>
                </Link>
            </div>
             {/* Show on Mobile */}
            <div className="lg:hidden flex justify-between w-full">
               <div className="mt-20 -ml-12">
                  <Image src="/vec5.png" alt="vector" width={129.08} height={140.79} />
                </div>
                <div className=" mt-12">
                 <Image src="/vec4.png" alt="vector" width={21.89} height={20.33} />
               </div>
            </div>
            <div className="mr-40 lg:block hidden">
                <Image src="/vec4.png" alt="vector" width={52} height={43.55} />
            </div>
        </div>
    </div>
  )
}
