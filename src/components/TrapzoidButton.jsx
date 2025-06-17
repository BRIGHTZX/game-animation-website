"use client";
import gsap from "gsap";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";

function TrapezoidButton({ text, className }) {
  const textRef = useRef(null);

  useGSAP(() => {
    const textEl = textRef.current;
    const handleEnter = () => {
      gsap.fromTo(
        textEl,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
      );
    };

    const handleLeave = () => {
      gsap.fromTo(
        textEl,
        {
          y: "-100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
      );
    };

    const parent = textEl?.parentElement;
    parent.addEventListener("mouseenter", handleEnter);
    parent.addEventListener("mouseleave", handleLeave);

    return () => {
      parent.removeEventListener("mouseenter", handleEnter);
      parent.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <button
      className={cn(
        "relative h-7 w-30 overflow-hidden rounded-full bg-white",
        className,
      )}
    >
      <span
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black"
      >
        {text}
      </span>
    </button>
  );
}

export default TrapezoidButton;
