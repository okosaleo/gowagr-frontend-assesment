import localFont from "next/font/local";
import { Onest } from 'next/font/google'

export const Anek = localFont({
  src: '../fonts/AnekGurmukhi-ExtraBold.woff2',
  weight: '800',
  style: 'normal'
});

export const Gloria = localFont({
  src: '../fonts/gloriahallelujah.woff2',
  weight: '400',
  style: 'normal'
});

export const onest = Onest({
  subsets: ['latin']
})

export const EudoxusSans = localFont({
  src: [
    {
      path: '../fonts/EudoxusSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/EudoxusSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/EudoxusSans-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
})