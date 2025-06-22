import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

function TextAnimation({
  wordText,
  lineText,
  lineId,
  wordId,
  lineClass,
  wordClass,
}) {
  useGSAP(() => {
    const lineSplit = SplitText.create(`#${lineId}`, {
      type: "lines",
      linesClass: "line",
    });

    const wordSplit = SplitText.create(`#${wordId}`, {
      type: "words",
      wordsClass: "word",
    });

    gsap.set(`#${lineId}`, {
      perspective: 800,
      scale: 1,
      opacity: 1,
    });

    gsap.set(`#${wordId}`, {
      perspective: 800,
      opacity: 1,
    });

    gsap.from(lineSplit.lines, {
      x: -500,
      z: -100,
      y: 100,
      rotationX: -30,
      rotationY: -30,
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: `#${lineId}`,
        start: "top 90%",
        end: "bottom 55%",
        toggleActions: "play none play reverse",
      },
    }); // เริ่มซ้อนกับท้าย

    // ✅ Animate wordSplit (บรรทัดสอง) — ทีละคำ แบบเรียง
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#${wordId}`,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none play reverse",
      },
    });

    tl.from(wordSplit.words, {
      x: -500,
      z: -100,
      y: 100,
      rotationX: -30,
      rotationY: -30,
      autoAlpha: 0,
      scale: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
    });
  }, []);

  return (
    <div>
      <h1
        id={lineId}
        className={cn(
          "special-font mt-10 text-center font-zentry text-[7rem] text-nowrap text-black uppercase opacity-1",
          lineClass,
        )}
      >
        {lineText}
      </h1>
      <h1
        id={wordId}
        className={cn(
          "special-font mt-10 text-center font-zentry text-[7rem] leading-0.5 text-nowrap text-black uppercase opacity-1",
          wordClass,
        )}
      >
        {wordText}
      </h1>
    </div>
  );
}

export default TextAnimation;
