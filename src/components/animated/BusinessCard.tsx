'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CurvyLine1 from './lines/CurvyLine1';
import CurvyLine2 from './lines/CurvyLine2';
import { Trans, useTranslation } from 'react-i18next';


if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const handles = [
    "platinium_fitness",
    "paulinazaskroniec",
    "adammalysz",
    "purefintess_warszawa",
    "ukamilawgarazu",
    "piotrekzapierdalacz",
    "fiemasciema",
    "tymek",
];

const BusinessCard = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const leftImgs = useRef<NodeListOf<HTMLImageElement> | null>(null);
    const rightImgs = useRef<NodeListOf<HTMLImageElement> | null>(null);

    const [isWide, setIsWide] = useState(false);

    useEffect(() => {
        const container = sectionRef.current;
        if (!container) return;

        leftImgs.current = container.querySelectorAll('img[data-side="left"]');
        rightImgs.current = container.querySelectorAll('img[data-side="right"]');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top 90%',
                end: 'bottom 10%',
                scrub: 1.5,
                toggleActions: 'play none none reverse',
            }
        });

        tl.set({}, {}, 0.3);

        leftImgs.current.forEach((img, i) => {
            tl.to(img, {
                x: `-=${20 + i * 10}`,
                rotate: `-=${5 + i * 2}`,
                duration: 1.5,
                ease: 'power2.out'
            }, 0.3 + i * 0.2);
        });

        rightImgs.current.forEach((img, i) => {
            tl.to(img, {
                x: `+=${20 + i * 10}`,
                rotate: `+=${5 + i * 2}`,
                duration: 1.5,
                ease: 'power2.out'
            }, 0.4 + i * 0.2);
        });

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);


    useEffect(() => {
        const onResize = () => setIsWide(window.innerWidth > 650);
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);


    const { t } = useTranslation("common");

    return (
        <section className="businessCard pb-[60px]" id="businessCard" ref={sectionRef as React.RefObject<HTMLElement>}>
            <div className="container relative overflow-hidden max-[650px]:!px-0">
                <div className="w-full bg-[#FBFCF3] border-[1px] border-[#C5DB37] rounded-[80px] py-[85px] px-[126px] max-[990px]:rounded-[40px] max-[990px]:py-[60px] max-[990px]:px-[40px] max-[650px]:rounded-none max-[650px]:border-l-0 max-[650px]:border-r-0 max-[650px]:px-7 max-[650px]:py-10 max-[450px]:px-2">
                    <div className="mb-9 text-center">
                        <h3 className="reveal text-[22px] font-bold mb-9 max-[1200px]:text-xl max-[650px]:text-lg max-[650px]:mb-6">{t('businessCard.title')}</h3>
                        <h2 className="reveal text-[52px] font-black italic uppercase leading-[1] mb-6 max-[1200px]:text-[44px] max-[650px]:text-[34px] max-[650px]:mb-5">
                            <Trans
                                i18nKey="businessCard.subtitle"
                                components={{
                                    highlight: <span className="text-[#B2CC07]" />,
                                    brTag: <br />
                                }}
                            />
                        </h2>
                        <p className="reveal max-w-[606px] text-lg font-medium text-[#606060] mx-auto">
                            {t('businessCard.description')}
                        </p>
                    </div>
                    <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className='block mb-[58px] max-[650px]:mb-[42px]'>
                        <button className="reveal text-lg font-bold w-[248px] h-[60px] rounded-full bg-[#C7E410] flex items-center justify-center mx-auto border-2 border-[#C7E410] duration-300 hover:bg-transparent">
                            {t('businessCard.buttonText')}
                            <img src="/icons/arrow-right-white.svg" alt="" className="invert ml-2.5" />
                        </button>
                    </a>
                    <div className="w-fit relative z-10 mb-[58px] mx-auto">
                        <img src="/images/business-main-3.png" alt="" className="reveal max-w-full block mx-auto relative z-10 max-[990px]:w-[220px] max-[650px]:w-[154px]" />
                        <img src="/images/business-main-1.svg" alt="" data-side="left" className='reveal main-img bg-white rounded-3xl absolute top-[34px] -left-[236px] shadow-xl -rotate-[12.89deg] z-[2] max-[1200px]:-left-[190px] max-[990px]:-left-[110px] max-[650px]:w-[124px] max-[650px]:-left-14 max-[650px]:top-2 max-[650px]:rounded-[11px]' />
                        <img src="/images/business-main-2.svg" alt="" data-side="left" className='reveal main-img bg-white rounded-3xl absolute top-[255px] -left-[336px] shadow-xl -rotate-[33.19deg] z-[1] max-[1200px]:-left-[250px] max-[990px]:-left-[130px] max-[650px]:w-[124px] max-[650px]:top-[125px] max-[650px]:-left-[60px] max-[650px]:rounded-[11px]' />
                        <img src="/images/business-main-4.svg" alt="" data-side="right" className='reveal main-img bg-white rounded-3xl absolute top-10 -right-[250px] shadow-xl rotate-[15.74deg] z-[12] max-[1200px]:-right-[190px] max-[990px]:-right-[160px] max-[650px]:w-[124px] max-[650px]:top-[25px] max-[650px]:-right-20 max-[650px]:rounded-[11px]' />
                        <img src="/images/business-main-5.svg" alt="" data-side="right" className='reveal main-img bg-white rounded-3xl absolute top-[185px] -right-[362px] shadow-xl -rotate-[14.27deg] z-[11] max-[1200px]:-right-[250px] max-[990px]:-right-[190px] max-[990px]:top-[225px] max-[650px]:w-[108px] max-[650px]:top-[130px] max-[650px]:-right-[75px] max-[650px]:rounded-[11px]' />
                    </div>
                    {/* <div className="relative z-10">
                        <p className="reveal font-bold text-center mb-6">
                            Zobacz przykładowe wizytówki naszych klientów
                        </p>

                        <div className="reveal max-w-[900px] flex flex-wrap justify-center gap-3 mx-auto max-[650px]:hidden">
                            <div className="flex items-center p-[3px] pr-[15px] rounded-full border-2 border-[#D0EA2A] bg-black">
                                <img
                                    src="/images/business-card-person-1.png"
                                    alt=""
                                    className="size-8 rounded-full object-cover mr-2"
                                />
                                <p className="text-[15px] text-white font-medium">
                                    <span className="text-[#D0EA2A]">@</span> platinium_fitness
                                </p>
                            </div>
                            <div className="flex items-center p-[3px] pr-[15px] rounded-full border-2 border-[#D0EA2A] bg-black">
                                <img
                                    src="/images/business-card-person-2.png"
                                    alt=""
                                    className="size-8 rounded-full object-cover mr-2"
                                />
                                <p className="text-[15px] text-white font-medium">
                                    <span className="text-[#D0EA2A]">@</span> paulinazaskroniec
                                </p>
                            </div>
                            <div className="flex items-center p-[3px] pr-[15px] rounded-full border-2 border-[#D0EA2A] bg-black">
                                <img
                                    src="/images/business-card-person-3.png"
                                    alt=""
                                    className="size-8 rounded-full object-cover mr-2"
                                />
                                <p className="text-[15px] text-white font-medium">
                                    <span className="text-[#D0EA2A]">@</span> adammalysz
                                </p>
                            </div>
                            <div className="flex items-center p-[3px] pr-[15px] rounded-full border-2 border-[#D0EA2A] bg-black">
                                <img
                                    src="/images/business-card-person-4.png"
                                    alt=""
                                    className="size-8 rounded-full object-cover mr-2"
                                />
                                <p className="text-[15px] text-white font-medium">
                                    <span className="text-[#D0EA2A]">@</span> purefintess_warszawa
                                </p>
                            </div>
                            <div className="flex items-center p-[3px] pr-[15px] rounded-full border-2 border-[#D0EA2A] bg-black">
                                <img
                                    src="/images/business-card-person-5.png"
                                    alt=""
                                    className="size-8 rounded-full object-cover mr-2"
                                />
                                <p className="text-[15px] text-white font-medium">
                                    <span className="text-[#D0EA2A]">@</span> ukamilawgarazu
                                </p>
                            </div>
                            <div className="flex items-center p-[3px] pr-[15px] rounded-full border-2 border-[#D0EA2A] bg-black">
                                <img
                                    src="/images/business-card-person-6.png"
                                    alt=""
                                    className="size-8 rounded-full object-cover mr-2"
                                />
                                <p className="text-[15px] text-white font-medium">
                                    <span className="text-[#D0EA2A]">@</span> piotrekzapierdalacz
                                </p>
                            </div>
                            <div className="flex items-center p-[3px] pr-[15px] rounded-full border-2 border-[#D0EA2A] bg-black">
                                <img
                                    src="/images/business-card-person-7.png"
                                    alt=""
                                    className="size-8 rounded-full object-cover mr-2"
                                />
                                <p className="text-[15px] text-white font-medium">
                                    <span className="text-[#D0EA2A]">@</span> fiemasciema
                                </p>
                            </div>
                            <div className="flex items-center p-[3px] pr-[15px] rounded-full border-2 border-[#D0EA2A] bg-black">
                                <img
                                    src="/images/business-card-person-8.png"
                                    alt=""
                                    className="size-8 rounded-full object-cover mr-2"
                                />
                                <p className="text-[15px] text-white font-medium">
                                    <span className="text-[#D0EA2A]">@</span> tymek
                                </p>
                            </div>
                        </div>

                        <div className="relative hidden max-[650px]:block py-2">
                            <div className="flex whitespace-nowrap animate-marquee items-center">
                                {[...handles, ...handles].map((h, idx) => (
                                    <div
                                        key={idx}
                                        className="flex-shrink-0 flex items-center p-[3px] pr-[15px] mr-3 rounded-full border-2 border-[#D0EA2A] bg-black whitespace-nowrap"
                                    >
                                        <img
                                            src={`/images/business-card-person-${(idx % handles.length) + 1}.png`}
                                            alt={h}
                                            className="size-8 rounded-full object-cover mr-2"
                                        />
                                        <p className="text-[15px] text-white font-medium whitespace-nowrap">
                                            <span className="text-[#D0EA2A]">@</span> {h}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="relative w-full h-auto">
                    {
                        isWide ? (
                            <CurvyLine1 />
                        ) : (
                            <CurvyLine2 />
                        )
                    }
                </div>

            </div>
        </section>
    )
}

export default BusinessCard