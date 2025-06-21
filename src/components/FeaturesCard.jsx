import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function FeaturesCard({
  videoSrc,
  autoPlay = false,
  videoClassName,
  title,
  description,
  textClassName,
  start,
  end,
  divided,
  transformPerspective,
}) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useGSAP(() => {
    gsap.set(cardRef.current, {
      opacity: 0,
      rotationX: "-30deg",
    });

    gsap.to(cardRef.current, {
      opacity: 1,
      rotationX: "0deg",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: start,
        end: end,
        toggleActions: "play none play reverse",
      },
    });
  }, []);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    if (isHovering) {
      const rect = currentTarget.getBoundingClientRect();

      const xOffset = clientX - (rect.left + rect.width) / 2;
      const yOffset = clientY - (rect.top + rect.height) / 2;

      gsap.to(cardRef.current, {
        rotationX: xOffset / (divided ? 130 : 100),
        rotationY: -yOffset / (divided ? 130 : 100),
        transformPerspective: transformPerspective ?? 1000,
        duration: 1,
        ease: "power1.out",
      });
    }
  };

  useEffect(() => {
    if (!isHovering) {
      gsap.to(cardRef.current, {
        x: 0,
        y: 0,
        rotationX: 0,
        perspective: 1000,
        rotationY: 0,
        duration: 1,
        ease: "power1.out",
      });
    }
  }, [isHovering]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovering(true);
        if (videoRef.current && !autoPlay) {
          videoRef.current.play();
        }
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        if (videoRef.current && !autoPlay) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      style={{
        perspective: 1000,
      }}
      className="size-full"
    >
      <div
        ref={cardRef}
        className="relative h-full w-full overflow-hidden rounded-md border border-[#333] opacity-0"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay={autoPlay}
            muted
            loop
            className={cn(
              "absolute top-0 left-0 size-full object-cover",
              videoClassName,
            )}
          />
        ) : (
          <div className="absolute inset-0 bg-[#5724FF]" />
        )}

        <div
          className={cn(
            "relative z-10 flex size-full flex-col p-5 text-blue-50",
            textClassName,
          )}
        >
          <div>
            <h1 className="special-font font-zentry text-4xl font-black uppercase md:text-6xl">
              {title}
            </h1>

            {description && (
              <p className="mt-3 max-w-64 text-xs md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesCard;
