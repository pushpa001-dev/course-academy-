'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
            }
        });

        // Heading Animation
        tl.from(headingRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })

        // Content Animation
        if (leftColRef.current && rightColRef.current) {
            tl.from([leftColRef.current.children, rightColRef.current.children], {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.5");
        }

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen w-full bg-[#d9d9cf] overflow-hidden flex flex-col font-oswald border-t border-black/10">
            {/* "Contact Us" Heading */}
            <div className="relative z-30 pt-4 pl-4 sm:pt-8 sm:pl-12">
                <h2 ref={headingRef} className="text-[15vw] sm:text-[12vw] font-black uppercase leading-[0.85] text-[#d22630] tracking-tighter transform scale-y-125 scale-x-90 origin-left">
                    Contact Us
                </h2>
            </div>

            {/* Main Content Container */}
            <div className="relative z-20 flex flex-1 flex-col sm:flex-row items-center justify-center -mt-10 sm:-mt-20 gap-12 sm:gap-24 px-6 sm:px-16">

                {/* Left Side: Contact Information */}
                <div ref={leftColRef} className="w-full sm:w-[35%] flex flex-col gap-8">
                    <div>
                        <h3 className="text-3xl sm:text-5xl font-bold text-[#d22630] uppercase mb-2">Email</h3>
                        <p className="text-lg sm:text-2xl text-black font-medium uppercase tracking-tight">info@lernacademy.com</p>
                    </div>
                    <div>
                        <h3 className="text-3xl sm:text-5xl font-bold text-[#d22630] uppercase mb-2">Call</h3>
                        <p className="text-lg sm:text-2xl text-black font-medium uppercase tracking-tight">+91 12345 67890</p>
                    </div>
                    <div>
                        <h3 className="text-3xl sm:text-5xl font-bold text-[#d22630] uppercase mb-2">Address</h3>
                        <p className="text-lg sm:text-2xl text-black font-medium uppercase tracking-tight">123 Learning Way, Education Park, City - 560001</p>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div ref={rightColRef} className="w-full sm:w-[45%] bg-transparent flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-xl font-bold text-[#d22630] uppercase">Name</label>
                        <input
                            type="text"
                            className="w-full bg-[#f5f5f0] border-2 border-[#d22630]/30 focus:border-[#d22630] outline-none px-4 py-3 text-lg sm:text-xl font-medium uppercase text-black transition-colors"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl font-bold text-[#d22630] uppercase">Email</label>
                        <input
                            type="email"
                            className="w-full bg-[#f5f5f0] border-2 border-[#d22630]/30 focus:border-[#d22630] outline-none px-4 py-3 text-lg sm:text-xl font-medium uppercase text-black transition-colors"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl font-bold text-[#d22630] uppercase">Message</label>
                        <textarea
                            rows={4}
                            className="w-full bg-[#f5f5f0] border-2 border-[#d22630]/30 focus:border-[#d22630] outline-none px-4 py-3 text-lg sm:text-xl font-medium uppercase text-black transition-colors resize-none"
                            placeholder="How can we help?"
                        />
                    </div>
                    <div className="mt-4">
                        <button className="w-full sm:w-auto bg-[#d22630] text-white px-12 py-4 text-2xl font-bold uppercase tracking-tight hover:bg-[#b01e26] transition-colors shadow-lg">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>

            {/* Watermark Background */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.08] select-none flex flex-col items-center justify-center whitespace-nowrap overflow-hidden">
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="text-[22vw] sm:text-[14vw] font-black uppercase text-[#d22630] -rotate-45 leading-none py-2"
                        style={{ marginLeft: i % 2 === 0 ? '-40%' : '40%' }}
                    >
                        Lern Academy Lern Academy Lern Academy
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Contact;
