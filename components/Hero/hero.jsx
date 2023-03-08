import Image from "next/image";
import Link from "next/link";

import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const icones = [
    {
      src: "/coinabase.svg",
      alt: "coinabase",
    },
    {
      src: "/dropbox.svg",
      alt: "Marketplace",
    },
    {
      src: "/slack.svg",
      alt: "slack.",
    },
    {
      src: "/spotify.svg",
      alt: "spotify",
    },
    {
      src: "/webflow.svg",
      alt: "webflow",
    },
  ];

  const lg = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <div className="container mx-auto px-6 xl:px-0 px-[24px] md:px-[40px] lg:px-[60px] pt-16 md:pt-[120px]">
      <div className="absolute md:w-[555px] h-[555px] -left-[87px] -top-[41px] ellipse-header -z-10 flex justify-between z-10" />
      <div className="flex flex-col 2xl:flex-row justify-between">
        <div className="flex flex-col font-extrabold text-[41px] leading-[40px] md:text-[94px] lg:text-[70px] xl:text-[94px] md:leading-[90px] lg:leading-[70px] xl:leading-[90px]">
          <div className="z-10">
            <div className="-tracking-[2px]">Create Your</div>
            <div className="flex flex-row whitespace-pre">
              <div className="-tracking-[2px]">Own&nbsp;</div>
              <div className="color-title -tracking-[2px]">NFT Dream</div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="-tracking-[2px] z-10">Gallery</div>
          </div>

          <div className="mt-[32px] flex flex-col md:flex-row gap-[30px]">
            <button className="cursor-pointer hidden md:flex cursor-pointer items-center justify-center w-[120px] h-[120px] btn-description gradient rounded-full font-semibold text-[16px] leading-[26px]">
              Discover NFT
            </button>
            <div className="text-[16px] leading-[26px] flex justify-center w-fit md:w-[418px] font-normal">
              The Larges NFT Marketplace. Automatic and truly unique digital
              creation. Signed and issued by the creator, made possible by
              blockchain technologi
            </div>
            <div className="cursor-pointer block md:hidden text-[16px] leading-[19px] font-semibold bg-[#1C51FE] rounded-[66px] py-[16px] w-full text-center flex justify-center">
              Discover NFT
            </div>
          </div>
        </div>
        {/*<div className="h-[440px] w-full flex justify-center">*/}
        {/*    <div className="absolute right-[63px] xs:right-[103px] lg:right-[103px] top-[530px] lg:top-[195px] z-30 w-[227.5px] h-[271.15px] lg:w-[240.73px] lg:h-[287px] 2xl:w-[388.13px] 2xl:h-[463px]">*/}
        {/*        <Image src="/image_1.png" alt="logo" layout="fill" />*/}
        {/*    </div>*/}
        {/*    <div className="absolute right-[122px] xs:right-[182px] ld:right-[182px] top-[470px] lg:top-[146px] z-20 w-[227.5px] h-[271.15px] lg:w-[240.73px] lg:h-[287px] 2xl:w-[388.13px] 2xl:h-[463px]">*/}
        {/*        <Image src="/image_2.png" alt="logo" layout="fill" />*/}
        {/*    </div>*/}
        {/*    <div className="absolute right-[20px] xs:right-[47px] lg:right-[47px] top-[580px] lg:top-[260px] z-10 w-[227.5px] h-[271.15px] lg:w-[240.73px] lg:h-[287px] 2xl:w-[388.13px] 2xl:h-[463px]">*/}
        {/*        <Image src="/image_3.png" alt="logo" layout="fill" />*/}
        {/*    </div>*/}
        {/*</div>*/}

        <div className="relative h-[440px] lg:h-auto top-[105px] lg:top-0 right-0">
          <img
            className="rounded-3xl relative z-30 mx-auto"
            src="/image_1.png"
            width={lg ? 388 : 240}
            height={lg ? 463 : 287}
            alt="/image_1.png"
          />
          <img
            className="rounded-3xl absolute -top-[30px] sm:-top-[30px] md:-top-[30px] xl:top-[-55px] sm:left-[130px] md:left-[200px] lg:left-[240px] left-0 xl:left-[-60px]"
            src={"/image_2.png"}
            width={lg ? 366 : 227}
            height={lg ? 437 : 271}
            alt={"/image_2.png"}
          />
          <img
            className="rounded-3xl absolute top-[75px] sm:top-[65px] md:top-[65px] lg:top-[90px] xl:top-[115px] right-0 sm:right-[130px] md:right-[200px] lg:right-[250px] xl:right-[-60px]"
            src={"/image_3.png"}
            width={lg ? 341 : 211}
            height={lg ? 407 : 252}
            alt={"/image_3.png"}
          />
        </div>
      </div>
      <div className="flex flex-row gap-[29px] pt-24 md:pt-[69px]">
        <div className="flex flex-col gap-[8px]">
          <div className="text-[16px] leading-[19px]">Artwork</div>
          <div className="font-bold text-[28px] leading-[34px]">25.1k</div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-[16px] leading-[19px]">Artist</div>
          <div className="font-bold text-[28px] leading-[34px]">15.6k</div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-[16px] leading-[19px]">Aucition</div>
          <div className="font-bold text-[28px] leading-[34px]">10.2k</div>
        </div>
      </div>
      <div className="pt-[32px] flex flex-wrap md:flex-row md:justify-between justify-center items-center md:py-6 gap-4 md:gap-[48px]">
        {icones.map(({ src, alt }, index) => {
          return (
            <div className="md:pt-[24px]" key={index}>
              <Image
                className="md:block"
                src={src}
                alt={alt}
                width={140}
                height={48}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
