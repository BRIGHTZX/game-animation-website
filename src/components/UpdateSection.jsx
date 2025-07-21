import Image from "next/image";
import TextRightAnimation from "./TextRightAnimation";
import TrapezoidButton from "./TrapzoidButton";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function UpdateSection() {
  return (
    <section className="w-full bg-[#DFDFF2] py-40">
      <div className="container mx-auto">
        <div className="flex gap-8">
          {/* ✅ Sticky Left */}
          <div className="w-1/2">
            <div className="sticky top-24">
              <TextRightAnimation
                textId="update-section-header-char"
                text={
                  <>
                    LAT<b>E</b>ST
                    <br /> <b>U</b>PDATES
                  </>
                }
                textClass="text-black"
                YPosition={0}
                XPosition={0}
              />
              <div className="mt-10 w-[400px]">
                <p className="text-black xl:text-lg">
                  Stay updated with the latest news, events, and updates in our
                  ecosystem.
                </p>
              </div>
              <div className="mt-10">
                <TrapezoidButton
                  text="READ ALL NEWS"
                  btnClass="bg-black py-6 w-[15rem]"
                  textClass="text-white"
                />
              </div>
            </div>
          </div>

          {/* ✅ Content Right */}
          <div className="w-1/2 space-y-20">
            <UpdateCardImage
              imgSrc="/img/gallery-2.webp"
              date="09.05.2024"
              text="Nexus: Zentry's Metagame Portal Bridging Human & AI in the Global Play Economy"
            />
            <UpdateCardImage
              imgSrc="/img/gallery-3.webp"
              date="09.05.2024"
              text="Zentry Whitepapaer: The Blueprint to the metagame"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateSection;

function UpdateCardImage({ imgSrc, date, text }) {
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // ✅ Mouse Tilt (เหมือนเดิม)
  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const rect = currentTarget.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * 10;
    const rotateY = ((xPos - centerX) / centerX) * -10;

    if (isHovering) {
      gsap.to(sectionRef.current, {
        rotateX,
        rotateY,
        duration: 1,
        ease: "power1.out",
      });
    }
  };

  useEffect(() => {
    if (!isHovering) {
      gsap.to(sectionRef.current, {
        rotationX: 0,
        rotationY: 0,
        perspective: 1000,
        duration: 1,
        ease: "power1.out",
      });
    }
  }, [isHovering]);

  // ✅ Parallax เฉพาะ Image
  useEffect(() => {
    if (!imageRef.current || !sectionRef.current) return;

    gsap.to(imageRef.current, {
      y: -20, // เลื่อนขึ้น 50px ตอน scroll
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "center center",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div ref={sectionRef}>
      <div
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        className="relative h-[400px] w-full overflow-hidden rounded-md border-2 border-black"
      >
        {/* ✅ ภาพใหญ่กว่ากรอบ + Parallax */}
        <Image
          ref={imageRef}
          src={imgSrc}
          alt="update-card-image"
          width={1000}
          height={1000}
          className="image h-full w-full scale-115 object-top" // ✅ ทำให้ใหญ่กว่ากรอบ
        />
      </div>

      <div className="mt-8 flex gap-10">
        <p className="font-robert-medium text-xs text-black">{date}</p>
        <div className="w-1/2 text-black">
          <h1 className="font-robert-medium text-xl">{text}</h1>
        </div>
      </div>
    </div>
  );
}
