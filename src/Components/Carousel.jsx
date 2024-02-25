import React from 'react'
import Slider from "react-slick";
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner4.png'

function CarouselH() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    };

    return (
        <>
            <div className='overflow-hidden'>
            <Slider {...settings}>
                <div>
                    <img style={{width : 'inherit'}} className='m-auto h-1/2' src={banner1} alt="" srcset="" />
                </div>
                <div>
                    <img style={{width : 'inherit'}} className='m-auto h-1/2' src={banner2} alt="" srcset="" />
                </div>
                <div>
                    <img style={{width : 'inherit'}} className='m-auto h-1/2' src={banner3} alt="" srcset="" />
                </div>
                <div>
                    <img style={{width : 'inherit'}} className='m-auto h-1/2' src={banner4} alt="" srcset="" />
                </div>
            </Slider>
            </div>
        </>
    )
}

export default CarouselH