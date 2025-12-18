'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subHeadingRef = useRef<HTMLDivElement>(null);
    const watermarkRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Navbar Animation
        tl.from(navRef.current, {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })

            // Heading Animation
            .from(headingRef.current, {
                y: 100,
                opacity: 0,
                scale: 0.8,
                duration: 1.2,
                ease: "power4.out",
            }, "-=0.5")

            // Subheading Animation
            .from(subHeadingRef.current, {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

        // Watermark Parallax
        if (watermarkRef.current) {
            gsap.to(watermarkRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-[#d9d9cf] overflow-hidden flex flex-col font-oswald">
            {/* Navbar */}
            <nav ref={navRef} className="relative z-30 flex h-14 w-full items-center justify-between bg-[#d22630] px-4 sm:px-16 text-white uppercase font-bold tracking-tight">
                <div className="text-2xl w-1/4">Lern</div>
                <div className="flex gap-4 sm:gap-12 text-xs sm:text-base justify-center flex-1">
                    <a href="#" className="hover:opacity-80 transition-opacity">Home</a>
                    <a href="#" className="hover:opacity-80 transition-opacity">About</a>
                    <a href="#" className="hover:opacity-80 transition-opacity">Courses</a>
                </div>
                <div className="text-xs sm:text-base w-1/4 text-right">
                    <a href="#" className="hover:opacity-80 transition-opacity">Register</a>
                </div>
            </nav>

            {/* Main Content */}
            <div className="relative z-20 flex flex-1 flex-col items-center justify-center p-4">
                <div className="relative flex flex-col items-end">
                    <h1 ref={headingRef} className="text-[20vw] sm:text-[16vw] font-black uppercase leading-[0.8] text-[#d22630] tracking-tighter transform scale-y-125 scale-x-90 text-center">
                        Lern Academy
                    </h1>
                    <div ref={subHeadingRef} className="text-lg sm:text-3xl font-medium text-white uppercase tracking-[0.2em] transform -translate-y-2 mr-4 sm:mr-8 md:mr-12">
                        Learn With Lern
                    </div>
                </div>
            </div>

            {/* Watermark Background */}
            <div ref={watermarkRef} className="absolute inset-0 z-10 pointer-events-none opacity-[0.08] select-none flex flex-col items-center justify-center whitespace-nowrap overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="text-[22vw] sm:text-[14vw] font-black uppercase text-[#d22630] -rotate-45 leading-none py-2"
                        style={{ marginLeft: i % 2 === 0 ? '-40%' : '40%' }}
                    >
                        Lern
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
