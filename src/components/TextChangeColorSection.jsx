import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function TextChangeColorSection() {
  const sectionRef = useRef();
  const desTextRef = useRef();

  useGSAP(
    () => {
      const texts = gsap.utils.toArray("h1[id^='text-']");
      const subTexts = gsap.utils.toArray("div[id^='subText-']");

      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "15% center",
          end: "80% center",
          scrub: true,
        },
        onUpdate: () => {
          sectionRef.current.style.backgroundColor = "black";
          desTextRef.current.style.display = "block";
        },
        onComplete: () => {
          sectionRef.current.style.backgroundColor = "#DFDFF2";
          desTextRef.current.style.display = "none";
          texts.map((t) => {
            t.style.color = "#000000";
          });
          // subTexts.map((st) => {
          //   st.style.color = "";
          // });
        },
      });

      const tlSubText = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "19.5% center",
          end: "80% center",
          scrub: true,
        },
      });

      texts.map((text) => {
        tlText
          .to(text, {
            color: "#EF6",
            duration: 0,
            ease: "power1.out",
          })
          .to(
            text,
            {
              color: "#DFDFF2",
              duration: 0,
              ease: "power1.out",
            },
            "+=0.1",
          );
      });

      subTexts.map((st) => {
        tlSubText
          .to(st, {
            color: "#EF6",
            duration: 0,
            ease: "power1.out",
          })
          .to(
            st,
            {
              color: "#DFDFF2",
              duration: 0,
              ease: "power1.out",
            },
            "+=0.1",
          );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative w-screen bg-black pt-80">
      <div className="relative container mx-auto min-h-[150vh]">
        {/* Description Text - แสดงแน่นอน */}
        <div
          ref={desTextRef}
          className="sticky top-1/2 h-fit w-fit -translate-y-1/2"
        >
          <p className="w-96 rounded bg-black/50 p-4 text-lg text-[#676666]">
            <span className="text-white">Our gaming partners</span> span Our
            gaming partners span projects, communities protocols, &
            infrastructure, accelerating expansive growth of the new gaming era
          </p>
        </div>

        {/* Partners List - เพิ่ม margin-top เพื่อให้เห็น des-text */}
        <div className="absolute top-0 right-80 leading-[5rem] xl:right-[20%]">
          <TextColor
            textId="text-1"
            subTextId="subText-1"
            text={
              <>
                O<b>U</b>R PARTNERS
              </>
            }
          />
          <TextColor
            textId="text-2"
            subTextId="subText-2"
            text={<>YZILABS</>}
            subText="BACKERS"
          />
          <TextColor
            textId="text-3"
            subTextId="subText-3"
            text={<>COINBASE VENTURES</>}
            subText="BACKERS"
          />
          <TextColor
            textId="text-4"
            subTextId="subText-4"
            text={<>PANTERA CAPITAL</>}
            subText="BACKERS"
          />
          <TextColor
            textId="text-5"
            subTextId="subText-5"
            text={<>DEFIANCE CAPITAL</>}
            subText="BACKERS"
          />
          <TextColor
            textId="text-6"
            subTextId="subText-6"
            text={<>ANIMOCA BRANDS</>}
            subText="BACKERS"
          />
          <TextColor
            textId="text-7"
            subTextId="subText-7"
            text={<>SKYVISION CAPITAL</>}
            subText="BACKERS"
          />
          <TextColor
            textId="text-8"
            subTextId="subText-8"
            text={<>PLAY VENTURE</>}
            subText="BACKERS"
          />
          <TextColor
            textId="text-9"
            subTextId="subText-9"
            text={<>VESSEL CAPITAL</>}
            subText="BACKERS"
          />
          <TextColor
            textId="text-10"
            subTextId="subText-10"
            text={<>ARCHE FUND</>}
            subText="BACKERS"
          />
          <TextColor
            textId="text-11"
            subTextId="subText-11"
            text={<>MARBLEX</>}
            subText="GAMING"
          />
          <TextColor
            textId="text-12"
            subTextId="subText-12"
            text={<>FNATIC</>}
            subText="GAMING"
          />
          <TextColor
            textId="text-13"
            subTextId="subText-13"
            text={<>XSET</>}
            subText="GAMING"
          />
          <TextColor
            textId="text-14"
            subTextId="subText-14"
            text={<>JAMBO</>}
            subText="WEB3"
          />
          <TextColor
            textId="text-15"
            subTextId="subText-15"
            text={<>AWS</>}
            subText="BRANDS"
          />
        </div>
      </div>
    </section>
  );
}

function TextColor({ textId, subTextId, text, subText }) {
  return (
    <div className="relative">
      {subText && (
        <div
          id={subTextId}
          className="absolute -top-8 -left-14 text-[#676666] xl:-top-7"
        >
          <span className="text-[9px] xl:text-[11px]">{subText}</span>
        </div>
      )}
      <h1
        id={textId}
        className="special-font my-0 py-0 font-zentry text-6xl text-[#DFDFF2] xl:text-7xl"
      >
        {text}
      </h1>
    </div>
  );
}

export default TextChangeColorSection;
