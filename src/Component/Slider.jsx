import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../images/linus-mimietz-gvptKmonylk-unsplash.jpg';
import img2  from '../images/samantha-gades-BlIhVfXbi9s-unsplash.jpg'

const Slider=()=> {
   
        return (
            <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            emulateTouch={false}
           
            
            >
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img1} />
                    
                </div>
            </Carousel>
        );
    
}



export default Slider