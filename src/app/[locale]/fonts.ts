// src/app/fonts.ts
import localFont from 'next/font/local'

export const aeonik = localFont({
    src: [
        {
            path: '../../../public/fonts/Aeonik/fonnts.com-Aeonik_Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Aeonik/fonnts.com-Aeonik_Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Aeonik/fonnts.com-Aeonik_Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/Aeonik/fonnts.com-Aeonik_Black.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-aeonik',
})