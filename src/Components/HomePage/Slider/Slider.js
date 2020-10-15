import React from 'react';
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'
import slide1 from '../../../images/carousel-1.png'
import slide2 from '../../../images/carousel-2.png'
import slide3 from '../../../images/carousel-5.png'


const Slider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className="container-fluid slider-bg">
            <div className="container py-5">
                <h1 className='font-weight-bolder text-center text-light'>Here are some of<span style={{ color: '#7AB259' }}> our works </span></h1>
                <div className="row h-100 w-75 mx-auto my-5">
                    <AutoplaySlider 
                        className='slider-style'
                        animation="cubeAnimation"
                        play={true}
                        cancelOnInteraction={false}
                        interval={2000}
                    >
                        <div data-src={slide1} />
                        <div data-src={slide2} />
                        <div data-src={slide3} />
                    </AutoplaySlider>
                </div>
            </div>
        </div>
    );
};

export default Slider;