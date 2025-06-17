"use client";
import { LOGO } from "@/constants";
import Image from "next/image";
import { useRef, useState } from "react";
import TrapezoidButton from "./TrapzoidButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  return (
    <div className="fixed top-0 left-0 z-50 w-full py-4">
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

            <TrapezoidButton text="PRODUCTS" />
            <TrapezoidButton text="WHITEPAPER" />
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
