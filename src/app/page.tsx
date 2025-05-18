"use client"
import { useState } from 'react';

import BusinessCard from "@/components/animated/BusinessCard";
import RevealOnScroll from "@/components/animated/RevealOnScroll";
import Solution from "@/components/animated/Solution";
import CustomAccording from "@/components/CustomAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OpinionSlider from "@/components/OpinionSlider";

import { Trans, useTranslation } from 'react-i18next';


export default function Home() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const { t } = useTranslation("common");
  const data = (t('faq.sliderContent', { returnObjects: true }) as { title: string, description: string }[]).map((value, idx) => {
    return { question: value.title, answer: value.description }
  })



  return (
    <div>
      <RevealOnScroll
        distance={40}
        duration={0.8}
        ease="power2.out"
        stagger={true}
        staggerAmount={0.12}
        randomize={true}
        randomFactor={0.15}
      />
      <Header />

      <main className="pt-[108px]">

        <section className="hero py-[50px] relative mb-[100px] overflow-x-clip max-[650px]:mb-[90px] max-[650px]:py-1" id="hero">
          <img src="/images/radial-1.svg" alt="" className="absolute top-2/5 -left-[30%] -translate-y-1/2 -z-10 max-[650px]:max-w-[unset] max-[650px]:w-[800px] max-[650px]:top-[16%] max-[650px]:-left-1/2" />
          <img src="/images/radial-2.svg" alt="" className="absolute -top-[30%] -right-[70%] -translate-y-1/2 -z-10" />
          <div className="container flex items-center max-[990px]:flex-col">
            <div className="w-2/5 pr-4 max-[1400px]:w-1/2 max-[990px]:w-full max-[990px]:pr-0 max-[990px]:mb-12">
              <div className="reveal flex items-center p-3.5 rounded-full bg-white mb-4">
                <img src="/icons/muscle.png" alt="" className="mr-3" />
                <p className="text-sm font-bold">
                  {t('hero.betaSignUp')}
                </p>
              </div>
              <h1 className="reveal text-6xl font-black italic uppercase mb-[26px] max-[1200px]:text-5xl max-[650px]:text-[38px]">
                <Trans i18nKey="hero.title" components={{
                  trainer: <span className="text-[#B2CC07]" />,
                  facilities: <span className="text-[#B2CC07]" />
                }} />
              </h1>
              <p className="reveal text-lg text-[#606060] mb-12">
                {t('hero.description')}
              </p>
              <div className="reveal flex items-center">
                <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="mr-[34px] max-[1050px]:mr-[14px] max-[650px]:mr-2">
                  <button className="py-2 px-2.5 pl-8 bg-[#C7E410] rounded-full text-lg font-bold flex items-center justify-center group max-[1050px]:pl-[14px] max-[650px]:p-[7px] max-[650px]:pl-5 max-[650px]:text-sm max-[390px]:text-xs">
                    <span className="mr-2.5 max-[390px]:mr-1">{t('hero.joinTesters')}</span>
                    <span className="size-[51px] rounded-full bg-black flex items-center justify-center duration-300 group-hover:bg-white max-[650px]:size-[42px] max-[390px]:size-9">
                      <img src="/icons/arrow-right-white.svg" alt="" className="w-[22px] duration-300 invert-0 group-hover:invert" />
                    </span>
                  </button>
                </a>
                <a href="#instruction" className="text-lg font-bold max-[650px]:text-sm text-start max-[390px]:text-xs">
                  {t('hero.seeHowItWorks')}
                </a>
              </div>
            </div>
            <div className="w-3/5 h-[590px] flex justify-center relative max-[1400px]:w-1/2 max-[990px]:w-full max-[650px]:h-fit max-[450px]:w-[130vw] max-[450px]:left-[12%]">
              <div className="relative w-fit h-full">
                <img
                  src="/images/hero-image.png"
                  srcSet="/images/hero-image.png 1x, /images/hero-image@2x.png 2x"
                  alt=""
                  className="w-full max-w-full max-h-full object-contain"
                />
                <img
                  src="/images/hero-phone.png"
                  srcSet="/images/hero-phone.png 1x, /images/hero-phone@2x.png 2x"
                  alt=""
                  className="absolute left-[38px] top-8 animate-custom-float max-[450px]:w-[170px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="instruction mb-[120px] pt-[10px]" id="instruction">
          <div className="container">
            <div className="w-full p-20 pb-0 bg-black rounded-[40px] text-center text-white overflow-hidden max-[990px]:py-[61px] max-[990px]:px-[40px] max-[990px]:pb-0 max-[650px]:px-5 max-[650px]:pb-6">
              <h3 className="reveal text-[22px] font-bold mb-[26px] relative z-10 max-[1200px]:text-xl max-[650px]:text-lg max-[650px]:mb-[18px]">
                {t('instruction.subtitle')}
              </h3>
              <h2 className="reveal text-[52px] font-black mb-[72px] relative z-10 max-[1200px]:text-[44px] max-[650px]:text-[28px]">
                <Trans
                  i18nKey="instruction.title"
                  components={{ highlight: <span className="text-[#D0EA2A]" /> }}
                />
              </h2>
              <div className="reveal relative h-fit flex justify-center">
                <img src="/images/radial-2.svg" alt="" className="absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-[25%]" />
                <img src="/images/instruction-demo2.svg" alt="" className="relative z-[1]" />
                <div className="h-1/2 w-full bg-gradient-to-t from-black to-transparent absolute left-0 bottom-0 z-[1]"></div>
                <div className="size-[183px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full max-[650px]:size-[91px]">
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="size-full bg-black flex items-center justify-center rounded-full relative z-10 cursor-pointer hover:bg-gray-900 transition-colors"
                  >
                    <img src="/icons/play-circle.svg" alt="" className="max-[650px]:w-9 pointer-events-none" />
                  </button>
                  <span className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(128,194,226,1)] opacity-75 animate-[ping_2s_ease-in-out_infinite] pointer-events-none"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mainFunction pt-[30px] mb-[237px] max-[650px]:mb-0" id="mainFunction">
          <div className="container">
            <div className="max-w-[1023px] mb-28 max-[650px]:mb-12">
              <h3 className="reveal text-[22px] font-bold mb-9 max-[1200px]:text-xl max-[650px]:text-lg max-[650px]:mb-6 flex items-center">
                <img src="/icons/glow-icon.png" alt="" className="mr-1" />
                {t('mainFunction.title')}
              </h3>
              <h2 className="reveal text-[52px] font-black italic uppercase leading-[1] max-[1200px]:text-[44px] max-[650px]:text-[34px]">
                <Trans
                  i18nKey="mainFunction.subtitle"
                  components={{
                    highlight: <span className="text-[#B2CC07]" />,
                    // highlight2: <span className="text-[#B2CC07]" />,
                    brTag: <br />
                  }}
                />
              </h2>
            </div>
            <div className="flex items-start justify-between mb-[125px] max-[990px]:flex-col max-[650px]:mb-[78px]">
              <div className="w-[53%] max-[990px]:w-full max-[990px]:mb-[26px]">
                <div className="mb-6 hidden max-[990px]:block">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/calender-icon.png" alt="" className="mr-1" />{t('mainFunction.card1.title')}
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    {t('mainFunction.card1.subtitle')}
                  </h2>
                </div>
                <img src="/images/function-image-1.png" alt="" className="reveal w-full rounded-[30px]" />
              </div>
              <div className="w-[38%] max-[990px]:w-full">
                <div className="mb-[34px] block max-[990px]:hidden">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/calender-icon.png" alt="" className="mr-1" />{t('mainFunction.card1.title')}
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    {t('mainFunction.card1.subtitle')}
                  </h2>
                </div>
                <p className="reveal text-lg text-[#606060] mb-[26px]">
                  {t('mainFunction.card1.description')}
                </p>
                <ul className="reveal mb-6">
                  {
                    (t('mainFunction.card1.list', { returnObjects: true }) as string[]).map((value, idx) => {
                      return (
                        <li className="flex items-center text-lg font-bold mb-2" key={idx}>
                          <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                          {value}
                        </li>
                      )
                    })
                  }
                </ul>
                <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="w-fit block max-[650px]:w-full">
                  <button className="reveal py-5 px-6 rounded-full border-2 border-[#BBD60F] text-lg font-bold flex items-center duration-300 bg-white hover:bg-[#BBD60F] max-[1200px]:py-4 max-[650px]:w-full max-[650px]:justify-center">
                    {t('mainFunction.buttonText')}
                    <img src="/icons/arrow-right-white.svg" alt="" className="invert ml-2.5" />
                  </button>
                </a>
              </div>
            </div>

            <div className="flex items-start justify-between mb-[125px] max-[990px]:flex-col-reverse max-[650px]:mb-[78px]">
              <div className="w-[38%] max-[990px]:w-full">
                <div className="mb-[34px] block max-[990px]:hidden">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/clipboard-icon.png" alt="" className="mr-1" />{t('mainFunction.card2.title')}
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    {t('mainFunction.card2.subtitle')}
                  </h2>
                </div>
                <p className="reveal text-lg text-[#606060] mb-[26px]">
                  {t('mainFunction.card2.description')}
                </p>
                <ul className="reveal mb-6">
                  {
                    (t('mainFunction.card2.list', { returnObjects: true }) as string[]).map((value, idx) => {
                      return (
                        <li className="flex items-center text-lg font-bold mb-2" key={idx}>
                          <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                          {value}
                        </li>
                      )
                    })
                  }
                </ul>
                <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="w-fit block max-[650px]:w-full">
                  <button className="reveal py-5 px-6 rounded-full border-2 border-[#BBD60F] text-lg font-bold flex items-center duration-300 bg-white hover:bg-[#BBD60F] max-[1200px]:py-4 max-[650px]:w-full max-[650px]:justify-center">
                    {t('mainFunction.buttonText')}
                    <img src="/icons/arrow-right-white.svg" alt="" className="invert ml-2.5" />
                  </button>
                </a>
              </div>
              <div className="w-[53%] max-[990px]:w-full max-[990px]:mb-[26px]">
                <div className="mb-6 hidden max-[990px]:block">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/clipboard-icon.png" alt="" className="mr-1" />{t('mainFunction.card2.title')}
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    {t('mainFunction.card2.subtitle')}
                  </h2>
                </div>
                <img src="/images/function-image-2.svg" alt="" className="reveal w-full rounded-[30px]" />
              </div>
            </div>

            <div className="flex items-start justify-between mb-[125px] max-[990px]:flex-col max-[650px]:mb-[78px]">
              <div className="w-[53%] max-[990px]:w-full max-[990px]:mb-[26px]">
                <div className="mb-6 hidden max-[990px]:block">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/id-card-icon.png" alt="" className="mr-1" />{t('mainFunction.card3.title')}
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    {t('mainFunction.card3.subtitle')}
                  </h2>
                </div>
                <img src="/images/function-image-3.svg" alt="" className="reveal w-full rounded-[30px]" />
              </div>
              <div className="w-[38%] max-[990px]:w-full">
                <div className="mb-[34px] block max-[990px]:hidden">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/id-card-icon.png" alt="" className="mr-1" />{t('mainFunction.card3.title')}
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    {t('mainFunction.card3.subtitle')}
                  </h2>
                </div>
                <p className="reveal text-lg text-[#606060] mb-[26px]">
                  {t('mainFunction.card3.description')}
                </p>
                <ul className="reveal mb-6">
                  {
                    (t('mainFunction.card3.list', { returnObjects: true }) as string[]).map((value, idx) => {
                      return (
                        <li className="flex items-center text-lg font-bold mb-2" key={idx}>
                          <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                          {value}
                        </li>
                      )
                    })
                  }
                </ul>
                <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="w-fit block max-[650px]:w-full">
                  <button className="reveal py-5 px-6 rounded-full border-2 border-[#BBD60F] text-lg font-bold flex items-center duration-300 bg-white hover:bg-[#BBD60F] max-[1200px]:py-4 max-[650px]:w-full max-[650px]:justify-center">
                    {t('mainFunction.buttonText')}
                    <img src="/icons/arrow-right-white.svg" alt="" className="invert ml-2.5" />
                  </button>
                </a>
              </div>
            </div>

            <div className="flex items-start justify-between mb-[125px] max-[990px]:flex-col-reverse max-[650px]:mb-[78px]">
              <div className="w-[38%] max-[990px]:w-full">
                <div className="mb-[34px] block max-[990px]:hidden">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/phone-icon.png" alt="" className="mr-1" />{t('mainFunction.card4.title')}
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    {t('mainFunction.card4.subtitle')}
                  </h2>
                </div>
                <p className="reveal text-lg text-[#606060] mb-[26px]">
                  {t('mainFunction.card4.description')}
                </p>
                <ul className="reveal mb-6">
                  {
                    (t('mainFunction.card4.list', { returnObjects: true }) as string[]).map((value, idx) => {
                      return (
                        <li className="flex items-center text-lg font-bold mb-2" key={idx}>
                          <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                          {value}
                        </li>
                      )
                    })
                  }
                </ul>
                <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="w-fit block max-[650px]:w-full">
                  <button className="reveal py-5 px-6 rounded-full border-2 border-[#BBD60F] text-lg font-bold flex items-center duration-300 bg-white hover:bg-[#BBD60F] max-[1200px]:py-4 max-[650px]:w-full max-[650px]:justify-center">
                    {t('mainFunction.buttonText')}
                    <img src="/icons/arrow-right-white.svg" alt="" className="invert ml-2.5" />
                  </button>
                </a>
              </div>
              <div className="w-[53%] max-[990px]:w-full max-[990px]:mb-[26px]">
                <div className="mb-6 hidden max-[990px]:block">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/phone-icon.png" alt="" className="mr-1" />{t('mainFunction.card3.title')}
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    {t('mainFunction.card4.subtitle')}
                  </h2>
                </div>
                <img src="/images/function-image-4.svg" alt="" className="reveal w-full rounded-[30px]" />
              </div>
            </div>

            <div className="flex items-start justify-between mb-[125px] max-[990px]:flex-col max-[650px]:mb-0">
              <div className="w-[53%] max-[990px]:w-full max-[990px]:mb-[26px]">
                <div className="mb-6 hidden max-[990px]:block">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/money-icon.png" alt="" className="mr-1" />{t('mainFunction.card5.title')}
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    {t('mainFunction.card5.subtitle')}
                  </h2>
                </div>
                <img src="/images/function-image-5.svg" alt="" className="reveal w-full rounded-[30px]" />
              </div>
              <div className="w-[38%] max-[990px]:w-full">
                <div className="mb-[34px] block max-[990px]:hidden">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/money-icon.png" alt="" className="mr-1" />{t('mainFunction.card5.title')}
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    {t('mainFunction.card5.subtitle')}
                  </h2>
                </div>
                <p className="reveal text-lg text-[#606060] mb-[26px]">
                  {t('mainFunction.card5.description')}
                </p>
                <ul className="reveal mb-6">
                  {
                    (t('mainFunction.card5.list', { returnObjects: true }) as string[]).map((value, idx) => {
                      return (
                        <li className="flex items-center text-lg font-bold mb-2" key={idx}>
                          <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                          {value}
                        </li>
                      )
                    })
                  }
                </ul>
                <a href="https://tally.so/r/mYeEoz" className="w-fit block max-[650px]:w-full">
                  <button className="reveal py-5 px-6 rounded-full border-2 border-[#BBD60F] text-lg font-bold flex items-center duration-300 bg-white hover:bg-[#BBD60F] max-[1200px]:py-4 max-[650px]:w-full max-[650px]:justify-center">
                    {t('mainFunction.buttonText')}
                    <img src="/icons/arrow-right-white.svg" alt="" className="invert ml-2.5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="additionalFeature pt-[91px] pb-[61px]" id="additionalFeature">
          <div className="container">
            <div className="mb-[102px] text-center max-[650px]:text-start max-[650px]:mb-7">
              <h3 className="reveal text-[22px] font-bold mb-9 max-[1200px]:text-xl max-[650px]:text-lg max-[650px]:mb-6 flex items-center justify-center">
                <img src="/icons/fire-icon.png" alt="" className="mr-1" />{t('additionalFeature.title')}
              </h3>
              <h2 className="reveal text-[52px] font-black italic uppercase leading-[1] max-[1200px]:text-[44px] max-[650px]:text-[34px]">
                <Trans
                  i18nKey="additionalFeature.subtitle"
                  components={{
                    highlight: <span className="text-[#B2CC07]" />,
                    brTag: <br />
                  }}
                />
              </h2>
            </div>
            <div>
              <div className="reveal flex justify-between mb-10 max-[1200px]:mb-[30px] max-[990px]:flex-wrap max-[990px]:mb-2.5">
                <div className="w-1/2 bg-[#F2F2F2] rounded-[50px] py-12 px-10 max-[1200px]:p-9 max-[1200px]:rounded-[35px] max-[990px]:w-full max-[990px]:mb-2.5 max-[650px]:rounded-3xl max-[650px]:p-5">
                  <h3 className="text-[26px] font-bold leading-[1.2] mb-4 max-[650px]:text-2xl">
                    <Trans
                      i18nKey="additionalFeature.item1.title"
                      components={{
                        brTag: <br />
                      }}
                    />
                  </h3>
                  <p className="max-w-[425px] text-[#606060] text-lg leading-[1.2]">
                    {t('additionalFeature.item1.description')}
                  </p>
                </div>
                <div className="w-[calc(25%-15px)] bg-[#F2F2F2] rounded-[50px] py-12 px-10 max-[1200px]:p-9 max-[1200px]:rounded-[35px] max-[990px]:w-[calc(50%-5px)] max-[650px]:rounded-3xl max-[650px]:p-5">
                  <h3 className="text-[26px] font-bold leading-[1.2] mb-4 max-[650px]:text-2xl">
                    <Trans
                      i18nKey="additionalFeature.item2.title"
                      components={{
                        brTag: <br />
                      }}
                    />
                  </h3>
                  <p className="max-w-[229px] text-[#606060] text-lg leading-[1.2]">
                    {t('additionalFeature.item2.description')}
                  </p>
                </div>
                <div className="w-[calc(25%-15px)] bg-[#F2F2F2] rounded-[50px] py-12 px-10 max-[1200px]:p-9 max-[1200px]:rounded-[35px] max-[990px]:w-[calc(50%-5px)] max-[650px]:rounded-3xl max-[650px]:p-5">
                  <h3 className="text-[26px] font-bold leading-[1.2] mb-4 max-[650px]:text-2xl">
                    <Trans
                      i18nKey="additionalFeature.item3.title"
                      components={{
                        brTag: <br />
                      }}
                    />
                  </h3>
                  <p className="max-w-[229px] text-[#606060] text-lg leading-[1.2]">
                    {t('additionalFeature.item3.description')}
                  </p>
                </div>
              </div>
              <div className="reveal flex justify-between mb-12 max-[990px]:flex-wrap">
                <div className="w-[calc(100%/3-10px)] bg-[#F2F2F2] rounded-[50px] py-12 px-10 max-[1200px]:p-9 max-[1200px]:rounded-[35px] max-[990px]:w-full max-[990px]:mb-2.5 max-[650px]:rounded-3xl max-[650px]:p-5">
                  <h3 className="text-[26px] font-bold leading-[1.2] mb-4 max-[650px]:text-2xl">
                    <Trans
                      i18nKey="additionalFeature.item4.title"
                      components={{
                        brTag: <br />
                      }}
                    />
                  </h3>
                  <p className="text-[#606060] text-lg leading-[1.2]">
                    {t('additionalFeature.item4.description')}
                  </p>
                </div>
                <div className="w-[calc(100%/3-10px)] bg-[#F2F2F2] rounded-[50px] py-12 px-10 max-[1200px]:p-9 max-[1200px]:rounded-[35px] max-[990px]:w-full max-[990px]:mb-2.5 max-[650px]:rounded-3xl max-[650px]:p-5">
                  <h3 className="text-[26px] font-bold leading-[1.2] mb-4 max-[650px]:text-2xl">
                    <Trans
                      i18nKey="additionalFeature.item5.title"
                      components={{
                        brTag: <br />
                      }}
                    />
                  </h3>
                  <p className="text-[#606060] text-lg leading-[1.2]">
                    {t('additionalFeature.item5.description')}
                  </p>
                </div>
                <div className="w-[calc(100%/3-10px)] bg-[#F2F2F2] rounded-[50px] py-12 px-10 max-[1200px]:p-9 max-[1200px]:rounded-[35px] max-[990px]:w-full max-[990px]:mb-2.5 max-[650px]:rounded-3xl max-[650px]:p-5">
                  <h3 className="text-[26px] font-bold leading-[1.2] mb-4 max-[650px]:text-2xl">
                    <Trans
                      i18nKey="additionalFeature.item6.title"
                      components={{
                        brTag: <br />
                      }}
                    />
                  </h3>
                  <p className="text-[#606060] text-lg leading-[1.2]">
                    {t('additionalFeature.item6.description')}
                  </p>
                </div>
              </div>

              <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="block w-fit mx-auto">
                <button className="reveal text-lg font-bold w-[248px] h-[60px] rounded-full bg-[#C7E410] flex items-center justify-center border-2 border-[#C7E410] duration-300 hover:bg-transparent">
                  {t('additionalFeature.buttonText')}
                  <img src="/icons/arrow-right-white.svg" alt="" className="invert ml-2.5" />
                </button>
              </a>
            </div>
          </div>
        </section>

        <Solution />

        <BusinessCard />

        <section className="opinions pt-[30px] pb-[120px] max-[650px]:pb-5" id="opinions">
          <div className="container">
            <div className="mb-20 text-center max-[650px]:mb-[66px]">
              <h3 className="reveal text-[22px] font-bold mb-9 max-[1200px]:text-xl max-[650px]:text-lg max-[650px]:mb-6">{t('opinions.title')}</h3>
              <h2 className="reveal text-[52px] font-black italic uppercase leading-[1] max-[1200px]:text-[44px] max-[650px]:text-[34px]">
                <Trans
                  i18nKey="opinions.subtitle"
                  components={{
                    highlight: <span className="text-[#B2CC07]" />,
                    brTag: <br />
                  }}
                />
              </h2>
            </div>

            <OpinionSlider />
          </div>
        </section>

        <section className="faq pt-[30px] pb-[77px] max-[650px]:pb-[52px]" id="faq">
          <div className="container flex max-[990px]:flex-wrap">
            <div className="w-[48%] pr-10 max-[990px]:w-full max-[990px]:mb-10 max-[990px]:pr-0">
              <div>
                <h3 className="reveal text-[22px] font-bold mb-9 max-[1200px]:text-xl max-[650px]:text-lg max-[650px]:mb-6">{t('faq.title')}</h3>
                <h2 className="reveal text-[52px] font-black italic uppercase leading-[1] mb-9 max-[1200px]:text-[44px] max-[650px]:text-[34px] max-[650px]:mb-7">
                  <Trans
                    i18nKey="faq.subtitle"
                    components={{
                      highlight: <span className="text-[#B2CC07]" />,
                      brTag: <br className="max-[990px]:hidden" />
                    }}
                  />
                </h2>
                <p className="reveal max-w-[426px] text-lg font-medium text-[#606060] leading-[24px] max-[990px]:max-w-full">
                  {t('faq.description')}
                </p>
              </div>
            </div>

            <div className="reveal w-[52%] max-[990px]:w-full">
              {data.map((item, index) => (
                <CustomAccording key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        <section className="pt-[60px] joinTester mb-28" id="joinTester">
          <div className="container">
            <div className="min-h-[600px] py-[63px] px-[91px] rounded-[40px] bg-[#C7E410] flex max-[990px]:py-12 max-[990px]:px-5 max-[650px]:py-7 max-[650px]:px-3.5">
              <div className="w-[calc(100%-559px)] max-[1200px]:w-[calc(100%-450px)] max-[990px]:w-full">
                <img src="/images/footer-logo.svg" alt="" className="reveal mb-10 block max-[1200px]:mb-6 max-[990px]:mx-auto max-[650px]:w-[150px] max-[650px]:mb-[26px]" />
                <h2 className="reveal text-[52px] font-black leading-[1] mb-[27px] max-[1200px]:text-[44px] max-[990px]:text-center max-[650px]:text-[34px]">
                  <Trans
                    i18nKey="joinTester.title"
                    components={{
                      highlight: <span className="text-white" />
                    }}
                  />
                </h2>
                <div className="w-full mb-10 hidden max-[990px]:block">
                  <div className="w-full relative flex items-center justify-between max-[650px]:w-[100vw] max-[650px]:-left-[31px]">
                    <div className="w-[calc(100%/3-7px)] flex flex-col gap-2">
                      <img src="/images/tester-1.png" alt="" className="w-full rounded-[30px] max-[650px]:rounded-[17px]" />
                    </div>
                    <div className="w-[calc(100%/3-7px)] flex flex-col gap-2">
                      <img src="/images/tester-3.png" alt="" className="w-full rounded-[30px] max-[650px]:rounded-[17px]" />
                      <img src="/images/tester-4.png" alt="" className="w-full rounded-[30px] max-[650px]:rounded-[17px]" />
                    </div>
                    <div className="w-[calc(100%/3-7px)] flex flex-col gap-2">
                      <img src="/images/tester-4.png" alt="" className="w-full rounded-[30px] max-[650px]:rounded-[17px]" />
                    </div>
                  </div>
                </div>
                <p className="reveal text-lg font-medium mb-20 leading-[140%] max-[990px]:text-center max-[990px]:mb-10">
                  <Trans
                    i18nKey="joinTester.description"
                    components={{
                      highlight: <span className="font-bold" />,
                      quote: <span>"</span>
                    }}
                  />
                </p>
                <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="w-fit block max-[990px]:mx-auto">
                  <button className="reveal py-2 px-2.5 pl-8 bg-black rounded-full text-lg font-bold text-white flex items-center justify-center group">
                    <span className="mr-5">{t('joinTester.buttonText')}</span>
                    <span className="size-[51px] rounded-full bg-white flex items-center justify-center border-[3px] border-white duration-300 group-hover:bg-[#C7E410]">
                      <img src="/icons/arrow-right-white.svg" alt="" className="w-[22px] invert" />
                    </span>
                  </button>
                </a>
              </div>

              <div className="w-[559px] pl-20 max-[1200px]:w-[450px] block max-[990px]:hidden">
                <div className="reveal w-full relative">
                  <div className="w-[calc(50%-8px)] flex flex-col gap-5 absolute -top-8 left-0">
                    <img src="/images/tester-1.png" alt="" className="w-full rounded-[30px]" />
                    <img src="/images/tester-2.png" alt="" className="w-full rounded-[30px]" />
                  </div>
                  <div className="reveal w-[calc(50%-8px)] flex flex-col gap-5 absolute -top-24 right-0">
                    <img src="/images/tester-3.png" alt="" className="w-full rounded-[30px]" />
                    <img src="/images/tester-4.png" alt="" className="w-full rounded-[30px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        {/* Modal z filmem */}
        {showVideoModal && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors z-50 
                            max-[650px]:-top-8 max-[650px]:right-2 max-[650px]:text-3xl 
                            bg-black/50 rounded-full w-10 h-10 flex items-center justify-center
                            max-[650px]:w-8 max-[650px]:h-8"
              >
                ×
              </button>
              <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/Xod8Un1RD0E?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

      </main>
    </div >
  );
}
