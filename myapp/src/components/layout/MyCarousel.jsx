import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = () => {
  return (
    <Carousel>
                <div>
                    <img src="11.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="12.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="13.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}

export default MyCarousel