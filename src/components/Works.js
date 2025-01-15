
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";




import Sidebar from "../assets/hutch.png";
import Ecommerce from "../assets/ecommerce.png";
import HOC from "../assets/hoc.png";
import MusicApp from "../assets/musicapp.png";
import "./portfolio.css"


function Works(index) {
   

  return (
    <div className="portfolio" id="portfolio">
  

    {/* slider */}
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
      
    >
      <SwiperSlide>
      <a href="https://www.figma.com/proto/P6u3RiJ2Pp1Nxr5BYU7WCD/Hutch?node-id=3-7488&starting-point-node-id=3%3A7488&t=9ldhB8iHsSqS71Ke-1">
  <img src={Sidebar} alt="Sidebar" />
</a>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Ecommerce} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={MusicApp} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={HOC} alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
);
}

export default Works