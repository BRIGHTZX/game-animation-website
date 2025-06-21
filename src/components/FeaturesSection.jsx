import {
  FEATURES_VIDEO_1,
  FEATURES_VIDEO_2,
  FEATURES_VIDEO_3,
  FEATURES_VIDEO_4,
  FEATURES_VIDEO_5,
} from "@/constants";
import FeaturesCard from "./FeaturesCard";

function FeaturesSection() {
  return (
    <section className="relative min-h-screen w-screen overflow-x-hidden bg-black py-40">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="w-[500px]">
          <h1 className="font-robert-medium text-2xl">
            Explore the Zentry Universe
          </h1>
          <p className="font-robert-regular text-xl text-[#DFDFF266]">
            Immerse yourself in an IP-rich product universe where players,
            agentic AI and blockchain lead the new economic paradigm.
          </p>
        </div>
      </div>
      {/* BENTO SECTION */}

      <div className="mt-40 px-20">
        <div className="relative mb-10 h-96 w-full rounded-md md:h-[65vh]">
          <FeaturesCard
            videoSrc={FEATURES_VIDEO_1}
            title={
              <>
                RADIA<b>N</b>T
              </>
            }
            description="The game of games app transforming moments across Web2 & Web3 titles into rewards."
            start="10% 90%"
            end="center center"
            divided={300}
            transformPerspective={3000}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-10">
          <div className="relative row-span-1 h-[80dvh] md:col-span-1 md:row-span-2">
            <FeaturesCard
              videoSrc={FEATURES_VIDEO_2}
              title={
                <>
                  ZIG<b>M</b>A
                </>
              }
              description="The NFT collection merging Zentry's IP, AI, and gaiming-pushing the boundaries of NFT innovation."
              start="10% 90%"
              end="center center"
              divided={100}
            />
          </div>

          <div className="relative row-span-1 md:col-span-1">
            <FeaturesCard
              videoSrc={FEATURES_VIDEO_3}
              title={
                <>
                  N<b>E</b>XUS
                </>
              }
              description="The metagame portal uniting humans & AI to ply, compete and earn."
              videoClassName="object-cover object-left"
              start="10% 90%"
              end="bottom 90%"
              divided={2}
              transformPerspective={700}
            />
          </div>

          <div className="relative row-span-1 md:col-span-1">
            <FeaturesCard
              videoSrc={FEATURES_VIDEO_4}
              title={
                <>
                  AZ<b>U</b>L
                </>
              }
              description="The agent of agents elevating agentic AI experiences to be more fun and productive."
              start="top 90%"
              end="center center"
              divided={2}
              transformPerspective={700}
            />
          </div>
        </div>
        <div className="mt-10 grid h-[40dvh] grid-cols-2 gap-10">
          <div className="col-span-1">
            <FeaturesCard
              title={
                <>
                  M<b>O</b>RE <br />
                  CO<b>M</b>ING <br />S<b>O</b>ON
                </>
              }
              start="10% 90%"
              end="center center"
              divided={100}
              textClassName="text-black"
            />
          </div>
          <div className="col-span-1">
            <FeaturesCard
              autoPlay={true}
              videoSrc={FEATURES_VIDEO_5}
              videoClassName="object-cover object-left"
              start="10% 90%"
              end="bottom 90%"
              divided={2}
              transformPerspective={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
