import React from 'react'
import Product from '../Product'
import Brands from './Brands'
import Carousel from './Carousel'
import Category from './Category'
import Footer from './Footer'
import Navbar from './Navbar'
import Services from './Services'


function Home() {


    return (
        <>
            <Navbar />
            <Services />
            <Category />
            <Carousel />
            <div className='mx-auto max-w-full px-2 sm:px-6 lg:px-8 my-14'>
                <div className='flex justify-between'>
                    <a href='#' className='text-3xl font-semibold hover:text-abbey'>Featured Products</a>
                    <a href='#' className='text-5xl text-green font-bold hover:border-b hover:border-green'>&#x2192;</a>
                </div>
                <div className=' flex gap-14 flex-wrap justify-between mt-5'>
                    <Product images='https://rukminim2.flixcart.com/image/416/416/khcb7gw0/plant-container-set/i/d/4/groot-pot-container-greyfox-original-imafxdvbcv6phzez.jpeg?q=70&crop=false' />
                    <Product images='https://rukminim2.flixcart.com/image/612/612/xif0q/fitness-grip/b/d/n/adjustable-spring-hand-exerciser-finger-exerciser-hand-grip-original-imagg8phpmjazvgj.jpeg?q=70' />
                    <Product images='https://rukminim2.flixcart.com/image/416/416/khcb7gw0/plant-container-set/i/d/4/groot-pot-container-greyfox-original-imafxdvbcv6phzez.jpeg?q=70&crop=false' />
                    <Product images='https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/q/e/s/mother-elephant-teddy-bear-soft-toy-38-cm-38-cm-grey-32-shan-original-imagm735yzssfpnh.jpeg?q=70' />
                    <Product images='https://rukminim2.flixcart.com/image/416/416/khcb7gw0/plant-container-set/i/d/4/groot-pot-container-greyfox-original-imafxdvbcv6phzez.jpeg?q=70&crop=false' />
                    <Product images='https://rukminim2.flixcart.com/image/416/416/khcb7gw0/plant-container-set/i/d/4/groot-pot-container-greyfox-original-imafxdvbcv6phzez.jpeg?q=70&crop=false' />
                    <Product images='https://rukminim2.flixcart.com/image/416/416/khcb7gw0/plant-container-set/i/d/4/groot-pot-container-greyfox-original-imafxdvbcv6phzez.jpeg?q=70&crop=false' />
                    <Product images='https://rukminim2.flixcart.com/image/612/612/xif0q/bottle/b/t/c/1000-summer-cool-single-wall-stainless-steel-fridge-water-bottle-original-imaghvnzn5qa3qfs.jpeg?q=70' />
                </div>
            </div>
            <Brands />
            <Footer />
        </>
    )
}

export default Home