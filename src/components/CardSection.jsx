import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import TextLeftAnimation from "./TextLeftAnimation";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);

function CardSection() {
  const [isCard2Hovered, setIsCard2Hovered] = useState(false);
  const [isCard4Hovered, setIsCard4Hovered] = useState(false);

  useGSAP(() => {
    if (isCard2Hovered) {
      resetText("#card-2-text");
    } else {
      transformText("#card-2-text", {
        rotateX: 15,
        rotateY: 50,
        rotateZ: -10,
        translateX: 10,
        translateY: -15,
        translateZ: 300,
      });
    }

    if (isCard4Hovered) {
      resetText("#card-4-text", {
        y: -60,
      });
    } else {
      transformText("#card-4-text", {
        rotateX: -25,
        rotateY: 50,
        rotateZ: -20,
        translateX: 40,
        translateY: 0,
        translateZ: 300,
      });
    }
  }, [isCard2Hovered, isCard4Hovered]);

  const transformText = (id, options) => {
    gsap.to(id, {
      rotateX: options?.rotateX,
      rotateY: options?.rotateY,
      rotateZ: options?.rotateZ,
      translateX: options?.translateX,
      translateY: options?.translateY,
      translateZ: options?.translateZ,
      duration: 1,
      scaleY: 0.7,
      ease: "power2.out",
    });
  };

  const resetText = (id, options) => {
    gsap.to(id, {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      translateZ: 0,
      translateX: options?.x ?? 0,
      translateY: options?.y ?? 0,
      duration: 1,
      scaleY: 1,
      ease: "power2.out",
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

      <div className="40 flex justify-center gap-10 border border-blue-500">
        <div className="flex flex-1 flex-col items-end gap-10 border border-blue-500 pt-40">
          {/* Card Left 1 */}
          <div className="relative h-[250px] w-[65%] overflow-hidden rounded-md border border-[#2D2D30]">
            <div className="absolute top-4 left-4 z-30">
              <p className="font-robert-medium text-xs">Products</p>
              <h1 className="special-font font-zentry text-[5rem] leading-[5rem] text-nowrap text-blue-50">
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
          </div>

          {/* Card left 2 */}
          <div
            id="card-2"
            style={{
              perspective: "1000px",
            }}
            onMouseEnter={() => setIsCard2Hovered(true)}
            onMouseLeave={() => setIsCard2Hovered(false)}
            className="relative h-[250px] w-[40%] overflow-hidden rounded-md bg-[#EDFF66]"
          >
            <div
              style={{
                transformStyle: "preserve-3d",
              }}
              className="absolute-center z-30"
            >
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
          </div>

          {/* Card left 3 */}
          <div className="relative h-[650px] w-[65%] overflow-hidden rounded-md bg-[#5542FF]">
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
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 border border-blue-500">
          {/* Card Right 4 */}
          <div
            id="card-4"
            style={{
              perspective: "1000px",
            }}
            onMouseEnter={() => setIsCard4Hovered(true)}
            onMouseLeave={() => setIsCard4Hovered(false)}
            className="relative h-[650px] w-[65%] overflow-hidden rounded-md bg-[#4D3BE6]"
          >
            <div className="absolute top-4 left-4 z-20 text-blue-50">
              <p className="font-robert-medium text-xs text-black">Residents</p>
            </div>
            <div
              style={{
                transformStyle: "preserve-3d",
              }}
              className="absolute top-10 left-1/2 z-10 -translate-x-1/2"
            >
              <h1
                id="card-4-text"
                className="special-font pointer-events-none scale-y-70 font-zentry text-[12rem] text-nowrap text-black"
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
          </div>
          <div className="h-[300px] w-[200px] bg-purple-500">a</div>
          <div className="h-[300px] w-[200px] bg-purple-500">a</div>
          <div className="h-[300px] w-[200px] bg-purple-500">a</div>
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
