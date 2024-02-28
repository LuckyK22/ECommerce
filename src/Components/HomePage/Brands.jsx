import React from 'react'
import Slider from "react-slick";
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.png';
// import brand3 from '../../assets/brand3.jpg';
import brand4 from '../../assets/brand4.png';
import brand5 from '../../assets/brand5.png';
import brand6 from '../../assets/brand6.png';
import brand7 from '../../assets/brand7.png';
import brand8 from '../../assets/brand8.png';
import brand9 from '../../assets/brand9.png';

function Brands() {

    const brands = [
        {
            name: 'adidas',
            image: brand1
        },
        {
            name: 'Emporio Armani',
            image: brand2
        },
        {
            name: 'H&M',
            image: brand4
        },
        {
            name: 'LOUIS VUITTON',
            image: brand5
        },
        {
            name: 'Omega',
            image: brand6
        },
        {
            name: 'Prada',
            image: brand7
        },
        {
            name: 'Rolex',
            image: brand8
        },
        {
            name: 'ZARA',
            image: brand9
        },
    ];


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };

    return (
        <>
            <div className='mx-auto max-w-full px-2 sm:px-6 lg:px-8 my-14'>
                <div className='text-3xl font-semibold'>Our Partners</div>
                <div className='my-4 overflow-hidden'>
                    <Slider {...settings} className="bg-rWhite">
                        {
                            brands.map((item) => (
                                <div key={item.name} className="">
                                    <img className='w-56 h-46 m-auto my-auto' src={item.image} alt={item.name} />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Brands