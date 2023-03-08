import Image from 'next/image';

const TheWeek = () => {
    const cards = [
        {
            src: '/Person 1.png',
            name: 'Eka Prakasa',
            price: '13.2K',
        },
        {
            src: '/Person 2.png',
            name: 'Emil Tirtayasa Sinaga ',
            price: '13.2K',
        },
        {
            src: '/Person 3.png',
            name: 'Dodo Opung Utama',
            price: '13.2K',
        },
        {
            src: '/Person 4.png',
            name: 'Emil Nainggolan',
            price: '13.2K',
        },
        {
            src: '/Person 5.png',
            name: 'Eja Nainggolan',
            price: '13.2K',
        },
        {
            src: '/Person 6.png',
            name: 'Among Suryono',
            price: '13.2K',
        },
    ];

    return (
        <div className="px-[24px] md:px-[40px] lg:px-[60px] xl:px-[120px] pt-[95px]">
            <div className="flex flex-col gap-[34px]">
                <div className="font-bold text-[32px] md:text-[48px] leading-[58px] -tracking-[0.02em]  ">
                    Creator of The Week
                </div>
                <div className="grid md:grid-cols -1 md:grid-cols-2 2xl:grid-cols-3 gap-[21px]">
                    {cards.map(({ src, name, price }, index) => {
                        return (
                            <div
                                className="flex flex-row gap-[13px] bg-[#251163] p-[16px] rounded-[14px]"
                                key={`${index}`}
                            >
                                <Image src={src} alt="person" width={61} height={61} />
                                <div className="flex flex-row gap-[13px]">
                                    <div className="font-semibold text-[24px] leading-[26px]">Eka Prakasa</div>
                                    <div className="text-[20px] leading-[28px]">13.2K</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-center pt-[50px]">
                <button className="flex btn-gradient py-[16px] px-[32px] w-fit rounded-[66px] self-center">
                    Watch Video
                </button>
            </div>
        </div>
    );
};

export default TheWeek;
