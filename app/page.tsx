import Banner from "./Component/Banner";
import LatestArival from "./Component/LatestArival";
import MarqueeAuto from "./Component/MarqueeAuto";
import ShopByCategory from "./Component/ShopByCategory";
import Showcase from "./Component/Showcase";
import Testimonial from "./Component/Testimonial";
import TimeShow from "./Component/TimeShow";

export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto">
        <Banner></Banner>
        <ShopByCategory></ShopByCategory>
        <LatestArival></LatestArival>
      </div>

      <MarqueeAuto></MarqueeAuto>

      <div className=" container mx-auto">
        <TimeShow></TimeShow>
        <LatestArival></LatestArival>
        <LatestArival></LatestArival>
        <LatestArival></LatestArival>
        <LatestArival></LatestArival>

        <Showcase></Showcase>
        <Testimonial></Testimonial>
      </div>
    </main>
  );
}
