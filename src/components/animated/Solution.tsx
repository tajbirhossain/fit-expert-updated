'use client'
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Trans, useTranslation } from 'react-i18next';

const Solution = () => {
    const [activeTab, setActiveTab] = useState<'trainer' | 'facility'>('trainer');
    const [isAnimating, setIsAnimating] = useState(false);

    const trainerContentRef = useRef(null);
    const facilityContentRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (trainerContentRef.current && facilityContentRef.current) {
            gsap.set(trainerContentRef.current, {
                autoAlpha: activeTab === 'trainer' ? 1 : 0,
                x: activeTab === 'trainer' ? 0 : -50,
                display: activeTab === 'trainer' ? 'flex' : 'none'
            });

            gsap.set(facilityContentRef.current, {
                autoAlpha: activeTab === 'facility' ? 1 : 0,
                x: activeTab === 'facility' ? 0 : 50,
                display: activeTab === 'facility' ? 'flex' : 'none'
            });
        }
    }, []);

    const handleTabChange = (tab: 'trainer' | 'facility') => {
        if (tab === activeTab || isAnimating) return;
        setIsAnimating(true);

        const currentContent =
            activeTab === 'trainer'
                ? trainerContentRef.current
                : facilityContentRef.current;
        const newContent =
            tab === 'trainer'
                ? trainerContentRef.current
                : facilityContentRef.current;

        const direction = tab === 'facility' ? 1 : -1;

        gsap.to(currentContent, {
            autoAlpha: 0,
            x: -50 * direction,
            duration: 0.5,
            onComplete: () => {
                gsap.set(currentContent, { display: 'none' });

                gsap.set(newContent, {
                    display: 'flex',
                    x: 50 * direction,
                });

                gsap.to(newContent, {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.5,
                    onComplete: () => setIsAnimating(false),
                });
            },
        });

        setActiveTab(tab);
    };

    const { t } = useTranslation("common");


    return (
        <section className="solution pt-24 mb-[153px] max-[650px]:pt-9 max-[650px]:mb-[106px]" id="solution">
            <div className="container">
                <div className="mb-[52px] text-center max-[650px]:text-start max-[650px]:mb-7">
                    <h3 className="reveal text-[22px] font-bold mb-9 max-[1200px]:text-xl max-[650px]:text-lg max-[650px]:mb-6">{t('solution.title')}</h3>
                    <h2 className="reveal text-[52px] font-black italic uppercase leading-[1] max-[1200px]:text-[44px] max-[650px]:text-[34px]">
                        <Trans
                            i18nKey="solution.subtitle"
                            components={{
                                highlight: <span className="text-[#B2CC07]" />,
                                brTag: <br />
                            }}
                        />
                    </h2>
                </div>
                <div className="reveal flex justify-center gap-2 mb-[78px] max-[650px]:gap-0 max-[650px]:justify-between max-[650px]:mb-[54px]">
                    <button
                        className={`h-[62px] px-[30px] rounded-full text-lg font-bold border-2 transition-all duration-300 ${activeTab === 'trainer'
                            ? 'border-[#D0EA2A] bg-[#D0EA2A10]'
                            : 'border-[#BDBDBD] bg-white'
                            } max-[650px]:w-[calc(50%-4px)] max-[500px]:px-2 max-[390px]:text-base`}
                        onClick={() => handleTabChange('trainer')}
                    >
                        {t('solution.button1')}
                    </button>
                    <button
                        className={`h-[62px] px-[30px] rounded-full text-lg font-bold border-2 transition-all duration-300 ${activeTab === 'facility'
                            ? 'border-[#D0EA2A] bg-[#D0EA2A10]'
                            : 'border-[#BDBDBD] bg-white'
                            } max-[650px]:w-[calc(50%-4px)] max-[500px]:px-2 max-[390px]:text-base`}
                        onClick={() => handleTabChange('facility')}
                    >
                        {t('solution.button2')}
                    </button>
                </div>

                <div className="reveal relative overflow-hidden" ref={containerRef}>
                    <div ref={trainerContentRef} className="flex max-w-[1152px] mx-auto flex-wrap max-[650px]:flex-nowrap max-[650px]:overflow-x-auto max-[650px]:scrollbar-hide" >
                        {
                            (t('solution.group1', { returnObjects: true }) as { idx: number, title: string, description: string }[]).map((value, idx) => {
                                return (
                                    <div className="w-1/4 px-1 max-[650px]:flex-none max-[650px]:w-[260px]" key={idx}>
                                        <div className="h-[60px] w-[60px] rounded-xl shadow-lg text-[22px] font-bold mb-5 flex items-center justify-center mx-auto max-[650px]:mx-[unset]">
                                            {value.idx}
                                        </div>
                                        <div className="text-center max-[650px]:text-start">
                                            <h3 className="text-lg font-bold leading-[1.2] mb-5">{value.title}</h3>
                                            <p className="text-lg font-medium text-[#606060] leading-[1.2]">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div ref={facilityContentRef} className="flex max-w-[1152px] mx-auto flex-wrap max-[650px]:flex-nowrap max-[650px]:overflow-x-auto max-[650px]:scrollbar-hide" >
                        {
                            (t('solution.group2', { returnObjects: true }) as { idx: number, title: string, description: string }[]).map((value, idx) => {
                                return (
                                    <div className="w-1/4 px-1 max-[650px]:flex-none max-[650px]:w-[260px]" key={idx}>
                                        <div className="h-[60px] w-[60px] rounded-xl shadow-lg text-[22px] font-bold mb-5 flex items-center justify-center mx-auto max-[650px]:mx-[unset]">
                                            {value.idx}
                                        </div>
                                        <div className="text-center max-[650px]:text-start">
                                            <h3 className="text-lg font-bold leading-[1.2] mb-5">{value.title}</h3>
                                            <p className="text-lg font-medium text-[#606060] leading-[1.2]">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Solution