'use client';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CurvyLine2 = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const path = svgRef.current?.querySelector<SVGPathElement>('path');
    if (!path) return;
    
    const length = path.getTotalLength();
    
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: -length,
    });

    const animation = gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'power2.out',
      duration: 1.5,
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      }
    });

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, []);


    return (
        <div>
            <svg
                ref={svgRef}
                width="100%"
                height="264"
                viewBox="0 0 402 264"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full absolute left-0 bottom-0"
            >
                <path
                    d="M603 25.8507L464.344 17.8792C404.349 14.43 350.224 53.7123 334.906 111.822L331.685 124.041C304.266 228.059 166.268 250.384 104.564 162.27V162.27C52.0162 87.2307 -61.4483 89.8345 -108.437 168.475L-160 254.772"
                    stroke="#D0EA2A"
                    strokeWidth="33.6958"
                />
            </svg>
        </div>
    )
}

export default CurvyLine2