import Image from 'next/image';

const SellNFT = () => {
    const cards = [
        {
            src: '/Wallet.svg',
            title: 'Connect Wallet',
            description:
                'This growth plan will help you reach your resolutions and achieve the goals you have been striving towards.',
        },
        {
            src: '/Buy.svg',
            title: 'Collect NFT',
            description:
                'This growth plan will help you reach your resolutions and achieve the goals you have been striving towards.',
        },
        {
            src: '/Category.svg',
            title: 'NFT Marketplace',
            description:
                'This growth plan will help you reach your resolutions and achieve the goals you have been striving towards.',
        },
    ];

    return (
        <div className="container mx-auto px-6 xl:px-0 px-[24px] md:px-[40px] lg:px-[60px] pt-[95px] pt-[150px] flex flex-col gap-[34px]">
            <div className="font-bold text-[32px] md:text-[48px] leading-[58px] -tracking-[0.02em] mt-20 md:mt-0">
                Create Your Sell NFT
            </div>
            <div className="grid md:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
                {cards.map(({ src, title, description }, index) => {
                    return (
                        <div
                            className="flex flex-col gap-[13px] bg-[#251163] p-4 rounded-[14px] items-start"
                            key={`${index}`}
                        >
                            <Image src={src} alt="logo img" width={48} height={48} />
                            <div className="font-semibold text-[24px] leading-[26px]">{title}</div>
                            <div className="text-[20px] leading-[28px]">{description}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SellNFT;
