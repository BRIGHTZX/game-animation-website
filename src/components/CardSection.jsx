import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextLeftAnimation from "./TextLeftAnimation";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

function CardSection() {
  const [isCard2Hovered, setIsCard2Hovered] = useState(false);
  const [isCard4Hovered, setIsCard4Hovered] = useState(false);
  const [isCard6Hovered, setIsCard6Hovered] = useState(false);

  useGSAP(() => {
    if (isCard2Hovered) {
      resetText("#card-2-text");
    } else {
      transformText("#card-2-text", {
        rotateX: 15,
        rotateY: 50,
        rotateZ: -10,
        translateX: 10,
        translateY: -20,
        translateZ: 300,
        scale: 1.5,
      });
    }
  }, [isCard2Hovered]);

  useGSAP(() => {
    if (isCard4Hovered) {
      resetText("#card-4-text", {
        translateY: -200,
        scale: 1,
      });
    } else {
      transformText("#card-4-text", {
        rotateX: -30,
        rotateY: 30,
        rotateZ: -5,
        scaleY: 1,
        scale: 1.4,
      });
    }
  }, [isCard4Hovered]);

  useGSAP(() => {
    if (isCard6Hovered) {
      resetText("#card-6-text", {
        scale: 1.4,
      });
    } else {
      transformText("#card-6-text", {
        rotateX: 45,
        rotateY: -20,
        rotateZ: -7,
        translateZ: 300,
        translateX: -10,
        scaleY: 1.5,
        scale: 1.4,
      });
    }
  }, [isCard6Hovered]);

  useGSAP(() => {
    gsap.fromTo(
      "#card-1",
      { opacity: 0, rotateX: -60 },
      {
        opacity: 1,
        rotateX: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#card-1-container",
          start: "top 90%",
          end: "bottom top",
          toggleActions: "play none play reverse",
          markers: true,
        },
      },
    );

    gsap.fromTo(
      "#card-2",
      { opacity: 0, rotateX: -60 },
      {
        opacity: 1,
        rotateX: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#card-2-container",
          start: "top 90%",
          end: "bottom top",
          toggleActions: "play none play reverse",
          markers: true,
        },
      },
    );

    gsap.fromTo(
      "#card-3",
      { opacity: 0, rotateX: -60 },
      {
        opacity: 1,
        rotateX: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#card-3-container",
          start: "top 90%",
          end: "bottom top",
          toggleActions: "play none play reverse",
          markers: true,
        },
      },
    );

    gsap.fromTo(
      "#card-4",
      { opacity: 0, rotateX: -60 },
      {
        opacity: 1,
        rotateX: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#card-4-container",
          start: "top 90%",
          end: "bottom top",
          toggleActions: "play none play reverse",
          markers: true,
        },
      },
    );

    gsap.fromTo(
      "#card-5",
      { opacity: 0, rotateX: -60 },
      {
        opacity: 1,
        rotateX: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#card-5-container",
          start: "top 90%",
          end: "bottom top",
          toggleActions: "play none play reverse",
          markers: true,
        },
      },
    );

    gsap.fromTo(
      "#card-6",
      { opacity: 0, rotateX: -60 },
      {
        opacity: 1,
        rotateX: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#card-6-container",
          start: "top 90%",
          end: "bottom top",
          toggleActions: "play none play reverse",
          markers: true,
        },
      },
    );
  }, []);

  const transformText = (id, options) => {
    gsap.to(id, {
      rotateX: options?.rotateX,
      rotateY: options?.rotateY,
      rotateZ: options?.rotateZ,
      translateX: options?.translateX,
      translateY: options?.translateY,
      translateZ: options?.translateZ,
      duration: 1,
      scaleY: options?.scaleY ?? 1,
      scale: options?.scale ?? 1,
      ease: "power2.out",
    });
  };

  const resetText = (id, options) => {
    gsap.to(id, {
      rotateX: options?.rotateX ?? 0,
      rotateY: options?.rotateY ?? 0,
      rotateZ: options?.rotateZ ?? 0,
      translateZ: options?.z ?? 0,
      translateX: options?.x ?? 0,
      translateY: options?.y ?? 0,
      duration: options?.duration ?? 1,
      scaleY: options?.scaleY ?? 1,
      ease: "power2.out",
      scale: options?.scale ?? 1,
    });
  };
  return (
    <div className="w-screen overflow-x-hidden bg-black">
      <TextLeftAnimation
        textId="card-section-header-char"
        text={
          <>
            Ze<b>n</b>try At A <br /> Glan<b>c</b>e
          </>
        }
        textClass="text-blut-50"
        subTextId="card-section-sub-text"
        subText="Our Universe In a Nutshell"
        subTextClass="text-blut-50"
      />

      <div className="flex justify-center gap-10">
        <div className="flex flex-1 flex-col items-end gap-10 pt-40">
          {/* Card Left 1 */}
          <CardContainer
            containerId="card-1-container"
            containerClass="relative lg:h-[250px] xl:h-[350px] w-[65%]"
            cardId="card-1"
            cardClass="relative size-full overflow-hidden rounded-md border border-[#2D2D30]"
          >
            <div className="absolute top-4 left-4 z-30">
              <p className="font-robert-medium text-xs xl:text-sm">Products</p>
              <h1 className="special-font font-zentry text-[5rem] leading-[5rem] text-nowrap text-blue-50 xl:text-[7rem] xl:leading-[7rem]">
                4<b>+</b>
              </h1>
            </div>

            <div className="absolute top-0 left-0 z-20">
              <video
                src="img/card1.webm"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </CardContainer>

          {/* Card left 2 */}
          <CardContainer
            cardId="card-2"
            containerId="card-2-container"
            containerClass="relative h-[300px] xl:h-[400px] w-[40%] xl:w-[50%]"
            cardClass="relative size-full overflow-hidden rounded-md bg-[#EDFF66]"
            onMouseEnter={() => setIsCard2Hovered(true)}
            onMouseLeave={() => setIsCard2Hovered(false)}
          >
            <div className="absolute-center z-30">
              <h1
                id="card-2-text"
                className="special-font pointer-events-none font-zentry text-[10rem] text-nowrap text-black"
              >
                3<b>0</b>+
              </h1>
            </div>
            <p className="absolute right-4 bottom-4 font-robert-medium text-xs text-black">
              Partners
            </p>
          </CardContainer>

          {/* Card left 3 */}
          <CardContainer
            cardId="card-3"
            containerId="card-3-container"
            containerClass="relative lg:h-[650px] xl:h-[800px] w-[65%]"
            cardClass="relative size-full overflow-hidden rounded-md bg-[#5542FF]"
          >
            <div className="absolute top-4 left-4 z-30 text-black">
              <p className="font-robert-medium text-xs">Products</p>
              <h1 className="special-font font-zentry text-[5rem] leading-[5rem] text-nowrap text-black">
                140<b>M+</b>
              </h1>
            </div>

            <div className="absolute top-0 left-0 z-20">
              <video
                src="img/card3.webm"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <div className="absolute bottom-4 left-0 z-30 flex w-full justify-between">
              <BulletText
                text={
                  <>
                    Liquid Token <br />
                    70%
                  </>
                }
                color="bg-black"
              />
              <BulletText
                text={
                  <>
                    Investments <br />
                    20%
                  </>
                }
                color="bg-[#EDFF66]"
              />
              <BulletText
                text={
                  <>
                    NFT Assets
                    <br />
                    10%
                  </>
                }
                color="bg-blue-50"
              />
            </div>
          </CardContainer>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          {/* Card Right 4 */}
          <CardContainer
            cardId="card-4"
            containerId="card-4-container"
            containerClass="relative lg:h-[650px] xl:h-[800px] w-[65%]"
            onMouseEnter={() => setIsCard4Hovered(true)}
            onMouseLeave={() => setIsCard4Hovered(false)}
            cardClass="relative size-full overflow-hidden  rounded-md bg-[#4D3BE6]"
          >
            <div className="absolute top-4 left-4 z-20 text-blue-50">
              <p className="font-robert-medium text-xs text-black">Residents</p>
            </div>
            <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
              <h1
                id="card-4-text"
                className="special-font pointer-events-none font-zentry text-[12rem] text-nowrap text-black"
              >
                5<b>00</b>K+
              </h1>
            </div>

            <div className="absolute top-0 left-0 z-20 h-full w-full">
              <Image
                src="/img/card4.webp"
                className="h-full w-full object-cover"
                width={1000}
                height={1000}
                alt="card4"
              />
            </div>
          </CardContainer>

          {/* Card Right 5 */}
          <CardContainer
            cardId="card-5"
            containerId="card-5-container"
            containerClass="relative h-[300px] w-[40%]  xl:h-[400px] xl:w-[50%]"
            cardClass="relative size-full overflow-hidden rounded-md border border-[#2D2D30] bg-black"
          >
            <div className="absolute top-4 left-4">
              <h1 className="special-font pointer-events-none font-zentry text-5xl text-nowrap text-blue-50 xl:text-[5.5rem]">
                W<b>o</b>rld-Class <br />B<b>a</b>ckers
              </h1>
            </div>

            <div className="absolute right-4 bottom-4 z-20">
              <div className="flex flex-col gap-2 text-end font-robert-medium text-[10px] leading-1 text-blue-50 uppercase xl:text-xs xl:leading-1.5">
                <p>Coinbase Ventures</p>
                <p>Vsi Labs</p>
                <p>Spatan</p>
                <p>Longhash</p>
                <p>Pantera Capital</p>
                <p>Animoca Brands</p>
                <p>Defiance Capital</p>
                <p>Play Ventures</p>
                <p>Skyvision Capital</p>
                <p>Vessel Capital</p>
                <p>Arche Fund</p>
                <p>Synergis</p>
              </div>
            </div>
          </CardContainer>

          {/* Card Right 6 */}
          <CardContainer
            cardId="card-6"
            containerId="card-6-container"
            containerClass="relative h-[300px] xl:h-[400px] w-[65%] "
            cardClass="relative size-full overflow-hidden rounded-md bg-[#DFDFF2]"
            onMouseEnter={() => setIsCard6Hovered(true)}
            onMouseLeave={() => setIsCard6Hovered(false)}
          >
            <p className="absolute top-4 left-4 font-robert-medium text-xs text-black">
              Revenue generated <br />
              2024
            </p>
            <div className="absolute-center z-30">
              <h1
                id="card-6-text"
                className="special-font pointer-events-none font-zentry text-[17rem] text-nowrap text-black"
              >
                40<b>M</b>
              </h1>
            </div>
          </CardContainer>
        </div>
      </div>
    </div>
  );
}

export default CardSection;

const BulletText = ({ text, color }) => {
  return (
    <div className="flex flex-1 justify-center gap-2">
      <div className={`size-4 rounded-full ${color}`} />
      <p className="font-robert-medium text-xs text-blue-50 uppercase">
        {text}
      </p>
    </div>
  );
};

const CardContainer = ({
  containerId,
  containerClass,
  cardId,
  cardClass,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  children,
}) => {
  return (
    <div
      id={containerId}
      className={cn(containerClass)}
      style={{
        perspective: "1000px",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        id={cardId}
        className={cn(cardClass)}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
};
