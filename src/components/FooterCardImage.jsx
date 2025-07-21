import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";

function FooterCardImage({
  subImgSrc,
  imgSrc,
  sectionClass,
  imageClass,
  shapeClass,
  divide,
}) {
  const footerSectionRef = useRef(null);
  const footerImageRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useGSAP(() => {
    if (!footerImageRef.current) return;
    gsap.fromTo(
      footerImageRef.current,
      {
        rotateX: -90,
        rotateY: -30,
      },
      {
        duration: 3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: footerSectionRef.current,
          start: "20% 90%",
          end: "50% center",
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

    const rotateX = ((yPos - centerY) / divide) * -10;
    const rotateY = ((xPos - centerX) / divide) * 10;

    gsap.to(footerImageRef.current, {
      duration: 1,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.out",
    });
  };

  () => {
    if (!isHovering) {
      gsap.to(footerImageRef.current, {
        duration: 1,
        rotateX: 0,
        rotateY: 0,
        transformPerspective: 500,
        ease: "power1.out",
      });
    }
  },
    [isHovering];

  return (
    <div
      ref={footerSectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ perspective: "1000px" }}
      className={cn("absolute", sectionClass, "overflow-visible")}
    >
      <div style={{ transformStyle: "preserve-3d" }} ref={footerImageRef}>
        {subImgSrc && (
          <div className="absolute top-0 left-0 z-30">
            <Image
              src={subImgSrc}
              alt="story"
              className="scale-130 object-cover"
              width={1000}
              height={1000}
              priority
            />
          </div>
        )}

        {/* ✅ Main Image ที่ถูก clip-path */}
        <div
          className={cn(shapeClass, imageClass, "relative overflow-visible")}
        >
          {imgSrc && (
            <Image
              src={imgSrc}
              alt="story"
              className="size-full scale-130 object-cover"
              width={1000}
              height={1000}
              priority
            />
          )}
        </div>
      </div>
      {/* ✅ Sub Image ที่ไม่ถูก clip-path */}
    </div>
  );
}

export default FooterCardImage;
