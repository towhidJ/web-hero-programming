import React from 'react';
import slide1 from '../../slide-1.jpg'

import slide3 from '../../slide-3.jpg'
import {Carousel, Container} from "react-bootstrap";
import './Slider.css';
import useWindowWidth from "../../hooks/useWindowWidth";

const Slider = () => {
    const onSmallScreen = useWindowWidth(800);
    return (
        <div className={onSmallScreen?"small":"large"}>
                <Carousel>
                    <Carousel.Item className="w-100">
                        <img
                            className="d-block "
                            src={slide1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={slide3}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={slide3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Slider;
