import Image from "next/image";
import TextRightAnimation from "./TextRightAnimation";
import TrapezoidButton from "./TrapzoidButton";

function UpdateSection() {
  return (
    <section className="w-full bg-[#DFDFF2] py-40">
      <div className="container mx-auto">
        <div className="flex gap-8">
          {/* ✅ Sticky Left */}
          <div className="w-1/2">
            <div className="sticky top-40">
              <TextRightAnimation
                textId="update-section-header-char"
                text={
                  <>
                    LAT<b>E</b>ST
                    <br /> <b>U</b>PDATES
                  </>
                }
                textClass="text-black"
                YPosition={0}
                XPosition={0}
              />
              <div className="mt-10 w-[400px]">
                <p className="text-black xl:text-lg">
                  Stay updated with the latest news, events, and updates in our
                  ecosystem.
                </p>
              </div>
              <div className="mt-10">
                <TrapezoidButton
                  text="READ ALL NEWS"
                  btnClass="bg-black py-6 w-[15rem]"
                  textClass="text-white"
                />
              </div>
            </div>
          </div>

          {/* ✅ Content Right */}
          <div className="w-1/2 space-y-20">
            <UpdateCardImage
              imgSrc="/img/gallery-2.webp"
              date="09.05.2024"
              text="Nexus: Zentry's Metagame Portal Bridging Human & AI in the Global Play Economy"
            />
            <UpdateCardImage
              imgSrc="/img/gallery-3.webp"
              date="09.05.2024"
              text="Zentry Whitepapaer: The Blueprint to the metagame"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateSection;

function UpdateCardImage({ imgSrc, date, text }) {
  return (
    <div className="w-full">
      <div className="relative h-[400px] w-full overflow-hidden rounded-md border-2 border-black">
        <Image
          src={imgSrc}
          alt="update-card-image"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-8 flex gap-10">
        <p className="font-robert-medium text-xs text-black">{date}</p>
        <div className="w-1/2 text-black">
          <h1 className="font-robert-medium text-xl">{text}</h1>
        </div>
      </div>
    </div>
  );
}
