import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import TextLeftAnimation from "./TextLeftAnimation";
import TrapezoidButton from "./TrapzoidButton";

gsap.registerPlugin(ScrollTrigger);
function PoweredBySection() {
  const powerBySectionRef = useRef(null);
  useGSAP(() => {
    if (!powerBySectionRef.current) return;

    ScrollTrigger.create({
      trigger: powerBySectionRef.current,
      start: "5% 95%",
      end: "7% 90%",
      toggleActions: "play none play reverse",
      onEnter: () => {
        gsap.to(powerBySectionRef.current, {
          duration: 0.1,
          backgroundColor: "#EF6",
        });
      },
      onLeaveBack: () => {
        gsap.to(powerBySectionRef.current, {
          duration: 0.1,
          backgroundColor: "black",
        });
      },
    });

    ScrollTrigger.create({
      trigger: powerBySectionRef.current,
      start: "+=3600 bottom",
      end: "+=3600 bottom",
      toggleActions: "play none play reverse",
      onEnter: () => {
        gsap.to(powerBySectionRef.current, {
          duration: 0.1,
          backgroundColor: "#DFDFF2",
        });
      },
      onLeaveBack: () => {
        gsap.to(powerBySectionRef.current, {
          duration: 0.1,
          backgroundColor: "#EF6",
        });
      },
    });

    if (!powerBySectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: powerBySectionRef.current,
        start: "top top",
        end: "+=2500", // ระยะ scroll
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    // Step 1: line-1 grow
    tl.to("#line-1", {
      height: "100%",
      onComplete: () => {
        gsap.to("#powered-accordion-1-header", {
          opacity: 0.4,
        });
        gsap.to("#powered-accordion-1-header-text", {
          fontSize: "1rem",
        });
        gsap.to("#powered-accordion-1-content", {
          height: 0,
          opacity: 0,
          duration: 0.15,
        });
        gsap.to("#powered-accordion-2-header", {
          opacity: 1,
        });
        gsap.to("#powered-accordion-2-header-text", {
          fontSize: "1.5rem",
        });
        gsap.to("#powered-accordion-2-content", {
          height: "130px",
          opacity: 1,
          duration: 0.5,
        });
      },
    });

    tl.to("#line-2", {
      height: "100%",
      onComplete: () => {
        gsap.to("#powered-accordion-2-header", {
          opacity: 0.4,
        });
        gsap.to("#powered-accordion-2-header-text", {
          fontSize: "1rem",
        });
        gsap.to("#powered-accordion-2-content", {
          height: "0px",
          opacity: 0,
          duration: 0.15,
        });
        gsap.to("#powered-accordion-3-content", {
          height: "130px",
          opacity: 1,
          duration: 0.5,
        });
        gsap.to("#powered-accordion-3-header", {
          opacity: 1,
        });
        gsap.to("#powered-accordion-3-header-text", {
          fontSize: "1.5rem",
        });
      },
      onReverseComplete: () => {
        gsap.to("#powered-accordion-1-header", {
          opacity: 1,
        });
        gsap.to("#powered-accordion-1-header-text", {
          fontSize: "1.5rem",
        });
        gsap.to("#powered-accordion-1-content", {
          height: "130px",
          opacity: 1,
          duration: 0.5,
        });
        gsap.to("#powered-accordion-2-content", {
          height: "0px",
          opacity: 0,
          duration: 0.15,
        });
        gsap.to("#powered-accordion-2-header", {
          opacity: 0.4,
        });
        gsap.to("#powered-accordion-2-header-text", {
          fontSize: "1rem",
        });
      },
    });

    // Step 3: line-3 grow
    tl.to("#line-3", {
      height: "100%",
      onReverseComplete: () => {
        gsap.to("#powered-accordion-2-header", {
          opacity: 1,
        });
        gsap.to("#powered-accordion-2-header-text", {
          fontSize: "1.5rem",
        });
        gsap.to("#powered-accordion-2-content", {
          height: "130px",
          opacity: 1,
          duration: 0.5,
        });
        gsap.to("#powered-accordion-3-content", {
          height: "0px",
          opacity: 0,
          duration: 0.15,
        });
        gsap.to("#powered-accordion-3-header", {
          opacity: 0.4,
        });
        gsap.to("#powered-accordion-3-header-text", {
          fontSize: "1rem",
        });
      },
    });
  }, []);

  return (
    <section
      ref={powerBySectionRef}
      className="relative h-[100dvh] w-screen overflow-x-hidden bg-black"
    >
      <TextLeftAnimation
        charId="powered-by-header-char"
        charText={
          <>
            The Univ<b>e</b>rse <br />
            Powered By Z<b>e</b>nt
          </>
        }
        charClass="text-black"
      />

      <div className="mt-10 px-20">
        <TrapezoidButton
          text="Discover Prologue"
          btnClass="mt-10 bg-black px-20 py-6 text-xl font-extrabold text-blue-50 uppercase"
          textClass="text-blue-50 "
        />
      </div>

      <div className="absolute bottom-40 left-20 text-black transition-all duration-300">
        <div id="powered-accordion-1">
          <div
            id="powered-accordion-1-header"
            className="flex items-center gap-2"
          >
            <span className="font-zentry text-xs">01</span>
            <h1
              id="powered-accordion-1-header-text"
              className="font-robert-medium text-[1.5rem]"
            >
              Shaping Zentry Collectively
            </h1>
          </div>

          <div
            id="powered-accordion-1-content"
            className="flex h-[130px] w-[300px] items-center gap-4"
          >
            <div className="relative h-24 w-3 overflow-clip rounded-md bg-[#BECC52]">
              <div
                id="line-1"
                className="absolute top-0 left-0 z-10 h-0 w-full rounded-md bg-black"
              />
            </div>
            <p className="text-sm">
              Participate in governance, influence key decisions in the
              ever-growing zentry universe that is limited only by people&apos;s
              imaginations
            </p>
          </div>
        </div>

        <div id="powered-accordion-2" className="mt-10">
          <div
            id="powered-accordion-2-header"
            className="flex items-center gap-2 opacity-40"
          >
            <span className="font-zentry text-xs">02</span>
            <h1
              id="powered-accordion-2-header-text"
              className="font-robert-medium text-[1rem]"
            >
              Unlicking Economics Opportunity
            </h1>
          </div>

          <div
            id="powered-accordion-2-content"
            className="flex h-0 w-[300px] items-center gap-4 opacity-0"
          >
            <div className="relative h-24 w-3 overflow-clip rounded-md bg-[#BECC52]">
              <div
                id="line-2"
                className="absolute top-0 left-0 z-10 h-0 w-full rounded-md bg-black"
              />
            </div>
            <p className="text-sm">
              ZENT, a commodity-based currency that unlocks exclusive benefits,
              airdrops, quotas, and co-creation within and beyond Zentry
              ecosystem.
            </p>
          </div>
        </div>

        <div id="powered-accordion-3" className="mt-10">
          <div
            id="powered-accordion-3-header"
            className="flex items-center gap-2 opacity-40"
          >
            <span className="font-zentry text-xs">03</span>
            <h1
              id="powered-accordion-3-header-text"
              className="font-robert-medium text-[1rem]"
            >
              Sharing Value Accrued
            </h1>
          </div>

          <div
            id="powered-accordion-3-content"
            className="flex h-0 w-[300px] items-center gap-4 opacity-0"
          >
            <div className="relative h-24 w-3 overflow-clip rounded-md bg-[#BECC52]">
              <div
                id="line-3"
                className="absolute top-0 left-0 w-full rounded-md bg-black"
              />
            </div>
            <p className="text-sm">
              ZENT holders thrive as Zentry grows, benefiting from the expansive
              partnerships, treasury investment and economic activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PoweredBySection;
