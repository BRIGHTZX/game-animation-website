import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { STORY_IMAGE } from "@/constants";

import TrapezoidButton from "./TrapzoidButton";
import TextAnimation from "./TextAnimation";
import TextLeftAnimation from "./TextLeftAnimation";

gsap.registerPlugin(ScrollTrigger);

function StorySection() {
  const powerBySectionRef = useRef(null);
  const storySectionRef = useRef(null);
  const storyImgRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useGSAP(() => {
    if (!storyImgRef.current) return;
    gsap.fromTo(
      storyImgRef.current,
      {
        rotateX: -90,
        rotateY: -30,
        opacity: 0,
      },
      {
        duration: 3,
        rotateX: 0,
        rotateY: 0,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: storySectionRef.current,
          start: "20% 90%",
          end: "50% center",
          toggleActions: "play none play reverse",
        },
      },
    );
  }, []);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const rect = currentTarget.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(storyImgRef.current, {
      duration: 1,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.out",
    });
  };

  useEffect(() => {
    if (!isHovering) {
      gsap.to(storyImgRef.current, {
        duration: 1,
        rotateX: 0,
        rotateY: 0,
        transformPerspective: 500,
        ease: "power1.out",
      });
    }
  }, [isHovering]);

  useGSAP(() => {
    if (!powerBySectionRef.current) return;

    ScrollTrigger.create({
      trigger: powerBySectionRef.current,
      start: "15% 90%",
      end: "20% 85%",
      toggleActions: "play none play reverse",
      markers: true,
      onEnter: () => {
        gsap.to(powerBySectionRef.current, {
          duration: 0,
          backgroundColor: "#EF6",
        });
      },
      onEnterBack: () => {
        gsap.to(powerBySectionRef.current, {
          duration: 0,
          backgroundColor: "black",
        });
      },
    });
  }, []);
  return (
    <div>
      <section
        ref={storySectionRef}
        className="relative h-[110dvh] w-screen overflow-hidden bg-black"
      >
        <div className="absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="z-10 flex flex-col items-center justify-center">
            <p className="mb-10 font-robert-medium text-xs font-semibold uppercase">
              The Open IP Universe
            </p>
            <TextAnimation
              lineId="story-header-line"
              wordId="story-header-word"
              lineText={
                <>
                  The St<b>o</b>ry of
                </>
              }
              wordText={
                <>
                  A Hidden Real<b>m</b>
                </>
              }
              lineClass="text-blue-50"
              wordClass="text-blue-50"
            />
          </div>
        </div>

        <div
          style={{ perspective: "1000px" }}
          className="rounded-container absolute top-[70%] left-[45%] z-20 size-full h-[60%] w-[65%] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            ref={storyImgRef}
            style={{ transformStyle: "preserve-3d" }}
            className="story-img-mask"
          >
            <Image
              src={STORY_IMAGE}
              alt="story"
              className="size-full object-cover"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>

        <div className="absolute right-0 bottom-40 z-20 w-[25%] -translate-x-1/2">
          <p className="font-robert-medium text-blue-50">
            Where realms converge, lies Zentry and the boundless pillar.
            Discover its secrets and shape your fate amidst infinite
            opportunities.
          </p>
          <TrapezoidButton
            text="Discover Prologue"
            btnClass="mt-10 px-20 py-6 text-xl font-extrabold uppercase"
            textClass="text-black"
          />
        </div>
      </section>

      <section
        ref={powerBySectionRef}
        className="relative h-screen w-[100dvw] overflow-x-hidden bg-black"
      >
        <TextLeftAnimation
          lineId="powered-by-header-line"
          wordId="powered-by-header-word"
          lineText={
            <>
              The Univ<b>e</b>rse
            </>
          }
          wordText={<>Powered by Zent</>}
          lineClass="text-black"
          wordClass="text-black"
        />

        <div className="mt-10 px-20">
          <TrapezoidButton
            text="Discover Prologue"
            btnClass="mt-10 bg-black px-20 py-6 text-xl font-extrabold text-blue-50 uppercase"
            textClass="text-blue-50 "
          />
        </div>
      </section>
    </div>
  );
}

export default StorySection;
