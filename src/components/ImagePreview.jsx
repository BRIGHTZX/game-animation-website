import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function ImagePreview({ containerRef, imgSrc, durationTime }) {
  const [isHovering, setIsHovering] = useState(false);
  const boxRef = useRef(null);
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      {
        scale: 0.8,
      },
      {
        scale: 1.2,
        duration: durationTime,
        yoyo: true,
        repeat: -1,
        delay: 2,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 90%",
          end: "bottom 90%",
          toggleActions: "play none play reverse",
        },
      },
    );
  }, []);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const rect = currentTarget.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * 10;
    const rotateY = ((xPos - centerX) / centerX) * -10;

    gsap.to(imgRef.current, {
      duration: 1,
      rotateX,
      rotateY,
      transformPerspective: 300,
      ease: "power1.out",
    });
  };
  return (
    <div ref={containerRef} className="relative mx-4 w-fit opacity-0">
      <div
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => setIsHovering(false)}
        ref={boxRef}
        className="box-image"
      />

      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={cn(
          "absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-700",
          isHovering
            ? "pointer-events-auto size-[220px] opacity-100"
            : "pointer-events-none size-4 opacity-0",
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className="relative size-full border-2 border-black"
          style={{ transformStyle: "preserve-3d" }}
          ref={imgRef}
        >
          <Image
            src={imgSrc}
            alt="image-preview"
            className="object-cover"
            fill
            priority
            sizes="220px"
          />
        </div>
      </section>
    </div>
  );
}

export default ImagePreview;
