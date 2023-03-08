import { userService } from 'services';
import { Link } from 'components';
import Hero from "../components/Hero/hero";
import HotDrop from "../components/HotDrop/hotDrop";
import SellNFT from "../components/SellNFT/sellNft";
import TheWeek from "../components/TheWeek/theWeek";
import Footer from "../components/Footer/footer";

export default Home;

function Home() {
    return (
        <div className="p-4 bg-[#110929]">
            <Hero/>
            <HotDrop />
            {/*<LiveAucition />*/}
            <SellNFT />
            <TheWeek />
            <Footer />
        </div>
    );
}
