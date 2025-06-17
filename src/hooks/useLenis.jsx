"use client";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

export default function useLenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      autoRaf: true,
    });
    // 👇 ทำให้ GSAP Sync กับ Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 👇 บอก GSAP ให้ใช้ Lenis เป็น scroller
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return value !== undefined ? lenis.scrollTo(value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => {
      // Lenis ไม่มี update method ดังนั้นเราสามารถ raf ใหม่แทนได้
      requestAnimationFrame((time) => lenis.raf(time));
    });

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.removeEventListener("refresh", () => lenis.update());
    };
  }, []);
}
