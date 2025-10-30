'use client';
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const vectorRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate main image with scale and fade
    tl.fromTo(
      mainImageRef.current,
      { 
        scale: 0.8, 
        opacity: 0,
        y: 30
      },
      { 
        scale: 1, 
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );

    // Animate text content
    tl.fromTo(
      textRef.current,
      { 
        opacity: 0,
        y: 20
      },
      { 
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "-=0.5" // Start 0.5s before previous animation ends
    );

    // Animate CTA button
    tl.fromTo(
      ctaRef.current,
      { 
        opacity: 0,
        scale: 0.9,
        y: 10
      },
      { 
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.4"
    );

    // Animate vectors with stagger
    tl.fromTo(
      vectorRefs.current.filter(Boolean),
      { 
        opacity: 0,
        scale: 0.5,
        rotate: -15
      },
      { 
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.8,
        stagger: 0.1,
      },
      "-=0.8"
    );

  }, { scope: heroRef });

  return (
    <div 
      ref={heroRef}
      className="flex flex-col items-center justify-center gap-3 lg:h-fit mb-42 h-[79vh] md:h-[50vh]"
    >
      <div className="flex flex-row w-full">
        <div
          className="pattern fixed inset-0 bg-size-[10rem] md:bg-size-[14rem] lg:bg-size-18rem pointer-events-none -z-10"
          aria-hidden="true"  
        />
        <div className="relative flex justify-center w-full">
          <div className="absolute z-20 lg:flex hidden justify-between items-center w-full px-36">
            <div className="w-1/2">
              <div ref={(el) => { vectorRefs.current[0] = el }} className="opacity-0">
                <Image src="/vec1.png" alt="vector" width={54} height={31} />
              </div>
            </div>
            <div className="w-1/2 lg:flex hidden justify-between">
              <div className="mt-18 ml-72">
                <div ref={(el) => { vectorRefs.current[1] = el }} className="opacity-0">
                  <Image src="/vec3.png" alt="vector" width={27} height={28.44} />
                </div>
              </div>
              <div className="mt-24 -mr-12">
                <div ref={(el) => { vectorRefs.current[2] = el }} className="opacity-0">
                  <Image src="/vec6.png" alt="vector" width={171} height={141.48} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col mt-12">
            {/* Show on Mobile */}
            <div className="mt-45 w-full flex lg:hidden justify-between overflow-hidden">
              <div className="mt-20 ml-9">
                <div ref={(el) => { vectorRefs.current[3] = el }} className="opacity-0">
                  <Image src="/vec1.png" alt="vector" width={35.11} height={20.15} />
                </div>
              </div>
              <div className="md:hidden">
                <div ref={(el) => { vectorRefs.current[4] = el }} className="opacity-0">
                  <Image src="/vec6.png" alt="vector" width={100.49} height={82.14} />
                </div>
              </div>
            </div>
            
            <div className="relative w-full">
              <div className="lg:hidden absolute mt-13 flex w-full items-end justify-end -ml-9">
                <div ref={(el) => { vectorRefs.current[5] = el }} className="opacity-0">
                  <Image src="/vec3.png" alt="vector" width={27} height={28.44} />
                </div>
              </div>
              <div 
                ref={mainImageRef}
                className="relative lg:w-[844px] lg:h-[300px] w-[374.98px] h-[148.2px] mt-16 opacity-0"
              >
                <Image priority src="/mainImg.png" alt="Hero Image" fill />
              </div>
            </div>
            
            <div className="-mt-14 z-20 lg:block hidden -ml-7">
              <div ref={(el) => { vectorRefs.current[6] = el }} className="opacity-0">
                <Image src="/vec2.png" alt="vector" width={85.15} height={88.26} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between items-center w-full px-12">
        <div className="lg:block hidden">
          <div ref={(el) => { vectorRefs.current[7] = el }} className="opacity-0">
            <Image src="/vec5.png" alt="vector" width={129.08} height={140.79} />
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center lg:gap-4 gap-6 -mr-4 lg:mt-0 mt-14">
          <p 
            ref={textRef}
            className="text-center lg:text-xl text-base opacity-0"
          >
            Just pick <strong className="font-extrabold font">More</strong> or <strong className="font-extrabold">Less</strong> on player stats <br /> win up to 
            <span className="text-[#D0F091]"> 100X your cash!</span>
          </p>
          <Link 
            ref={ctaRef}
            href="/" 
            className="px-5 py-3 flex gap-2 bg-[#D0F091] text-[#2A343F] rounded-[7.62px] hover:scale-105 transition-transform opacity-0"
          >
            <p>Wanna play? Tap in</p>
            <Image src="/cash.png" alt="cash" width={18} height={23}/>
          </Link>
        </div>
        
        {/* Show on Mobile */}
        <div className="lg:hidden flex justify-between w-full">
          <div className="mt-20 -ml-12">
            <div ref={(el) => { vectorRefs.current[8] = el }} className="opacity-0">
              <Image src="/vec5.png" alt="vector" width={129.08} height={140.79} />
            </div>
          </div>
          <div className="mt-12">
            <div ref={(el) => { vectorRefs.current[9] = el }} className="opacity-0">
              <Image src="/vec4.png" alt="vector" width={21.89} height={20.33} />
            </div>
          </div>
        </div>
        
        <div className="mr-40 lg:block hidden">
          <div ref={(el) => { vectorRefs.current[10] = el }} className="opacity-0">
            <Image src="/vec4.png" alt="vector" width={52} height={43.55} />
          </div>
        </div>
      </div>
    </div>
  );
}