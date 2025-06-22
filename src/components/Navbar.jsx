"use client";
import { LOGO } from "@/constants";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TrapezoidButton from "./TrapzoidButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

function Navbar() {
  const navbarRef = useRef(null);
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolling(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div
      ref={navbarRef}
      className={cn(
        "fixed z-50 py-4 transition-all duration-500",
        lastScrollY === 0 && !isScrolling
          ? "top-0 left-0 w-full"
          : lastScrollY > 0 && isScrolling
            ? "-top-1/2 left-1/2 mx-auto w-[98%] -translate-x-1/2 rounded-lg bg-black"
            : "top-4 left-1/2 mx-auto w-[98%] -translate-x-1/2 rounded-lg border border-[#2D2D30] bg-black",
      )}
    >
      <div className="mx-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-10">
              <Image
                className="h-10 w-10"
                src={LOGO}
                alt="logo"
                width={100}
                height={100}
              />
            </div>

            <TrapezoidButton text="PRODUCTS" textClass="text-black" />
            <TrapezoidButton text="WHITEPAPER" textClass="text-black" />
          </div>

          <div>
            <ul
              onMouseLeave={() =>
                setPosition((pv) => ({
                  ...pv,
                  opacity: 0,
                }))
              }
              className="w-fut relative flex items-center"
            >
              <Tab setPosition={setPosition}>Nexus</Tab>
              <Tab setPosition={setPosition}>Vault</Tab>
              <Tab setPosition={setPosition}>Prologue</Tab>
              <Tab setPosition={setPosition}>About</Tab>
              <Tab setPosition={setPosition}>Contact</Tab>

              <Cursor position={position} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

function Tab({ children, setPosition }) {
  const ref = useRef(null);
  return (
    <li
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-sm text-white uppercase transition-all duration-300 hover:text-black"
      ref={ref}
    >
      {children}
    </li>
  );
}

function Cursor({ position }) {
  const liRef = useRef(null);

  useGSAP(() => {
    const liEl = liRef.current;
    if (!liEl) return;

    gsap.to(liEl, {
      width: position.width,
      left: position.left,
      opacity: position.opacity,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [position]);
  return (
    <li ref={liRef} className="absolute z-0 h-8 w-26 rounded-full bg-white" />
  );
}
