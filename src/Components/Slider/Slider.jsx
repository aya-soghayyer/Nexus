import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Cards from "../Cards/Cards";



const Card = () => {

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <h3 className="mb-4">Nexus Events</h3>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Cards />
            </SwiperSlide>

            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="row mt-5">
          <h3 className="mb-4">Academic Events</h3>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="row mt-5">
          <h3 className="mb-4">Company's Events</h3>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="row mt-5">
          <h3 className="mb-4">Unversity's Events</h3>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      
    </>
  );
};

export default Card;
