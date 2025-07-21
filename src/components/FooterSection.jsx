import {
  LINKLIST_1,
  LINKLIST_2,
  LINKLIST_3,
  LINKLIST_4,
  LOGO,
} from "@/constants";
import RoundedCorners from "./RoundedCorners";
import Image from "next/image";
import FooterCardSection from "./FooterCardSection";
import { useRef } from "react";
import gsap from "gsap";

function FooterSection() {
  const sectionRef = useRef();
  const bigTextContainer = useRef();

  const handleMouseMove = ({ clientX, currentTarget }) => {
    const rect = currentTarget.getBoundingClientRect();
    const xOffset = clientX - (rect.left + rect.width) / 2;

    // ✅ เรียก transformText เพื่อให้จัดการ animation
    transformText(bigTextContainer.current, xOffset);
  };

  const transformText = (textRef, xOffset) => {
    // ----- ✅ Scale -----
    let scaleX = 1 + Math.abs(xOffset) / 350;
    scaleX = Math.min(Math.max(scaleX, 0.9), 1.2);

    let scaleY = 1 - Math.abs(xOffset) / 1000;
    scaleY = Math.min(Math.max(scaleY, 0.9), 1);

    // ----- ✅ Rotation -----
    let rotationX = xOffset / 50;
    rotationX = Math.min(Math.max(rotationX, 0), 30); // จำกัดไม่ให้หมุนเยอะเกิน

    let rotationY = xOffset / 150;

    // ----- ✅ Skew (เพิ่มความ dynamic) -----
    let skewX = xOffset / 200;
    skewX = Math.min(Math.max(skewX, -5), 5);

    // ----- ✅ Translate Z (ขยับเข้าออกนิดๆ) -----
    let translateZ = Math.abs(xOffset) / 10;
    translateZ = Math.min(translateZ, 30);

    gsap.to(textRef, {
      rotationY: rotationY,
      rotationX: rotationX,
      skewX: skewX,
      transformPerspective: 500,
      z: translateZ,
      scaleX: scaleX,
      scaleY: scaleY,
      duration: 0.6, // เร็วขึ้นให้ responsive
      ease: "power3.out",
    });
  };
  return (
    <section ref={sectionRef} onMouseMove={handleMouseMove}>
      <FooterCardSection />
      <div className="bg-[#5542FF] py-4">
        <div className="container mx-auto">
          {/* BIG TEXT SECTION */}

          <div
            ref={bigTextContainer}
            style={{
              perspective: "1000px",
            }}
          >
            <div
              style={{ transformStyle: "preserve-3d" }}
              className="text-center"
            >
              <h1 className="special-font font-zentry text-[30rem] leading-[30rem] text-black">
                ZENTR<b>Y</b>
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-5">
            <div>
              <Image src={LOGO} alt="logo" width={50} height={50} />
            </div>
            <FooterLinkSection header="EXPLORE" linkLists={LINKLIST_1} />
            <FooterLinkSection header="PRODUCTS" linkLists={LINKLIST_2} />
            <FooterLinkSection header="FOLLOW US" linkLists={LINKLIST_3} />
            <FooterLinkSection header="RESOURCES" linkLists={LINKLIST_4} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;

function FooterLinkSection({ header, linkLists }) {
  return (
    <div className="text-black">
      <h1 className="ml-4 font-robert-medium text-xs">{header}</h1>
      <ul className="mt-4">
        {linkLists.map((linkList) => (
          <li
            key={linkList}
            className="footer-link-mask w-fit px-4 py-2 font-robert-medium text-xl hover:bg-black hover:text-[#5542FF]"
          >
            {linkList}
          </li>
        ))}
      </ul>
      <RoundedCorners />
    </div>
  );
}
