import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Skills = () => {
    return (
        <div id='skill' className=''>
            <h2 className='text-3xl text-center my-10 py-5 mx-10 border-t-2 border-b-2'>Skill Sets</h2>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                modules={[ Autoplay]}
                className="mySwiper mb-10 border-t-2 border-b-2 py-10"
            >
                <SwiperSlide className='border-2 lg:py-10 py-4 lg:px-5 px-3 flex justify-center items-center rounded bg-teal-50'>
                    <img className="lg:h-24 h-10  " src="https://i.ibb.co/b6STN9s/html-5.png" alt="HTML5" />
                </SwiperSlide>
                <SwiperSlide className='border-2 lg:py-10 py-4 lg:px-5 px-3 flex justify-center items-center rounded bg-teal-50'>
                    <img className="lg:h-24 h-10  " src="https://i.ibb.co/QcXdvY5/css-3.png" alt="CSS3" />
                </SwiperSlide>
                <SwiperSlide className='border-2 lg:py-10 py-4 lg:px-5 px-3 flex justify-center items-center rounded bg-teal-50'>
                    <img className="lg:h-24 h-10  " src="https://i.ibb.co/yN3B1xM/js.jpg" alt="JavaScript" />
                </SwiperSlide>
                <SwiperSlide className='border-2 lg:py-10 py-4 lg:px-5 px-3 flex justify-center items-center rounded bg-teal-50'>
                    <img className="lg:h-24 h-10  " src="https://i.ibb.co/7zsDsFT/pngwing-com.png" alt="Other Skill" />
                </SwiperSlide>
                <SwiperSlide className='border-2 lg:py-10 py-4 lg:px-5 px-3 flex justify-center items-center rounded bg-teal-50'>
                    <img className="lg:h-24 h-10  " src="https://i.ibb.co/1fTrhHr/Reactjs.png" alt="React.js" />
                </SwiperSlide>
                <SwiperSlide className='border-2 lg:py-10 py-4 lg:px-5 px-3 flex justify-center items-center rounded bg-teal-50'>
                    <img className="lg:h-24 h-10  " src="https://i.ibb.co/87DWzgk/firebase.png" alt="Firebase" />
                </SwiperSlide>
                <SwiperSlide className='border-2 lg:py-10 py-4 lg:px-5 px-3 flex justify-center items-center rounded bg-teal-50'>
                    <img className="lg:h-24 h-10  " src="https://i.ibb.co/HKFXDrn/nodejs.png" alt="Node.js" />
                </SwiperSlide>
                <SwiperSlide className='border-2 lg:py-10 py-4 lg:px-5 px-3 flex justify-center items-center rounded bg-teal-50'>
                    <img className="lg:h-24 h-10  " src="https://i.ibb.co/fk1xN7C/express-js.png" alt="Express.js" />
                </SwiperSlide>
                <SwiperSlide className='border-2 py-10 px-5 flex justify-center items-center rounded bg-teal-50 lg:h-44 h-[120px]'>
                    <img className="" src="https://i.ibb.co/DbNMLfS/MongoDB.png" alt="MongoDB" />
                </SwiperSlide>
                <SwiperSlide className='border-2 lg:py-10 py-4 lg:px-5 px-3 flex justify-center items-center rounded bg-teal-50'>
                    <img className="lg:h-24 h-10  " src="https://i.ibb.co/Jd4QCb4/figma.png" alt="Figma" />
                </SwiperSlide>
            </Swiper>

        </div>

    );
};

export default Skills;