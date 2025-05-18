'use client'

import React, { useState, useRef, useEffect } from 'react'
import LanguageSwitcher from './languageSwitch/LanguageSwitcher'
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    const menuItems = t('header.menu', { returnObjects: true }) as { label: string, target: string }[];

    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    const SCROLL_OFFSET = 20

    useEffect(() => {

        const handleScroll = (): void => {
            const scrollPosition = window.scrollY
            if (scrollPosition > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }

            const sections = ['hero', 'mainFunction', 'opinions', 'faq', 'joinTester']
            const headerElement = document.querySelector('header')
            const headerHeight = headerElement ? headerElement.offsetHeight : 0

            let nextActiveSection = ''
            let minDistance = Infinity

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    const distance = Math.abs(rect.top - headerHeight)

                    if (rect.top - headerHeight < 100 && distance < minDistance) {
                        minDistance = distance
                        nextActiveSection = section
                    }
                }
            }

            if (nextActiveSection && nextActiveSection !== activeSection) {
                setActiveSection(nextActiveSection)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault()

        const element = document.getElementById(sectionId)
        if (element) {
            const headerElement = document.querySelector('header')
            const headerHeight = headerElement ? headerElement.offsetHeight : 0

            const elementPosition = element.getBoundingClientRect().top + window.scrollY

            const offsetPosition = elementPosition - headerHeight

            setActiveSection(sectionId)

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })

            window.history.pushState(null, '', `#${sectionId}`)
        }
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
            ${scrolled
                ? 'py-[15px] max-[650px]:py-[10px] bg-white/60 backdrop-blur-lg shadow-md'
                : 'py-[25px] max-[650px]:py-[20px] bg-transparent'
            }`}>
            <div className="container flex items-center justify-between relative">
                <div className={`transition-all duration-300 ${!scrolled ? 'filter drop-shadow-md' : ''}`}>
                    <img
                        src="/images/logo.svg"
                        alt="Fix Expert Logo"
                        className="max-[1200px]:w-[130px] max-[650px]:w-[120px]"
                    />
                </div>

                <nav aria-label="Primary Navigation" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-[990px]:hidden" >
                    <ul className={`flex items-center px-[26px] rounded-full max-[1050px]:px-0 transition-all duration-300}`}>
                        {menuItems.map(({ label, target }, idx) => (
                            <li key={idx} className="px-4 py-5 font-bold">
                                <a
                                    href={`#${target}`}
                                    onClick={(e) => handleAnchorClick(e, target)}
                                    className={`duration-300 hover:text-[#B2CC07] ${activeSection === target ? 'text-[#B2CC07]' : 'text-black'
                                        }`}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center max-[1200px]:text-base">
                    <LanguageSwitcher />

                    <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer">
                        <button className="w-[194px] h-[58px] bg-black text-white font-bold rounded-full flex items-center justify-center border-2 border-black duration-300 group hover:bg-white hover:text-black max-[1200px]:w-[170px] max-[1200px]:h-[50px] max-[650px]:w-[145px] max-[650px]:h-11 max-[650px]:text-xs">
                            <span className="mr-1.5">{t("header.cta")}</span>
                            <img
                                src="/icons/arrow-right-white.svg"
                                alt=""
                                className="duration-300 invert-0 group-hover:invert"
                            />
                        </button>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header