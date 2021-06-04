import React from 'react'

import Cards from '../cards/Cards'
import Footer from '../Footer/Footer'
import SliderSection from '../SliderArea/SliderArea'

function Home(){
    return(
        <>
            <SliderSection/>
            <Cards />
            <Footer />
        </>
    )
}

export default Home;