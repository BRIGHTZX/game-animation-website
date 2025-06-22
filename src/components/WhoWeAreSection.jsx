import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import TrapezoidButton from "./TrapzoidButton";

gsap.registerPlugin(SplitText, ScrollTrigger);
function WhoWeAreSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "20% 90%",
        end: "center 85%",
        toggleActions: "play none play reverse",
      },
    });
    const text = new SplitText(textRef.current, {
      type: "words",
    });
    tl.fromTo(
      text.words,
      {
        x: -500,
        y: -200,
        z: -100,
        rotateX: -60,
        rotateY: 60,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        z: 0,
        rotateX: 0,
        rotateY: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.01,
        onComplete: () => {
          gsap.to("#box-1", {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to("#box-2", {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to("#box-3", {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      },
    );
  }, []);
  useGSAP(() => {
    gsap.fromTo(
      ".box-show-image-1",
      {
        scale: 0.8,
      },
      {
        ease: "power2.inOut",
        duration: 1,
        scale: 1.2,
        yoyo: true,
        repeat: -1,
      },
    );
    gsap.fromTo(
      ".box-show-image-2",
      {
        scale: 0.8,
      },
      {
        ease: "power2.inOut",
        delay: 0.5,
        duration: 1,
        scale: 1.2,
        yoyo: true,
        repeat: -1,
      },
    );
    gsap.fromTo(
      ".box-show-image-3",
      {
        scale: 0.8,
      },
      {
        ease: "power2.inOut",
        delay: 1,
        duration: 1,
        scale: 1.2,
        yoyo: true,
        repeat: -1,
      },
    );
  }, []);
  return (
    <section
      ref={sectionRef}
      style={{
        perspective: "1000px",
      }}
      className="relative h-[100dvh] w-screen overflow-x-hidden bg-[#DFDFF2]"
    >
      <div
        style={{
          transformStyle: "preserve-3d",
        }}
        className="absolute-center flex flex-col items-center justify-center"
      >
        <p className="font-robert-medium text-xs text-black">WHO WE ARE</p>

        <div className="mt-10">
          <div
            ref={textRef}
            className="special-font flex flex-col items-center text-center font-zentry text-[7rem] leading-[8rem] text-nowrap text-black"
          >
            <p>
              We&apos;re B<b>uilding</b>
            </p>
            <p className="flex items-center gap-4">
              A NEW <span id="box-1" className="box-image box-show-image-1" />{" "}
              <span>
                Realit
                <b>Y</b>
              </span>
            </p>
            <p>
              That ReW<b>a</b>rds
            </p>
            <p className="flex items-center gap-4">
              Play<b>e</b>rs{" "}
              <span id="box-2" className="box-image box-show-image-2" />{" "}
              and{" "}
            </p>
            <p>
              E<b>m</b>Powers
            </p>
            <p>
              Hu<b>m</b>ans & AI
            </p>
            <p className="flex items-center gap-4">
              To <span id="box-3" className="box-image box-show-image-3" />{" "}
              <span>
                Thri
                <b>v</b>e
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="mx-auto w-[60%] text-center font-robert-medium text-xl text-black">
            Zentry envisions a future where players, emerging tech, and a new
            economy unite at the convergence of gaming and AI.
          </p>
        </div>

        <div className="mt-10">
          <TrapezoidButton
            text="DISCOVER WHO WE ARE"
            textClass="
          text-blue-50 text-lg text-nowrap"
            btnClass="bg-black py-6 px-32"
          />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
