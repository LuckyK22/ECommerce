import React from 'react'
import Slider from "react-slick";

function Services() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        draggable: false,
        pauseOnFocus: false
    };

    return (
        <div className='my-4 overflow-hidden'>
        <Slider {...settings}>
            <div className=" bg-snow border-1 border-y-2 border-abbey border-opacity-5">
                <h1 className='text-center'>Multiple Payment Options</h1>
            </div>
            <div className=" bg-snow border-1 border-y-2 border-abbey border-opacity-5">
                <h1 className='text-center'>Fast Delivery Options</h1>
            </div>
            <div className=" bg-snow border-1 border-y-2 border-abbey border-opacity-5">
                <h1 className='text-center'>Cash on Delivery</h1>
            </div>
            <div className=" bg-snow border-1 border-y-2 border-abbey border-opacity-5">
                <h1 className='text-center'>Free Shipping</h1>
            </div>
            <div className=" bg-snow border-1 border-y-2 border-abbey border-opacity-5">
                <h1 className='text-center'>Order Tracking</h1>
            </div>
            <div className=" bg-snow border-1 border-y-2 border-abbey border-opacity-5">
                <h1 className='text-center'>Return and Exchange Policies</h1>
            </div>
            <div className=" bg-snow border-1 border-y-2 border-abbey border-opacity-5">
                <h1 className='text-center'>Customer Support</h1>
            </div>
            <div className=" bg-snow border-1 border-y-2 border-abbey border-opacity-5">
                <h1 className='text-center'>Product Reviews and Ratings</h1>
            </div>
            <div className=" bg-snow border-1 border-y-2 border-abbey border-opacity-5">
                <h1 className='text-center'>Personalized Recommendations</h1>
            </div>
        </Slider>
        </div>
    )
}

export default Services