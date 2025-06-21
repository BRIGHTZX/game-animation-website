import { STORY_IMAGE } from "@/constants";
import Image from "next/image";
import TrapezoidButton from "./TrapzoidButton";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap/all";
import TextAnimation from "./TextAnimation";

function StorySection() {
  const storyImgRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

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
  return (
    <div className="relative h-[120dvh] w-screen bg-black">
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
        className="rounded-container absolute top-[61%] left-[45%] z-20 size-full h-[60%] w-[65%] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
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
          className="mt-10 px-20 py-6 text-xl font-extrabold uppercase"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default StorySection;
