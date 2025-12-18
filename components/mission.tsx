'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const stripeRef = useRef(null);
    const cardsRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
            }
        });

        // Stripe Animation
        tl.from(stripeRef.current, {
            width: 0,
            duration: 1.5,
            ease: "power3.inOut"
        })

            // Heading Animation
            .from(headingRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=1")

            // Cards Animation
            .from(".mission-card", {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.5");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-[#d9d9cf] overflow-hidden flex flex-col font-oswald border-t border-black/10">
            {/* Background Stripe */}
            <div ref={stripeRef} className="absolute top-1/2 left-0 w-full h-20 sm:h-28 bg-[#c9b7ae] -translate-y-1/2 z-0 opacity-80 origin-left"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-start pt-8 sm:pt-16">
                {/* Heading */}
                <h2 ref={headingRef} className="text-[12vw] sm:text-[10vw] font-black uppercase leading-[0.85] text-[#d22630] tracking-tighter transform scale-y-125 scale-x-90 text-center mb-16 sm:mb-24">
                    Our Misssion
                </h2>

                {/* Cards Container */}
                <div ref={cardsRef} className="flex flex-col sm:flex-row gap-8 sm:gap-16 px-4 items-center sm:items-stretch">
                    {/* Card 1 */}
                    <div className="mission-card bg-[#f5f5f0] p-6 sm:p-10 w-[85vw] sm:w-[28vw] flex flex-col shadow-lg relative min-h-[45vh] sm:min-h-[50vh]">
                        <h3 className="text-3xl sm:text-5xl font-bold text-[#d22630] uppercase mb-4 sm:mb-6">Low cost</h3>
                        <p className="text-sm sm:text-lg text-black uppercase font-medium leading-tight">
                            WE TEND TO PROVIDE LOW COST KNOWLEDGE TO ALL THE STUDENTS.
                        </p>
                        <div className="mt-auto self-end">
                            <button className="bg-[#d22630] text-white px-6 sm:px-10 py-1 sm:py-2 text-sm sm:text-xl font-bold uppercase tracking-tight hover:bg-black transition-colors">
                                BOOK
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="mission-card bg-[#f5f5f0] p-6 sm:p-10 w-[85vw] sm:w-[28vw] flex flex-col shadow-lg relative min-h-[45vh] sm:min-h-[50vh]">
                        <h3 className="text-3xl sm:text-5xl font-bold text-[#d22630] uppercase mb-4 sm:mb-6">Best Teaching</h3>
                        <p className="text-sm sm:text-lg text-black uppercase font-medium leading-tight">
                            WE PROVIDE BEST TEACHING FOR ALL THE STUDENTS AND MAKE SURE EVERY INDIVISUAL GETS HIRED.
                        </p>
                        <div className="mt-auto self-end">
                            <button className="bg-[#d22630] text-white px-6 sm:px-10 py-1 sm:py-2 text-sm sm:text-xl font-bold uppercase tracking-tight hover:bg-black transition-colors">
                                BOOK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
