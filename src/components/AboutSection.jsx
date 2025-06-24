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
    gsap.fromTo(
      clipRef.current,
      {
        y: 500,
        rotateX: -90,
      },
      {
        y: 0,
        rotateX: 0,
        duration: 1,
        transformPerspective: 2000,
        ease: "power1.out",
        scrollTrigger: {
          trigger: imageSectionRef.current,
          start: "20% 80%",
          end: "bottom 40%",
          toggleActions: "play none play reverse",
        },
      },
    );
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
      width: "400px",
      height: "600px",
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
      opacity: 0,
    });

    gsap.to("#stones", {
      scale: 1.3,
      opacity: 1,
      duration: 1.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#clip",
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none play reverse",
      },
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
      <div>
        <TextAnimation
          textId="about-header-word"
          text={
            <>
              Disc<b>o</b>ver The World&apos;s <br />
              Largest Shared <b>A</b>dventure
            </>
          }
          subTextId="about-sub-text"
          subText="Welcome To Zentry"
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
          <div className="about-image-clip-path absolute-center z-20">
            <Image
              src="/img/about.webp"
              alt="about-section-1"
              className="h-full w-full object-cover"
              width={1000}
              height={1000}
            />
            <RoundedCorners />
          </div>
        </div>
        <div
          id="stones"
          className="absolute top-1/2 left-1/2 z-20 h-full w-[80%] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="h-full w-full">
            <Image
              src="/img/stones.webp"
              alt="stones"
              className="h-full w-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-[-1] -translate-x-1/2 text-black">
          <h1 className="text-center font-robert-medium text-xl">
            The Metagame begins-your life, now an epic MMORPG
          </h1>
          <p className="text-center font-robert-regular text-lg leading-6 text-zinc-600">
            Zentry is the unified play layer driving attention and <br />
            contribution through croos-world AI gamification
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
