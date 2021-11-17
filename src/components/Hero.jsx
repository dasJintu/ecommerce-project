import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import img1 from "../images/1.png";
import img2 from "../images/2.png";

import img4 from "../images/4.png";
import img5 from "../images/5.png";
import HeroSwiperSlide from "./HeroSwiperSlide";

const swiperContainer = [
  {
    id: 1,
    title: "EveryDay Elegance",
    par: " Lorem ipsum dolor sit, amet consectetur adipisicing elitborum iusto! A dolore ad ullam exercitationem.",
    subHeading: "Clothing New Arrival!",
    subHeading2: "New Arrivals!",
    image: img1,
    background: "bg-gray-200",
  },
  {
    id: 2,
    title: "Summer Fashion",
    par: " Lorem ipsum dolor sit, amet consectetur adipisicing elitborum iusto! A dolore ad ullam exercitationem.",
    subHeading: "Feel the heat!",
    subHeading2: "Summer Arrivals!",
    image: img2,
    background: "bg-red-200",
  },

  {
    id: 3,
    title: "EveryDay Elegance",
    par: " Lorem ipsum dolor sit, amet consectetur adipisicing elitborum iusto! A dolore ad ullam exercitationem.",
    subHeading: "Clothing New Arrival!",
    subHeading2: "New Arrivals!",
    image: img4,
    background: "bg-blue-200",
  },
  {
    id: 4,
    title: "Men's Basics",
    par: " Lorem ipsum dolor sit, amet consectetur adipisicing elitborum iusto! A dolore ad ullam exercitationem.",
    subHeading: "Clothing New Arrival!",
    subHeading2: "New Arrivals!",
    image: img5,
    background: "bg-indigo-200",
  },
];

const Hero = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {swiperContainer.map((swip) => (
        <SwiperSlide key={swip.id}>
          <HeroSwiperSlide data={swip} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
