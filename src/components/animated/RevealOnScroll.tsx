'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface RevealOnScrollProps {
    selector?: string;
    // defaultDelay?: number;
    distance?: number;
    duration?: number;
    ease?: string;
    start?: string;
    buttonStart?: string;
    // delayAttribute?: string;
    stagger?: boolean;
    staggerAmount?: number;
    randomize?: boolean;
    randomFactor?: number;
}

export default function RevealOnScroll({
    selector = '.reveal',
    // defaultDelay = 0,
    distance = 60,
    duration = 1.4,
    ease = 'expo.out',
    start = 'top 90%',
    buttonStart = 'top 95%',
    // delayAttribute = 'data-reveal-delay',
    stagger = true,
    staggerAmount = 0.15,
    randomize = false,
    randomFactor = 0.2
}: RevealOnScrollProps = {}) {
    const initialized = useRef<boolean>(false);
    const animationsRef = useRef<gsap.core.Tween[]>([]);
    const triggersRef = useRef<ScrollTrigger[]>([]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const handleRefresh = () => ScrollTrigger.refresh();
        window.addEventListener('load', handleRefresh);
        document.fonts?.ready.then(handleRefresh);
        document.querySelectorAll('img').forEach(img => {
            if (!img.complete) img.addEventListener('load', handleRefresh);
        });
        return () => {
            window.removeEventListener('load', handleRefresh);
            document.querySelectorAll('img').forEach(img => {
                if (!img.complete) img.removeEventListener('load', handleRefresh);
            });
        };
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
            gsap.set(el as HTMLElement, {
                y: distance,
                opacity: 0,
                willChange: 'transform, opacity'
            });
        });
    }, [selector, distance]);

    useEffect(() => {
        if (typeof window === 'undefined' || initialized.current) return;

        const ctx = gsap.context(() => {
            const elements = document.querySelectorAll<HTMLElement>(selector);
            if (elements.length === 0) return;

            elements.forEach((element) => {
                const isButton =
                    element.tagName.toLowerCase() === 'button' ||
                    element.classList.contains('btn') ||
                    !!element.querySelector('button');

                // const customDelay = element.getAttribute(delayAttribute);
                // const baseDelay = customDelay ? parseFloat(customDelay) : defaultDelay;
                // const randomDelay = randomize
                //     ? baseDelay + (Math.random() - 0.5) * randomFactor * duration
                //     : baseDelay;

                const triggerStart = isButton ? buttonStart : start;

                const tween = gsap.to(element, {
                    y: 0,
                    opacity: 1,
                    duration,
                    ease,
                    // delay: randomDelay,
                    scrollTrigger: {
                        trigger: element,
                        start: triggerStart,
                        toggleActions: 'play none none none',
                        once: true,
                        invalidateOnRefresh: true
                    }
                });

                animationsRef.current.push(tween);
            });

            if (stagger) {
                const sections = new Set<Element>();
                elements.forEach(el => {
                    const sec = el.closest('section') ||
                        el.closest('.container') ||
                        el.closest('[id]');
                    if (sec) sections.add(sec);
                });

                sections.forEach(section => {
                    const lists = Array.from(section.querySelectorAll<HTMLElement>('ul, ol'))
                        .filter(list => list.querySelectorAll(selector).length > 0);

                    lists.forEach(list => {
                        const items = Array.from(list.querySelectorAll<HTMLElement>(selector));
                        if (items.length < 2) return;

                        const tween = gsap.to(items, {
                            y: 0,
                            opacity: 1,
                            duration,
                            ease,
                            stagger: staggerAmount,
                            scrollTrigger: {
                                trigger: list,
                                start,
                                toggleActions: 'play none none none',
                                once: true,
                                invalidateOnRefresh: true
                            }
                        });

                        animationsRef.current.push(tween);
                    });
                });
            }
        });

        initialized.current = true;
        ScrollTrigger.refresh();

        return () => {
            ctx.revert();
            animationsRef.current.forEach(tween => tween.kill());
            triggersRef.current.forEach(trigger => trigger.kill());
            animationsRef.current = [];
            triggersRef.current = [];
        };
    }, [
        selector,
        // defaultDelay,
        distance,
        duration,
        ease,
        start,
        buttonStart,
        // delayAttribute,
        stagger,
        staggerAmount,
        randomize,
        randomFactor
    ]);

    return null;
}
