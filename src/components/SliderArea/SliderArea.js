import React from 'react';
import { Button } from '../Button/Button';
import '../SliderArea/SliderArea.css';

function SliderSection(){
    return(
        <div className="slider-container">
            <video src="../videos/video-2.mp4" autoPlay loop muted />
            <h1>Ready For The Adventure</h1>
            <p>Are You Ready To Go</p>
            <div className="slider-btns">
               
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn-large">WATCH VIDEOS <i className="far fa-play-circle"/> </Button>
            </div>
        </div>
    )
}

export default SliderSection;