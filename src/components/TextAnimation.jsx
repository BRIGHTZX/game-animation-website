import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import TextPlugin from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

function TextAnimation({
  textId,
  text,
  textClass,
  subTextId,
  subText,
  subTextClass,
  start,
  end,
  delay,
}) {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      textContainerRef.current,
      {
        x: -200,
        rotateX: -30,
        rotateY: -80,
      },
      {
        x: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 1.5,
        delay: delay ?? 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: start ?? "20% 80%",
          end: end ?? "bottom top",
          toggleActions: "play none play reverse",
        },
      },
    );

    const subTextSplit = SplitText.create(`#${subTextId}`, {
      type: "words",
    });

    gsap.from(subTextSplit.words, {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.3,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none play reverse",
      },
    });

    const wordSplit = SplitText.create(`#${textId}`, {
      type: "words",
      wordsClass: "word",
    });

    gsap.set(`#${textId}`, {
      perspective: 800,
      opacity: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none play reverse",
      },
    });

    tl.fromTo(
      wordSplit.words,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        delay: 0.3,
        opacity: 1,
        stagger: 0.05,
        duration: 0.1,
        ease: "power1.out",
      },
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ perspective: "1000px" }}
    >
      {subText && (
        <p
          id={subTextId}
          className={cn(
            "text-center font-robert-medium text-[0.7rem] font-bold text-black uppercase",
            subTextClass,
          )}
        >
          {subText}
        </p>
      )}
      <div ref={textContainerRef} style={{ transformStyle: "preserve-3d" }}>
        <div
          id={textId}
          className={cn(
            "special-font mt-10 text-center font-zentry text-[6rem] leading-[6rem] text-nowrap text-black uppercase opacity-1",
            textClass,
          )}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

export default TextAnimation;
