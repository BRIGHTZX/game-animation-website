import {
  FOOTER_CARD_IMAGE_2,
  FOOTER_CARD_IMAGE_3,
  SWORDMAN,
  SWORDMAN_SUB,
} from "@/constants";
import FooterCardImage from "./FooterCardImage";
import TextAnimation from "./TextAnimation";
import TrapezoidButton from "./TrapzoidButton";

function FooterCardSection() {
  return (
    <div className="bg-[#DFDFF2] py-40">
      <div className="relative container mx-auto overflow-hidden rounded-xl bg-black py-30">
        {/* content section */}
        <div className="text-center">
          <TextAnimation
            text={
              <>
                LET&apos;S B<b>U</b>ILD THE <br /> NEW ERA OF G<b>A</b>MING
                <br /> T<b>O</b>
                GETHER.
              </>
            }
            textId="footer-card-text"
            textClass="text-[#DFDFF2]"
            subText="JOIN ZENTRY"
            subTextId="footer-card-sub-text"
            subTextClass="text-[#DFDFF2]"
          />

          <TrapezoidButton
            text="CONTACT US"
            textClass="text-black"
            btnClass="py-5 bg-[#DFDFF2] text-black mt-10"
          />
        </div>

        {/* IMAGE SECTION */}
        <FooterCardImage
          imgSrc={SWORDMAN}
          subImgSrc={SWORDMAN_SUB}
          sectionClass="top-[10%] right-[2%] z-20 h-[800px] w-[400px] "
          shapeClass="footer-card-mask-1"
          divide={800}
        />
        <FooterCardImage
          imgSrc={FOOTER_CARD_IMAGE_2}
          sectionClass="top-[0%] left-[20%] z-20 h-[250px] w-[250px] "
          shapeClass="footer-card-mask-2"
          divide={250}
        />
        <FooterCardImage
          imgSrc={FOOTER_CARD_IMAGE_3}
          sectionClass="bottom-[-10%] left-[10%] z-20 h-[250px] w-[250px] "
          shapeClass="footer-card-mask-3"
          divide={250}
        />
      </div>
    </div>
  );
}

export default FooterCardSection;
