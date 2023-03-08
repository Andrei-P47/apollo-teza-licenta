import SuperHotDrops from "../../constants/sellNFT";
// import { Button } from '../index'
import { useMediaQuery } from "react-responsive";
import { useCallback, useState } from "react";

const SuperHotDrop = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

  function cards(item) {
    return (
      <div className="flex flex-col items-start p-2.5 gap-2.5 bg-white rounded-lg">
        <img
          src={item.image}
          height={262}
          width={isBigScreen ? 265 : 307}
          alt={item.image}
        />
        <div className="flex flex-col items-start text-black w-full">
          <div className="font-bold text-lg leading-[34px] -tracking-[.02em] text-[#242323]">
            {item.title}
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row flex-none gap-1.5">
              <img src="/ETH.svg" width={21} height={21} alt="eth value" />
              {/*<Eth width={21} height={21} />*/}
              <div className="flex-none font-medium text-[12px] leading-[15px] -tracking-[.02em] text-[#6AD38F]">
                {item.price}
              </div>
            </div>
            <div className="font-normal text-[12px] leading-[15px] -tracking-[.02em] text-[#989898]">
              {item.order}
            </div>
          </div>
        </div>
        <div className="border-t border-t-[#EDECEC] w-full h-px" />
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col items-start bg-[#BBA5FF]/[.4] rounded-large">
            <div className="flex flex-row items-start p-1 gap-2.5">
              <div className="font-normal text-[12px] leading-[15px] -tracking-[.02em] text-secondary-main">
                {item.initialTime}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start p-1 gap-2.5">
            <div className="font-bold text-[12px] leading-[15px] -tracking-[.02em] text-secondary-main cursor-pointer">
              Place a bid
            </div>
          </div>
        </div>
      </div>
    );
  }

  const [category, setCategory] = useState("All");

  const allCategory = [];
  const array = [];

  const handleSelect = useCallback((name) => {
    setCategory(name);
  }, []);
  SuperHotDrops.map((item) => {
    allCategory.push(item.category);
  });
  SuperHotDrops.filter((item) => {
    if (category === "All") {
      array.push(item);
    }
    if (item.category === category) {
      array.push(item);
    }
  });
  const uniqueCategory = allCategory
    .sort()
    .filter((item, index, array) => array.indexOf(item) === index);

  return (
    <div className="container mx-auto px-6 xl:px-0 mb-6" id="idDrop">
      <div className="flex flex-col justify-center items-start gap-2 md:gap-[34px] mt-[81px] md:mt-[95px]">
        <div className="font-bold text-32px md:text-5xl leading-14.5 -tracking-[.02em] text-white">
          Super Hot Drop
        </div>
        <div className="flex flex-col items-start gap-4.25 md:gap-[47px] w-full">
          <div className="flex flex-row items-start gap-5.5 w-full md:w-auto overflow-auto">
            <div
              onClick={() => handleSelect("All")}
              className={`${
                category === "All" ? "btn-gradient" : " bg-[#39324d] "
              } cursor-pointer flex flex-row mx-auto w-full md:w-auto justify-center items-center py-4 px-8 gap-2.5 rounded-large`}
            >
              <div className="font-normal text-4 leading-4.75 text-white whitespace-pre">
                All
              </div>
            </div>
            {uniqueCategory.map((item) => {
              return (
                <>
                  <div
                    onClick={() => handleSelect(item)}
                    className={`${
                      category === item ? "btn-gradient" : "bg-[#39324d]"
                    } cursor-pointer flex flex-row mx-auto w-full md:w-auto justify-center items-center py-4 px-8 gap-2.5 rounded-large`}
                  >
                    <div className="font-normal text-4 leading-4.75 text-white whitespace-pre">
                      {item}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center gap-6 md:gap-5 w-auto">
            <div className="flex flex-wrap justify-around md:justify-evenly lg:justify-start gap-5 items-start text-white">
              {array.map((item, index) => {
                return cards(item);
              })}
            </div>
          </div>
          {/*{array.length >= 5 && <Button text="View More" />}*/}
        </div>
      </div>
    </div>
  );
};

export default SuperHotDrop;
