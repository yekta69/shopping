import { Carousel } from 'react-responsive-carousel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export const Baner =({url}) => {

    return(
        <Carousel autoPlay interval="5000" transitionTime="5000">
               <div>
                    <img src={url} alt = '...' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require("../navbar2/image/711979.png")}  alt = '...' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={url}  alt = '...' />
                    <p className="legend">Legend 3</p>
                </div>
      </Carousel>
    
  )
}