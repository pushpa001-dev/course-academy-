'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Course = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const circleRef = useRef(null);

    const courses = [
        "JAVA",
        "PYTHON",
        "REACT",
        "C",
        "DBMS",
        "DATABASE",
        "NEXT JS",
        "JS"
    ];

    useGSAP(() => {
        // Heading Animation
        gsap.from(headingRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });

        // Circle Rotation Animation
        gsap.to(circleRef.current, {
            rotation: 360,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // Course Items Appearance
        gsap.from(".course-item", {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%"
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-[#d9d9cf] overflow-hidden flex flex-col font-oswald border-t border-black/10">
            {/* "Courses" Heading */}
            <div className="relative z-30 pt-4 pl-4 sm:pt-8 sm:pl-12">
                <h2 ref={headingRef} className="text-[15vw] sm:text-[12vw] font-black uppercase leading-[0.85] text-[#d22630] tracking-tighter transform scale-y-125 scale-x-90 origin-left">
                    Courses
                </h2>
            </div>

            {/* Circular Layout Container */}
            <div className="relative z-20 flex flex-1 items-center justify-end px-20 -mt-10 sm:-mt-20">
                <div ref={circleRef} className="relative w-[80vw] h-[80vw] sm:w-[38vw] sm:h-[38vw]">
                    {/* The White Ring */}
                    <div className="absolute inset-0 border-[3px] border-white rounded-full"></div>

                    {/* Courses Around the Circle */}
                    {courses.map((course, index) => {
                        const angle = (index * 360) / courses.length;
                        const radius = 50; // percentage
                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                        const y = Math.sin((angle * Math.PI) / 180) * radius;

                        return (
                            <div
                                key={course}
                                className="course-item absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
                                style={{
                                    left: `${50 + x}%`,
                                    top: `${50 + y}%`,
                                }}
                            >
                                <span className="text-[5vw] sm:text-[2.2vw] font-bold text-[#d22630] uppercase tracking-tight bg-[#d9d9cf]/80 px-2 rounded">
                                    {course}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Watermark Background */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.08] select-none flex flex-col items-center justify-center whitespace-nowrap overflow-hidden">
                {[...Array(2)].map((_, i) => (
                    <div
                        key={i}
                        className="text-[22vw] sm:text-[14vw] font-black uppercase text-[#d22630] rotate-45 leading-none py-2"
                        style={{ marginLeft: i % 2 === 0 ? '-40%' : '40%' }}
                    >
                        Lern
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Course;
