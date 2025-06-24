import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
import TextLeftAnimation from "./TextLeftAnimation";

gsap.registerPlugin(ScrollTrigger, SplitText);
function CardSection() {
  return (
    <div className="h-[100dvh] w-screen overflow-x-hidden bg-black">
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
    </div>
  );
}

export default CardSection;
