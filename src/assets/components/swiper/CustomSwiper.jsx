

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TMSlide from './TMSlide.jsx';
import { useRef, useState } from 'react';
import Arrow_right from './Navigation/button/Arrow_right.svg'



const TestimonialsData = [
    {
        id: 1,
        text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
        name: 'John Smith',
        post: 'Marketing Director at XYZ Corp'
    },
    {
        id: 2,
        text: '"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"',
        name: 'Emily Johnson',
        post: 'Social Media Specialist'
    },
    {
        id: 3,
        text: '"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"',
        name: 'Jane Doe',
        post: 'Content Creator'
    },
    {
        id: 4,
        text: '"4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"',
        name: 'Brian Williams',
        post: 'Senior SEO Specialist'
    },
    {
        id: 5,
        text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
        name: 'John Smith',
        post: 'Marketing Director at XYZ Corp'
    },
    {
        id: 6,
        text: '"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"',
        name: 'Emily Johnson',
        post: 'Social Media Specialist'
    },

]


export const CustomSwiper = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (

        <Swiper

            modules={[Navigation, Pagination,]}
            spaceBetween={40}
            slidesPerView={1}
            spaceBetween={20}
            slidesPerGroup={1}
            watchOverflow={true}
            breakpoints={{

                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                },
            }}

            // autoplay={{
            //     // delay: 3000,        // 3 секунды между прокруткой
            //     // disableOnInteraction: true, // Остановить, если пользователь нажал
            //     // pauseOnMouseEnter: true,
            // }}
            // loop={true}
            // navigation={true}
            onBeforeInit={(swiper) => {
                // ВСЮ НАСТРОЙКУ НАВИГАЦИИ ДЕЛАЕМ ЗДЕСЬ
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}

            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
                setSlidesPerView(swiper.params.slidesPerView);
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
            }}
             onResize={(swiper) => {
    // Обновляем состояние при ресайзе
    setSlidesPerView(swiper.params.slidesPerView);
   
  }}
            navigation={false}
            pagination={false}
        >
            <div className="">
                {TestimonialsData.map((item) => (
                    <SwiperSlide key={item.id} >
                        <TMSlide
                            name={item.name}
                            post={item.post}
                            id={item.id}
                            text={item.text}
                        > </TMSlide>
                    </SwiperSlide>
                ))
                }
            </div>
            <div className="actions">

                <button ref={prevRef} className={` ${isBeginning ? 'disabled' : ''}`}
                    disabled={isBeginning}
                    onClick={() => swiperRef.current?.slidePrev()}>
                    <img className="prev" src={Arrow_right} alt="prev" />
                </button>

                <div className="custom-pagination-wrapper">
                    <div className="custom-pagination">
                        {TestimonialsData.map((_, index) => (
                            <button
                                key={index}
                                className={` pagination-dot ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => swiperRef.current?.slideTo(index)}
                                aria-label={`Перейти к слайду ${index + 1}`}
                            > <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="none"
                            >
                                    <path
                                        fill={index === activeIndex ? "#b9ff66" : "#fff"}
                                        d="m7 2 7-2-2 7 2 7-7-2-7 2 2-7-2-7z"
                                    />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>


                <button ref={nextRef} className={` ${isEnd ? 'disabled' : ''}`}
                    disabled={isEnd}
                    onClick={() => swiperRef.current?.slideNext()}>
                    <img className="next" src={Arrow_right} alt="next" /> </button>
            </div>


        </Swiper>


    )
}


export default CustomSwiper;
