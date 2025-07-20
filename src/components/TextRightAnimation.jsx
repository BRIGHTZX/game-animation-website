import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import TextPlugin from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

function TextRightAnimation({
  textId,
  text,
  textClass,
  subTextId,
  subText,
  subTextClass,
  rotateX,
  rotateY,
  XPosition,
  YPosition,
}) {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);

  useGSAP(() => {
    gsap.from(`#${textId}`, {
      x: 200,
      rotateX: rotateX ?? 50, // ก้มลง (ค่าบวก = ก้ม)
      rotateY: rotateY ?? 50, // ก้มลง (ค่าบวก = ก้ม)
      transformOrigin: "0% 50%", // จุดหมุนขวาล่าง
      duration: 1.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "20% 80%",
        end: "bottom 40%",
        toggleActions: "play none play reverse",
      },
    });

    const subTextSplit = SplitText.create(`#${subTextId}`, {
      type: "words",
    });

    const wordSplit = SplitText.create(`#${textId}`, {
      type: "words",
    });

    gsap.set(`#${textId}`, {
      xPercent: XPosition ?? 5,
      yPercent: YPosition ?? 10,
      scale: 1,
      opacity: 1,
    });

    // ✅ Animate wordSplit (บรรทัดสอง) — ทีละคำ แบบเรียง
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "20% 80%",
        end: "bottom 40%",
        toggleActions: "play none play reverse",
      },
    });

    tl.from(wordSplit.words, {
      x: 50,
      y: 20,
      autoAlpha: 0,
      scale: 1,
      stagger: 0.08,
      duration: 0.1,
      ease: "power1.out",
    });

    tl.from(subTextSplit.words, {
      y: 10,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5,
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{ perspective: "1000px" }}
      className="relative"
    >
      {subText && (
        <p
          id={subTextId}
          className={cn(
            "absolute top-0 left-20 font-robert-medium text-[0.7rem] font-bold text-black uppercase",
            subTextClass,
          )}
        >
          {subText}
        </p>
      )}
      <div
        ref={textContainerRef}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <h1
          id={textId}
          className={cn(
            "special-font mt-10 font-zentry text-[7rem] leading-[7rem] text-nowrap text-black uppercase opacity-1",
            textClass,
          )}
        >
          {text}
        </h1>
      </div>
    </div>
  );
}

export default TextRightAnimation;
