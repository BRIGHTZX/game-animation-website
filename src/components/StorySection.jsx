import { useRef, useState } from "react";
import Image from "next/image";

import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { STORY_IMAGE } from "@/constants";

import TrapezoidButton from "./TrapzoidButton";
import TextAnimation from "./TextAnimation";
gsap.registerPlugin(ScrollTrigger);

function StorySection() {
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

  () => {
    if (!isHovering) {
      gsap.to(storyImgRef.current, {
        duration: 1,
        rotateX: 0,
        rotateY: 0,
        transformPerspective: 500,
        ease: "power1.out",
      });
    }
  },
    [isHovering];

  return (
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
          Where realms converge, lies Zentry and the boundless pillar. Discover
          its secrets and shape your fate amidst infinite opportunities.
        </p>
        <TrapezoidButton
          text="Discover Prologue"
          btnClass="mt-10 px-20 py-6 text-xl font-extrabold uppercase"
          textClass="text-black"
        />
      </div>
    </section>
  );
}

export default StorySection;
