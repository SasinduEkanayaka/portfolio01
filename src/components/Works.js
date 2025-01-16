
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";




import Sidebar from "../assets/hutch.png";
import Ecommerce from "../assets/ecommerce.png";
import HOC from "../assets/hoc.png";
import MusicApp from "../assets/musicapp.png";
import Center from "../assets/center.png";
import Tour from "../assets/tour.png";
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
      <a href="https://mysliit-my.sharepoint.com/:v:/g/personal/it22562760_my_sliit_lk/EVUpcuNHvuZPrXmdrhEg6EMBz7VDMG-0cva8F16c9kxriw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ygN30S">
        <img src={Tour} alt="tour" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.figma.com/proto/zch9coybqR1IJnhTmsp3hl/MAD?node-id=1-2539&starting-point-node-id=1%3A2539&t=UlrZltEO9vs7nfwx-1">
        <img src={MusicApp} alt="beach" className="music-app-img" /></a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://www.figma.com/proto/sr7jicvVKqEGFUp1qo6lL8/Badminton?node-id=4-152&t=XI3UDz9FOi8vZLla-1">
        <img src={Ecommerce} alt="badminton" /></a>
      </SwiperSlide>
     
      <SwiperSlide>
      <a href="https://mysliit-my.sharepoint.com/:v:/g/personal/it22562760_my_sliit_lk/EdHodJ_XxuVOrRCBHUFtMsgBR423d5o8I1rw2bp1iOWeIg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=345pwU">
        <img src={HOC} alt="bashi" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.figma.com/proto/vBjaqDvySYS1gSQYjdk6oW/service-project?node-id=1-642&p=f&t=LIA30gmhCB024fpr-1&scaling=contain&content-scaling=fixed&page-id=0%3A1">
        <img src={Center} alt="center" /></a>
      </SwiperSlide>
     
    </Swiper>
  </div>
);
}

export default Works