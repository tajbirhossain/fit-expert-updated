'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade';
import { Trans, useTranslation } from 'react-i18next';



// const sliderContent = [
//     {
//         image: '/images/slider-image-2.png',
//         content: 'Dzięki tej platformie nie musze juz więcej używać nudnego Excela do zarządzania moimi klientami. Wszystko mam pod kontrolą a moi klienci sami umawiają wizyty. Zaoszczędziłam mnóstwo czasu!',
//         name: 'Piotr Piechnik',
//         role: 'CEO at Move Center',
//     },
//     {
//         image: '/images/slider-image-3.png',
//         content: 'Fit.Expert odmieniło sposób, w jaki zarządzam swoją pracą! Zamiast tracić czas na wpisywanie danych w Excelu, teraz wszystko mam w jednym, wygodnym miejscu. Klienci samodzielnie rezerwują treningi, a ja mogę skupić się na tym, co ważne. ',
//         name: 'Mateusz Turecki',
//         role: 'Trener Personalny',
//     },
// ]

const OpinionSlider = () => {
    const prevRef = useRef<HTMLButtonElement | null>(null)
    const nextRef = useRef<HTMLButtonElement | null>(null)
    const [swiperInstance, setSwiperInstance] = useState<any>(null)
    const { t, i18n } = useTranslation("common");
    const [sliderContent, setSliderContent] = useState<{ image: string, content: string, name: string, role: string }[]>([])

    useEffect(() => {
        if (
            swiperInstance &&
            prevRef.current &&
            nextRef.current &&
            !swiperInstance.destroyed
        ) {
            swiperInstance.params.navigation.prevEl = prevRef.current
            swiperInstance.params.navigation.nextEl = nextRef.current

            swiperInstance.navigation.destroy()
            swiperInstance.navigation.init()
            swiperInstance.navigation.update()
        }
    }, [swiperInstance])

    const updateSliderContent = () => {
        setSliderContent([
            {
                image: '/images/slider-image-2.png',
                content: t('opinions.slide1.review'),
                name: 'Piotr Piechnik',
                role: 'CEO at Move Center',
            },
            {
                image: '/images/slider-image-3.png',
                content: t('opinions.slide2.review'),
                name: 'Mateusz Turecki',
                role: 'Trener Personalny',
            },
        ]);
    };

    useEffect(() => {
        updateSliderContent();
    }, [i18n.language]);

    return (
        <div className='relative max-w-[1050px] mx-auto'>
            <span className='w-[124px] h-[200px] rounded-full bg-[#BBD60F] absolute -top-[22px] left-0 max-[800px]:w-[82px] max-[800px]:h-[132px] max-[800px]:-left-4' />
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                effect={'fade'}
                speed={1000}
                onSwiper={setSwiperInstance}
                modules={[Navigation, Pagination, EffectFade]}
                className="mySwiper"
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                    bulletClass: 'custom-bullet',
                    bulletActiveClass: 'custom-bullet-active',
                }}
                fadeEffect={{
                    crossFade: true,
                }}

            >
                {sliderContent.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="flex max-[800px]:flex-col">
                            <div className="reveal w-1/2 h-[500px] px-12 max-[990px]:h-[400px] max-[990px]:px-4 max-[800px]:w-full max-[800px]:px-0 max-[650px]:h-[350px] max-[450px]:h-[242px]">
                                <img src={item.image} alt="" className='w-full h-full object-cover rounded-[30px]' />
                            </div>
                            <div className='reveal w-1/2 h-[500px] relative py-12 pt-[90px] px-5 max-[990px]:h-[400px] max-[990px]:px-0 max-[800px]:w-full max-[650px]:h-fit'>
                                <span className='text-[104px] font-black text-[#BBD60F] absolute top-0 left-5 leading-[110%] max-[800px]:left-0'>“</span>
                                <p className='text-2xl font-bold mb-12 max-[1200px]:text-[22px] max-[990px]:mb-5 max-[650px]:text-xl max-[650px]:mb-7'>
                                    {item.content}
                                </p>
                                <div>
                                    <h3 className='text-xl font-bold mb-2'>{item.name}</h3>
                                    <p className='font-medium text-[#A0A0A0]'>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex gap-3 absolute bottom-0 right-5 z-10 max-[650px]:hidden">
                <button ref={prevRef} className='size-11 rounded-full flex items-center justify-center bg-[#BBD60F] border-2 border-[#BBD60F] duration-300 hover:bg-transparent'>
                    <img src="/icons/slide-left.svg" alt="Previous" />
                </button>
                <button ref={nextRef} className='size-11 rounded-full flex items-center justify-center bg-[#BBD60F] border-2 border-[#BBD60F] duration-300 hover:bg-transparent'>
                    <img src="/icons/slide-right.svg" alt="Next" />
                </button>
            </div>
            <div className="custom-pagination flex gap-2 justify-center absolute !left-1/2 !-bottom-[55px] !-translate-x-1/2 max-[650px]:!-bottom-[25px]"></div>
        </div>
    )
}

export default OpinionSlider
