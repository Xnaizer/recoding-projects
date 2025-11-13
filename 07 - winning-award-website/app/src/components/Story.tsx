'use client';

import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";
import { useRef, MouseEvent } from "react";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story: React.FC = () => {
  const frameRef = useRef<HTMLImageElement | null>(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (!element) return;

    gsap.to(element, {
      duration: 0.4,
      rotateX: 0,
      rotateY: 0,
      transformPerspective: 500,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;

    gsap.to(element, {
      duration: 0.4,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power2.out",
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50 flex flex-col items-center justify-center py-16">
      <p className="font-general text-sm uppercase md:text-[10px] tracking-widest mb-3">
        The multiversal IP world
      </p>

      <div className="relative w-full flex flex-col items-center">
        <AnimatedTitle
          title="The st<b>o</b>ry of <br/> a hidden real<b>m</b>"
          containerClass="mt-5 pointer-events-none mix-blend-difference text-center relative z-10"
        />

        <div className="story-img-container mt-10">
          <div className="story-img-mask">
            <div className="story-img-content">
              <Image
                ref={frameRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                src="/img/entrance.webp"
                alt="entrance"
                width={1920}
                height={1080}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
          <RoundedCorners />
        </div>
      </div>

      <div className="mt-12 w-full flex justify-center md:justify-end md:pr-24">
        <div className="flex flex-col items-center md:items-start max-w-md text-center md:text-left">
          <p className="font-circular-web text-violet-50 leading-relaxed">
            Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.
          </p>
          <Button
            id="realm-button"
            title="discover prologue"
            containerClass="mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
