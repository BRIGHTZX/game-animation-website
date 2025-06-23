import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import TrapezoidButton from "./TrapzoidButton";
import ImagePreview from "./ImagePreview";

gsap.registerPlugin(SplitText, ScrollTrigger);
function WhoWeAreSection() {
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const container3Ref = useRef(null);
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      textContainerRef.current,
      {
        rotateX: -30,
        rotateY: -80,
      },
      {
        rotateX: 0,
        rotateY: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% 90%",
          end: "center 85%",
          toggleActions: "play none play reverse",
        },
      },
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "20% 90%",
        end: "center 85%",
        toggleActions: "play none play reverse",
      },
      onReverseComplete: () => {
        gsap.to(container1Ref.current, {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
        });
        gsap.to(container2Ref.current, {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
        });
        gsap.to(container3Ref.current, {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
        });
      },
      onComplete: () => {
        gsap.to(container1Ref.current, {
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        });
        gsap.to(container2Ref.current, {
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        });
        gsap.to(container3Ref.current, {
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        });
      },
    });
    const text = new SplitText(textRef.current, {
      type: "words",
    });
    tl.fromTo(
      text.words,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.1,
        ease: "power2.inOut",
        stagger: 0.05,
      },
    );
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative h-[160dvh] w-screen overflow-x-hidden bg-[#DFDFF2]"
    >
      <div
        style={{
          perspective: "1000px",
        }}
        className="size-full overflow-x-hidden"
      >
        <div
          ref={textContainerRef}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="size-full overflow-x-hidden"
        >
          <div className="absolute-center flex flex-col items-center justify-center">
            <p className="font-robert-medium text-xs text-black">WHO WE ARE</p>
            <div className="relative mt-10">
              <div
                ref={textRef}
                className="special-font flex flex-col items-center text-center font-zentry text-[6rem] leading-[8rem] text-nowrap text-black"
              >
                <div>
                  We&apos;re B<b>uilding</b>
                </div>
                <div className="relative flex items-center justify-between gap-4">
                  A NEW
                  <ImagePreview
                    containerRef={container1Ref}
                    imgSrc="/img/about-entry-1.webp"
                    durationTime={1.2}
                  />
                  <span>
                    Realit
                    <b>Y</b>
                  </span>
                </div>
                <div>
                  That ReW<b>a</b>rds
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>
                    Play<b className="m-0 p-0">e</b>rs
                  </span>
                  <ImagePreview
                    containerRef={container2Ref}
                    imgSrc="/img/about-entry-2.webp"
                    durationTime={1}
                  />
                  <span>and</span>
                </div>
                <div>
                  E<b>m</b>Powers
                </div>
                <div>
                  Hu<b>m</b>ans & AI
                </div>
                <div className="flex items-center justify-between gap-4">
                  To
                  <ImagePreview
                    containerRef={container3Ref}
                    imgSrc="/img/about-entry-3.webp"
                    durationTime={0.9}
                  />
                  <span>
                    Thri
                    <b>v</b>e
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="mx-auto w-[60%] text-center font-robert-medium text-xl text-black">
                Zentry envisions a future where players, emerging tech, and a
                new economy unite at the convergence of gaming and AI.
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
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
