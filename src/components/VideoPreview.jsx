import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

function VideoPreview({ children, isChangeVideo }) {
  const sectionRef = useRef(null);
  const divRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const rect = currentTarget.getBoundingClientRect();

    const xOffset = clientX - (rect.left + rect.width / 2);
    const yOffset = clientY - (rect.top + rect.height / 2);

    if (isHovering) {
      gsap.to(sectionRef.current, {
        x: xOffset,
        y: yOffset,
        rotationY: xOffset / 2,
        rotationX: -yOffset / 2,
        transformPerspective: 500,
        duration: 1,
        ease: "power1.out",
      });

      gsap.to(divRef.current, {
        x: -xOffset,
        y: -yOffset,
        duration: 1,
        ease: "power1.out",
      });
    }
  };

  useEffect(() => {
    if (!isHovering) {
      gsap.to(sectionRef.current, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 1,
        ease: "power1.out",
      });

      gsap.to(divRef.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power1.out",
      });
    }
  }, [isHovering]);
  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`absolute z-50 size-full overflow-hidden rounded-lg ${
        isChangeVideo ? "hover:border-2 hover:border-black" : ""
      }`}
      style={{
        perspective: "500px",
      }}
    >
      <div
        ref={divRef}
        className="origin-center rounded-lg"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default VideoPreview;
