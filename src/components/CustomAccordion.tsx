'use client'
import { useState, useRef, useEffect } from 'react'

interface CustomAccordingProps {
    question: string
    answer: string
}

export default function CustomAccording({ question, answer }: CustomAccordingProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [height, setHeight] = useState<number>(0)
    const headingRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const updateHeight = () => {
        if (!headingRef.current || !contentRef.current) return

        const headingH = headingRef.current.scrollHeight
        const contentH = contentRef.current.scrollHeight + 20

        setHeight(isOpen ? headingH + contentH : headingH)
    }

    useEffect(() => {
        updateHeight()
    }, [isOpen])

    useEffect(() => {
        window.addEventListener('resize', updateHeight)
        updateHeight()

        return () => {
            window.removeEventListener('resize', updateHeight)
        }
    }, [isOpen])

    return (
        <div
            className="w-full overflow-hidden transition-all duration-300 ease-in-out border border-[#E2E2E2] rounded-[20px] mb-3"
            style={{ height }}
        >
            <div
                ref={headingRef}
                className="flex items-center justify-between px-[26px] py-5 cursor-pointer"
                onClick={() => setIsOpen((o) => !o)}
            >
                <p className="pr-2 text-lg font-bold">{question}</p>
                <img
                    src="/icons/Plus.svg"
                    alt=""
                    className="duration-300"
                    style={{ rotate: isOpen ? '45deg' : '0deg' }}
                />
            </div>

            <div ref={contentRef} className="px-[26px] accordionContent">
                <p className="text-lg font-medium text-[#606060]">{answer}</p>
            </div>
        </div>
    )
}
