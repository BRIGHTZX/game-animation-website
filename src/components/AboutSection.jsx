import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import TextPlugin from "gsap/TextPlugin";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

function AboutSection() {
  useGSAP(() => {
    const lineSplit = SplitText.create("#about-header-line", {
      type: "lines",
      linesClass: "line",
    });

    const wordSplit = SplitText.create("#about-header-word", {
      type: "words",
      wordsClass: "word",
    });

    gsap.set("#about-header-line", {
      perspective: 800,
      scale: 1,
      opacity: 1,
    });

    gsap.set("#about-header-word", {
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
      duration: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#about-header-line",
        start: "top 90%",
        end: "bottom 55%",
        scrub: true,
        onEnterE: () => {
          gsap.to(lineSplit.lines, {
            x: -500,
            y: -200,
            duration: 1,
            ease: "power1.out",
          });
        },
      },
    }); // เริ่มซ้อนกับท้าย

    // ✅ Animate wordSplit (บรรทัดสอง) — ทีละคำ แบบเรียง
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-header-word",
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
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
      stagger: 0.3,
      duration: 2,
      ease: "power1.out",
    });
  }, []);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: true,
        pin: true,
        pinSpacing: true,
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
      },
    });
  });

  useGSAP(() => {
    gsap.set("#stones", {
      scale: 1,
    });

    gsap.to("#stones", {
      scale: 1.5,
    });
  });

  return (
    <div
      id="about-section"
      className="relative min-h-screen w-[100vdw] overflow-x-hidden bg-[#DFDFF2] pt-40"
    >
      <div>
        <p className="text-center font-robert-medium text-xs font-bold text-black uppercase">
          Welcome To Zentry
        </p>
        <h1
          id="about-header-line"
          className="special-font mt-10 text-center font-zentry text-[7rem] text-nowrap text-black uppercase opacity-1"
        >
          Disc<b>o</b>ver The World&apos;s
        </h1>
        <h1
          id="about-header-word"
          className="special-font mt-10 text-center font-zentry text-[7rem] leading-0.5 text-nowrap text-black uppercase opacity-1"
        >
          Largest Shared Adventure
        </h1>
      </div>

      <div className="relative mx-auto">
        <div
          id="clip"
          className="relative h-dvh w-screen border border-red-500"
        >
          <div className="about-image-clip-path absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/img/about.webp"
              alt="about-section-1"
              className="h-full w-full object-cover"
              fill
            />
          </div>
          <div
            id="stones"
            className="absolute top-1/2 left-1/2 z-20 h-full w-full -translate-x-1/2 -translate-y-1/2"
          >
            <div className="shadow-lg">
              <Image
                src="/img/stones.webp"
                alt="stones"
                className="h-full w-full object-cover"
                fill
              />
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
    </div>
  );
}

export default AboutSection;
