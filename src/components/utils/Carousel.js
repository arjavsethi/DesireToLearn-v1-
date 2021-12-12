import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./Carousel.css"
const MyCarousel = ({first,second,third}) => {
    return (
        <>
        <div className="sizeCarousel">
         <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100 img-size"
      src={third}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-size"
      src={first}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-size"
      src={second}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
</div>
        </>
    )
}

export default MyCarousel
