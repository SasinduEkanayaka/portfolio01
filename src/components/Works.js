
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";




import Sidebar from "../assets/sidebar.png";
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
        <img src={Sidebar} alt="" />
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