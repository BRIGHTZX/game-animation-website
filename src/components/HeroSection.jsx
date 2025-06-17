"use client";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import TrapezoidButton from "./TrapzoidButton";
import VideoPreview from "./VideoPreview";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin);

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [isCompletedChangeVideo, setIsCompletedChangeVideo] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const upCommingIndex = (currentIndex % totalVideos) + 1;

  const getVideoSrc = (index) => {
    return `/videos/hero-${index}.mp4`;
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const handleMiniVideoClick = () => {
    if (!isCompletedChangeVideo) return;

    setHasClicked(true);
    setCurrentIndex(upCommingIndex);
    setIsCompletedChangeVideo(false);
    handleChangeText();
    handleChangeTextBg();
  };

  const handleChangeText = () => {
    const prevIndex = upCommingIndex === 1 ? 4 : upCommingIndex - 1;
    console.log(prevIndex, upCommingIndex);
    gsap.to(`#text-content-${prevIndex}`, {
      x: 100,
      y: 100,
      rotate: -5,
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.set(`#text-content-${prevIndex}`, {
          display: "none",
        });

        gsap.set(`#text-content-${upCommingIndex}`, {
          display: "block",
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
        });

        const split = SplitText.create(`#text-content-${upCommingIndex}`, {
          type: "chars",
          charsClass: "char",
        });

        // ทำ animation แยกต่างหาก
        gsap.from(split.chars, {
          x: -100,
          autoAlpha: 0,
          stagger: 0.04,
        });
      },
    });
  };

  const handleChangeTextBg = () => {
    const prevIndex = upCommingIndex === 1 ? 4 : upCommingIndex - 1;
    console.log(prevIndex, upCommingIndex);
    gsap.to(`#text-content-bg-${prevIndex}`, {
      x: 100,
      y: 100,
      rotate: -5,
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.set(`#text-content-bg-${prevIndex}`, {
          display: "none",
        });

        gsap.set(`#text-content-bg-${upCommingIndex}`, {
          display: "block",
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
        });

        const split = SplitText.create(`#text-content-bg-${upCommingIndex}`, {
          type: "chars",
          charsClass: "char",
        });

        // ทำ animation แยกต่างหาก
        gsap.from(split.chars, {
          x: -100,
          autoAlpha: 0,
          stagger: 0.04,
        });
      },
    });
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (hasClicked) {
        setIsCompletedChangeVideo(false);
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
          onComplete: () => setIsCompletedChangeVideo(true),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true },
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-x-hidden bg-white">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-50"
      >
        <div>
          <div className="absolute-center z-50 size-64 cursor-pointer rounded-lg">
            <VideoPreview isChangeVideo={isCompletedChangeVideo}>
              <div
                onClick={handleMiniVideoClick}
                className="size-64 origin-center opacity-0 transition-all duration-500 ease-in hover:opacity-100"
              >
                <video
                  id="current-video"
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  muted
                  loop
                  className="size-64 origin-center scale-150 object-cover object-center"
                />
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          {currentIndex === 1 && !hasClicked ? (
            <video
              src={getVideoSrc(currentIndex)}
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 size-full object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          ) : (
            <video
              src={getVideoSrc(
                currentIndex === 1 ? totalVideos : currentIndex - 1,
              )}
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 size-full object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          )}
        </div>
        <div className="absolute top-10 left-24 z-50">
          <h1 className="hero-heading special-font font-zentry! font-extrabold text-white">
            REDEFI<b>N</b>E
          </h1>

          <p>
            Enter the Metagame <br /> Unleash the Play Economy
          </p>

          <div className="mt-4">
            <TrapezoidButton text="Watch Tailer" className="bg-yellow-200" />
          </div>
        </div>

        <div className="absolute right-24 -bottom-10 z-50">
          <h1
            id="text-content-1"
            className="hero-heading special-font font-zentry! font-extrabold text-white"
          >
            REDEFI<b>N</b>E
          </h1>
          <h1
            id="text-content-2"
            className="hero-heading special-font hidden font-zentry! font-extrabold text-white"
          >
            IDE<b>N</b>TITY
          </h1>
          <h1
            id="text-content-3"
            className="hero-heading special-font hidden font-zentry! font-extrabold text-white"
          >
            G<b>A</b>MING
          </h1>
          <h1
            id="text-content-4"
            className="hero-heading special-font hidden font-zentry! font-extrabold text-white"
          >
            RE<b>A</b>LITY
          </h1>
        </div>
      </div>

      <div className="absolute right-19 -bottom-10">
        <h1
          id="text-content-bg-1"
          className="hero-heading special-font font-zentry! font-extrabold text-black"
        >
          REDEFI<b>N</b>E
        </h1>
        <h1
          id="text-content-bg-2"
          className="hero-heading special-font hidden font-zentry! font-extrabold text-black"
        >
          IDE<b>N</b>TITY
        </h1>
        <h1
          id="text-content-bg-3"
          className="hero-heading special-font hidden font-zentry! font-extrabold text-black"
        >
          G<b>A</b>MING
        </h1>
        <h1
          id="text-content-bg-4"
          className="hero-heading special-font hidden font-zentry! font-extrabold text-black"
        >
          RE<b>A</b>LITY
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
