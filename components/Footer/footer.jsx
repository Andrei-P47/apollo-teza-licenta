import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const social = [
    {
      src: "/Social icon 1.svg",
      alt: "logo",
    },
    {
      src: "/Social icon 2.svg",
      alt: "logo",
    },
    {
      src: "/Social icon 3.svg",
      alt: "logo",
    },
    {
      src: "/Social icon 4.svg",
      alt: "logo",
    },
    {
      src: "/Social icon 5.svg",
      alt: "logo",
    },
    {
      src: "/Social icon 6.svg",
      alt: "logo",
    },
  ];

  return (
    <div
      id="footer"
      className="container mx-auto px-6 xl:px-0  px-[24px] md:px-[40px] lg:px-[60px] pt-[64px] xl:pt-[120px]"
    >
      <div className="pb-[19px] text-white">
        <div className="gap-[64px] sm:gap-[125px] flex flex-col md:flex-row pb-[39px]">
          <div className="flex flex-col items-start gap-[17px]">
            <Link href="/" legacyBehavior>
              <div className="font-bold text-[50.52px] leading-[61px]">
                <span className="header-logo-gradient">Apollo</span>
                <span className="text-[#1C51FE]">NFT</span>
              </div>
            </Link>
            <div className="font-['Inter'] font-normal text-[18px] leading-[18px] text-[#999999] not-italic w-[279px]">
              This growth plan will help you reach your resolutions and achieve
              the goals you have been striving towards.
            </div>
            <div className="flex flex-row items-center gap-[24px]">
              {social.map(({ src, alt }, index) => {
                return <Image src={src} alt={alt} width={24} height={24} />;
              })}
            </div>
          </div>
          <div className="md:flex md:flex-row grid grid-cols-2 gap-[54px] md:gap-[10px] justify-between w-full">
            <div className="flex flex-col items-start">
              <div className="pb-[20px] text-white font-semibold text-[16px] leading-[19px]">
                Marketplace
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Buy Product
                </div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Sell Product
                </div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Our Creator
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="pb-[20px] text-white font-semibold text-[16px] leading-[19px]">
                Resources
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  About Us
                </div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Event
                </div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Tutorial
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="pb-[20px] text-white font-semibold text-[16px] leading-[19px]">
                Company
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Media
                </div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Blog
                </div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Pricing
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="pb-[20px] text-white font-semibold text-[16px] leading-[19px]">
                Legal
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Terms
                </div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Privacy
                </div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center pt-8 gap-8 border-t border-t-inner-border">
          <span className="text-gray-400 font-normal text-base">
            © 2077 ApolloNFT. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
