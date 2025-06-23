import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
function CardSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const textContainerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      textContainerRef.current,
      {
        rotateX: -60,
        rotateY: -60,
        opacity: 0,
      },
      {
        rotateX: 0,
        rotateY: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 40%",
          toggleActions: "play none play reverse",
        },
      },
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play none play reverse",
      },
    });

    const wordSplit = SplitText.create(textRef.current, {
      type: "words",
    });

    tl.from(wordSplit.words, {
      x: 50,
      opacity: 0,
      duration: 0.1,
      ease: "power1.out",
      stagger: 0.05,
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-[100dvh] w-screen overflow-x-hidden bg-black"
    >
      <div className="mt-10 px-20">
        <p className="font-robert-medium text-xs text-white uppercase">
          Our Universe In a Nutshell
        </p>

        <div
          style={{
            perspective: "1000px",
          }}
        >
          <div
            ref={textContainerRef}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="special-font font-zentry text-[7rem] leading-[7rem] text-nowrap text-white uppercase"
          >
            <div ref={textRef}>
              Ze<b>n</b>try At A <br /> Glan<b>c</b>e
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
