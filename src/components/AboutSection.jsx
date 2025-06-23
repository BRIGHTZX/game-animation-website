import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import TextPlugin from "gsap/TextPlugin";
import Image from "next/image";
import RoundedCorners from "./RoundedCorners";
import { useRef, useState } from "react";
import TextAnimation from "./TextAnimation";

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

function AboutSection() {
  const imageSectionRef = useRef(null);
  const clipRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: true,
        pin: true,
        pinSpacing: true,
        onEnter: () => {
          setIsAnimate(true);
        },
      },
    });

    clipAnimation.set(".about-image-clip-path", {
      //  clip-path: polygon(4% 0, 83% 21%, 100% 73%, 0% 100%);
      clipPath: "polygon(0 0, 100% 3%, 100% 97%, 0 100%)",
      width: "500px",
      height: "800px",
      borderRadius: "0",
    });

    clipAnimation.to(".about-image-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      onUpdate: () => {
        gsap.to("#about-section", {
          backgroundColor: "#DFDFF2",
        });
      },
      onComplete: () => {
        gsap.to("#about-section", {
          backgroundColor: "#000",
        });
        setIsAnimate(true);
      },
      onReverseComplete: () => {
        setIsAnimate(false);
      },
    });

    gsap.set("#stones", {
      scale: 0.5,
    });

    gsap.to("#stones", {
      scale: 1.35,
      duration: 1,
      ease: "power1.out",
    });
  });

  // HOVER ANIMATION
  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    if (isAnimate) {
      return gsap.to(clipRef.current, {
        rotationY: 0,
        rotationX: 0,
      });
    }
    const rect = currentTarget.getBoundingClientRect();

    const xOffset = clientX - (rect.left + rect.width / 2);
    const yOffset = clientY - (rect.top + rect.height / 2);

    if (isHovering) {
      gsap.to(clipRef.current, {
        rotationY: xOffset / 150,
        rotationX: -yOffset / 150,
        transformPerspective: 500,
        duration: 1,
        ease: "power1.out",
      });
    }
  };

  return (
    <div
      id="about-section"
      className="relative min-h-screen w-screen overflow-hidden bg-[#DFDFF2] pt-40"
    >
      <div className="mb-16">
        <p className="text-center font-robert-medium text-xs font-bold text-black uppercase">
          Welcome To Zentry
        </p>
        <TextAnimation
          lineId="about-header-line"
          wordId="about-header-word"
          wordText={
            <>
              Disc<b>o</b>ver The World&apos;s
            </>
          }
          lineText="
          Largest Shared Adventure
"
        />
      </div>

      <div
        ref={imageSectionRef}
        style={{ perspective: "1000px" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        id="clip"
        className="relative h-dvh w-screen overflow-hidden"
      >
        <div
          ref={clipRef}
          style={{ transformStyle: "preserve-3d" }}
          className="rounded-container"
        >
          <div className="about-image-clip-path absolute-center">
            <Image
              src="/img/about.webp"
              alt="about-section-1"
              className="h-full w-full object-cover"
              width={1000}
              height={1000}
            />
            <RoundedCorners />
          </div>
          <div
            id="stones"
            className="absolute top-1/2 left-1/2 z-20 h-full w-full -translate-x-1/2 -translate-y-1/2"
          >
            <div className="h-full w-full shadow-lg">
              <Image
                src="/img/stones.webp"
                alt="stones"
                className="h-full w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-black">
          <h1 className="text-center font-robert-medium text-2xl">
            The Metagame begins-your life, now an epic MMORPG
          </h1>
          <p className="text-center font-robert-regular text-xl leading-6 text-zinc-600">
            Zentry is the unified play layer driving attention and <br />
            contribution through croos-world AI gamification
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
