'use client';
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CurvyLine1 = () => {
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
        height="603"
        viewBox="0 0 1440 603"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full absolute left-0 bottom-0 overflow-visible"
      >
        <path
          d="M1595.5 60L1266.31 41.0743C1123.87 32.8852 995.364 126.149 958.997 264.112L951.35 293.121C886.252 540.079 558.62 593.084 412.123 383.884V383.884C287.365 205.727 17.9797 211.909 -93.5791 398.615L-216 603.5"
          stroke="#D0EA2A"
          strokeWidth="80"
        />
      </svg>
    </div>
  )
}

export default CurvyLine1