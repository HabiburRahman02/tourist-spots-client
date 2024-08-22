import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import slider1 from '../../../assets/slider/slider1.jpg'
import slider2 from '../../../assets/slider/slider2.jpg'
import slider3 from '../../../assets/slider/slider3.jpg'

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]}
                className="mySwiper md:h-[600px]"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;