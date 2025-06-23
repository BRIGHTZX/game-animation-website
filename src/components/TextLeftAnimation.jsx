import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

function TextLeftAnimation({ charText, charId, charClass }) {
  useGSAP(() => {
    const wordSplit = SplitText.create(`#${charId}`, {
      type: "words",
    });

    gsap.set(`#${charId}`, {
      xPercent: 5,
      yPercent: 10,
      scale: 1,
      opacity: 1,
    });

    // ✅ Animate wordSplit (บรรทัดสอง) — ทีละคำ แบบเรียง
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#${charId}`,
        start: "top 80%",
        end: "bottom 40%",
        toggleActions: "play none play reverse",
      },
    });

    tl.from(wordSplit.words, {
      x: -50,
      y: 20,
      autoAlpha: 0,
      scale: 1,
      stagger: 0.08,
      duration: 0.1,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="relative">
      <h1
        id={charId}
        className={cn(
          "special-font mt-10 font-zentry text-[7rem] leading-[7rem] text-nowrap text-black uppercase opacity-1",
          charClass,
        )}
      >
        {charText}
      </h1>
    </div>
  );
}

export default TextLeftAnimation;
