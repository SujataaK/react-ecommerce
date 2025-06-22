import React from 'react'
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"


const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active position-relative">
            <img src={banner1} alt="Slide 1" />
            <div className="overlay"></div>
            <div className="caption ">
              <h5 className='hero-header'>Mega Sale on Skincare!</h5>
              <p className='hero-text'>Up to 50% off on top brands.</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item position-relative">
            <img src={banner2} alt="Slide 2" />
            <div className="overlay"></div>
            <div className="caption">
              <h5 className='hero-header'>Flash Sale⚡ </h5>
              <p className='hero-text'>Trendy fits up to 70% OFF. Shop now and slay every look!</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item position-relative">
            <img src={banner3} alt="Slide 3" />
            <div className="overlay"></div>
            <div className="caption">
              <h5 className='hero-header'>Gadget Mega Deals</h5>
              <p className='hero-text'>Smart gadgets from just Rs.250. Save big with flash deals & bundle offers!</p>
            </div>
          </div>

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  )
}

export default HeroBanner
