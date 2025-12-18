'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const linksRef = useRef(null);
    const iconsRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });

        // Heading Animation
        tl.from(headingRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)"
        })

            // Links Animation
            .from(linksRef.current.children, {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.5")

            // Icons Animation
            .from(iconsRef.current.children, {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.3");

    }, { scope: containerRef });

    return (
        <footer ref={containerRef} className="relative w-full bg-[#d9d9cf] overflow-hidden flex flex-col font-oswald border-t border-black/10 pt-16 sm:pt-24 pb-8">

            {/* Main Footer Content */}
            <div className="relative z-20 flex flex-col items-center justify-center gap-8 sm:gap-12 px-4 mb-20">
                {/* Brand Heading */}
                <h2 ref={headingRef} className="text-[12vw] sm:text-[8vw] font-black uppercase leading-none text-[#d22630] tracking-tighter transform scale-y-125 scale-x-90 text-center">
                    Lern Academy
                </h2>

                {/* Navigation Links */}
                <div ref={linksRef} className="flex flex-wrap justify-center gap-6 sm:gap-16 text-sm sm:text-xl font-bold uppercase tracking-wide text-black">
                    <a href="#" className="hover:text-[#d22630] transition-colors">Home</a>
                    <a href="#" className="hover:text-[#d22630] transition-colors">About</a>
                    <a href="#" className="hover:text-[#d22630] transition-colors">Courses</a>
                    <a href="#" className="hover:text-[#d22630] transition-colors">Contact</a>
                </div>

                {/* Social Icons (Text Placeholders for style) */}
                <div ref={iconsRef} className="flex gap-6 sm:gap-10 mt-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#d22630] rounded-full flex items-center justify-center text-[#d22630] font-bold hover:bg-[#d22630] hover:text-white transition-colors cursor-pointer">
                        FB
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#d22630] rounded-full flex items-center justify-center text-[#d22630] font-bold hover:bg-[#d22630] hover:text-white transition-colors cursor-pointer">
                        IG
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#d22630] rounded-full flex items-center justify-center text-[#d22630] font-bold hover:bg-[#d22630] hover:text-white transition-colors cursor-pointer">
                        X
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[#d22630] rounded-full flex items-center justify-center text-[#d22630] font-bold hover:bg-[#d22630] hover:text-white transition-colors cursor-pointer">
                        IN
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="relative z-30 w-full bg-[#d22630] py-4 text-center">
                <p className="text-white text-xs sm:text-sm font-medium uppercase tracking-wider">
                    © 2024 Lern Academy. All rights reserved.
                </p>
            </div>

            {/* Watermark Background */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.08] select-none flex flex-col items-center justify-center whitespace-nowrap overflow-hidden">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="text-[22vw] sm:text-[14vw] font-black uppercase text-[#d22630] -rotate-45 leading-none py-2"
                        style={{ marginLeft: i % 2 === 0 ? '-40%' : '40%' }}
                    >
                        Lern Academy
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
