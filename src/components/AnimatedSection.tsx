"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fadeUp" | "fadeIn" | "scale" | "slideLeft" | "slideRight";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  stagger?: number;
  staggerChildren?: string;
  start?: string;
}

const animationConfigs: Record<
  AnimationType,
  { y?: number; x?: number; scale?: number; opacity: number }
> = {
  fadeUp: { y: 60, opacity: 0 },
  fadeIn: { opacity: 0 },
  scale: { scale: 0.9, opacity: 0 },
  slideLeft: { x: 80, opacity: 0 },
  slideRight: { x: -80, opacity: 0 },
};

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  stagger = 0,
  staggerChildren,
  start = "top 90%",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const config = animationConfigs[animation];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = staggerChildren ? el.querySelectorAll(staggerChildren) : [el];
    const isStagger = staggerChildren && targets.length > 1;

    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        ...config,
        duration,
        delay: isStagger ? 0 : delay,
        stagger: isStagger ? stagger : 0,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
          once: true,
        },
      });
    }, el);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 150);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [animation, delay, duration, stagger, staggerChildren, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
