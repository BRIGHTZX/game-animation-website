import { HERO_VIDEO_1 } from "@/constants";
import TrapezoidButton from "./Button";

function HeroSection() {
  return (
    <div className="relative h-screen w-screen overflow-x-hidden bg-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO_1}
        autoPlay
        muted
        loop
      />

      <div className="absolute top-20 left-24 z-50">
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

      <div className="absolute right-24 bottom-20 z-50">
        <h1 className="hero-heading special-font font-zentry! font-extrabold text-white">
          IDE<b>N</b>TITY
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
