'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([])

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // GSAP animations
  useGSAP(() => {
    if (isOpen) {
      // Open animation
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
      })
      
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.4,
        ease: 'power3.out',
      })

      // Stagger the links
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.1,
          delay: 0.2,
        }
      )
    } else {
      // Close animation
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
      })
      
      gsap.to(menuRef.current, {
        x: '100%',
        duration: 0.4,
        ease: 'power3.in',
      })
    }
  }, [isOpen])

  return (
    <>
      <nav className='px-6 md:px-12 lg:px-20 py-4 lg:bg-transparent bg-[#222C38] w-full flex justify-between items-center relative'>
        {/* Desktop Links - Hidden on mobile/tablet */}
        <div className='hidden lg:flex gap-8'>
          <Link 
            href="/"
            className='hover:text-[#D0F091] transition-colors'
          >
            Home
          </Link>
          <Link 
            className='hover:text-[#D0F091] transition-colors'
            href="/"
          >
            Partners
          </Link>
          <Link 
            className='hover:text-[#D0F091] transition-colors'
            href="/"
          >
            How to play
          </Link>
          <Link 
            className='hover:text-[#D0F091] transition-colors'
            href="/"
          >
            FAQs
          </Link>
        </div>

        {/* Logo - Centered on mobile, left on desktop */}
        <Link href="/" className='lg:absolute lg:left-1/2 lg:-translate-x-1/2'>
          <Image 
            src="/gowagrLogo.png" 
            alt='Squads Logo' 
            width={154.24} 
            height={33}
            className='w-32 md:w-[154px]'
          />
        </Link>

        {/* Desktop Social Links - Hidden on mobile/tablet */}
        <div className='hidden lg:flex gap-16 items-center'>
          <Link href="/" className='hover:opacity-70 transition-opacity'>
            <Image src="/twitter.png" alt='twitter link' height={18} width={18} />
          </Link>
          <Link href="/" className='hover:opacity-70 transition-opacity'>
            <Image src="/tiktok.png" alt='tiktok link' height={18} width={18} />
          </Link>
          <Link href="/" className='hover:opacity-70 transition-opacity'>
            <Image src="/youtube.png" alt='youtube link' height={18} width={18} />
          </Link>
          <Link href="/" className='hover:opacity-70 transition-opacity'>
            <Image src="/IG.png" alt='Ig link' height={18} width={18} />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className='lg:hidden z-50 flex flex-col gap-1.5 w-8 h-8 justify-center items-center'
          aria-label='Toggle menu'
        >
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden opacity-0 pointer-events-none'
        onClick={toggleMenu}
      />

      {/* Mobile/Tablet Menu */}
      <div
        ref={menuRef}
        className='fixed top-0 right-0 h-full w-80 md:w-96 bg-[#1a1a1a] z-40 lg:hidden translate-x-full shadow-2xl'
      >
        <div className='flex flex-col p-8 pt-20 gap-8'>
          {/* Navigation Links */}
          <div className='flex flex-col gap-6'>
            <Link
              ref={(el) => (linksRef.current[0] = el)}
              href="/"
              className='text-white text-2xl hover:text-[#D0F091] transition-colors'
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              ref={(el) => (linksRef.current[1] = el)}
              href="/"
              className='text-white text-2xl hover:text-[#D0F091] transition-colors'
              onClick={toggleMenu}
            >
              Partners
            </Link>
            <Link
              ref={(el) => (linksRef.current[2] = el)}
              href="/"
              className='text-white text-2xl hover:text-[#D0F091] transition-colors'
              onClick={toggleMenu}
            >
              How to play
            </Link>
            <Link
              ref={(el) => (linksRef.current[3] = el)}
              href="/"
              className='text-white text-2xl hover:text-[#D0F091] transition-colors'
              onClick={toggleMenu}
            >
              FAQs
            </Link>
          </div>

          {/* Social Links */}
          <div 
            ref={(el) => (linksRef.current[4] = el)}
            className='flex gap-8 items-center pt-8 border-t border-gray-700'
          >
            <Link href="/" className='hover:opacity-70 transition-opacity'>
              <Image src="/twitter.png" alt='twitter link' height={24} width={24} />
            </Link>
            <Link href="/" className='hover:opacity-70 transition-opacity'>
              <Image src="/tiktok.png" alt='tiktok link' height={24} width={24} />
            </Link>
            <Link href="/" className='hover:opacity-70 transition-opacity'>
              <Image src="/youtube.png" alt='youtube link' height={24} width={24} />
            </Link>
            <Link href="/" className='hover:opacity-70 transition-opacity'>
              <Image src="/IG.png" alt='Ig link' height={24} width={24} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}