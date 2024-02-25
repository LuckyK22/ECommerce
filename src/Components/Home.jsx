import React from 'react'
import { useEffect } from 'react'
import Carousel from './Carousel'
import Category from './Category'
import Navbar from './Navbar'


function Home() {


    return (
        <>
            <Navbar />
            <Category />
            <Carousel />
        </>
    )
}

export default Home