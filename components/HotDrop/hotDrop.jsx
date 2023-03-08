import Image from 'next/image';
import useWindowWidth from '../../utils/hooks/use-window-width';

const HotDrop = () => {
    const width = useWindowWidth();

    const buttons = [
        {
            link: '/',
            text: 'Hope Ape',
        },
        {
            link: '/',
            text: 'Abstract',
        },
        {
            link: '/',
            text: 'Mongkey',
        },
        {
            link: '/',
            text: 'Cars',
        },
        {
            link: '/',
            text: 'Art',
        },
    ];

    const cards = [
        {
            src: '/image 5.jpg',
            title: 'ArtCrypto',
            eth: '0.25 ETH',
            time: '3h 25m 3s',
            count: '1 of 32',
        },
        {
            src: '/image 6.jpg',
            title: 'ArtCrypto',
            eth: '0.25 ETH',
            time: '3h 25m 3s',
            count: '1 of 32',
        },
        {
            src: '/image 7.jpg',
            title: 'ArtCrypto',
            eth: '0.25 ETH',
            time: '3h 25m 3s',
            count: '1 of 32',
        },
        {
            src: '/image 8.jpg',
            title: 'ArtCrypto',
            eth: '0.25 ETH',
            time: '3h 25m 3s',
            count: '1 of 32',
        },
        {
            src: '/image 9.jpg',
            title: 'ArtCrypto',
            eth: '0.25 ETH',
            time: '3h 25m 3s',
            count: '1 of 32',
        },
        {
            src: '/image 10.jpg',
            title: 'ArtCrypto',
            eth: '0.25 ETH',
            time: '3h 25m 3s',
            count: '1 of 32',
        },
        {
            src: '/image 11.jpg',
            title: 'ArtCrypto',
            eth: '0.25 ETH',
            time: '3h 25m 3s',
            count: '1 of 32',
        },
        {
            src: '/image 12.jpg',
            title: 'ArtCrypto',
            eth: '0.25 ETH',
            time: '3h 25m 3s',
            count: '1 of 32',
        },
    ];

    return (
        <div className="px-[24px] md:px-[40px] lg:px-[60px] xl:px-[120px] pt-[81px] md:pt-[95px]">
            <div className="font-bold text-[32px] md:text-[48px] leading-[58px] -tracking-[0.02em] pb-[32px]">
                Super Hot Drop
            </div>
            <div className="flex flex-col gap-[47px]">
                <div className="flex flex-row gap-[22px] overflow-auto">
                    {buttons.map(({ link, text }, index) => {
                        return (
                            <div>
                                <button
                                    key={`${index}`}
                                    className="py-[8px] md:py-[16px] px-[32px] bg-[#39324D] rounded-[66px] text-[16px] leading-[19px] focus:font-semibold focus-btn-gradient whitespace-pre"
                                >
                                    {text}
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[20px] place-items-center">
                    {cards.map(({ src, title, eth, time, count }, index) => {
                        if (index < 4 && width <= 768) {
                            return (
                                <div
                                    className="bg-white w-fit rounded-[6px] p-[10px] flex flex-col"
                                    key={`${index}`}
                                >
                                    <Image className="" src={src} alt="logo" width={265} height={262} />
                                    <div className="flex flex-col">
                                        <div className="text-[#242323] font-bold text-[18px] leading-[34px] -tracking-[0.02em]">
                                            ArtCrypto
                                        </div>
                                        <div className="flex flex-row justify-between text-red-900">
                                            <div className="flex flex-row h-[21px] w-full items-center justify-between">
                                                <div className="flex flex-row gap-[6px] items-center">
                                                    <Image className="" src="/base.svg" alt="eth" width={21} height={21}/>
                                                    <div className="text-[#6AD38F] font-medium text-[12px] leading-[15px]">
                                                        {eth}
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="text-[#989898] text-[12px] leading-[15px]">{count}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="border border-[#EDECEC] my-[10px]" />
                                        <div className="flex flex-row justify-between items-center">
                                            <div className="text-[#1C51FE] text-[12px] leading-[15px] -tracking-[0.02em] bg-[#BBA5FF]/[.4] rounded-[66px] w-fit p-[4px]">
                                                {time}
                                            </div>
                                            <div className="text-[#1C51FE] font-bold text-[12px] leading-[15px] -tracking-[0.02em]">
                                                Place a bid
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        if (width >= 768) {
                            return (
                                <div
                                    className="bg-white w-fit rounded-[6px] p-[10px] flex flex-col"
                                    key={`${index}`}
                                >
                                    <Image className="" src={src} alt="logo" width={265} height={262} />
                                    <div className="flex flex-col">
                                        <div className="text-[#242323] font-bold text-[18px] leading-[34px] -tracking-[0.02em]">
                                            ArtCrypto
                                        </div>
                                        <div className="flex flex-row gap-[6px] w-full items-center">
                                            <Image className="" src="/base.svg" alt="eth" width={21} height={21} />
                                            <div className="flex flex-row w-full items-center justify-between">
                                                <div className="text-[#6AD38F] font-medium text-[12px] leading-[15px]">
                                                    {eth}
                                                </div>
                                                <div className="text-[#989898] text-[12px] leading-[15px]">{count}</div>
                                            </div>
                                        </div>
                                        <hr className="border border-[#EDECEC] my-[10px]" />
                                        <div className="flex flex-row justify-between items-center">
                                            <div className="text-[#1C51FE] text-[12px] leading-[15px] -tracking-[0.02em] bg-[#BBA5FF]/[.4] rounded-[66px] w-fit p-[4px]">
                                                {time}
                                            </div>
                                            <div className="text-[#1C51FE] font-bold text-[12px] leading-[15px] -tracking-[0.02em]">
                                                Place a bid
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
                <button className="flex btn-gradient py-[16px] px-[32px] w-fit rounded-[66px] self-center">
                    View More
                </button>
            </div>
        </div>
    );
};

export default HotDrop;
