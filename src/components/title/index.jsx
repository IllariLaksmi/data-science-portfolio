import React from "react";
import illari from "../../assets/portfolio-image.png";
import cloud from "../../assets/portfolio-cloud.png";
import lineGraphic from "../../assets/portfolio-graphic.png";
import laptop from "../../assets/portfolio-laptop.png";
import barGraphic from "../../assets/portfolio-bar-graphic.png";

const Title = () => {
    return (<div className="title-component w-100 flex justify-center">
                <div className="w-100 bg-primary text-primary-content mt-10 ps-4 pt-4 pe-7">
                    <div className="flex flex-col md:flex-row  mt-2 justify-center items-center ">
                        <img src={illari} className="w-50 title-illari-image"></img>
                        <div className="ms-2 flex-col">
                            <h3>Hey! I'm Illari, check my</h3>
                            <h1>Data Science <br /> Portfolio</h1>
                        </div>
                    </div>
                    <div className="flex justify-between h-10">
                        <img src={cloud} className="title-cloud-image " />
                        <img src={lineGraphic} className="title-line-graphic-image" />
                        <img src={laptop} className="title-laptop-image" />
                        <img src={barGraphic} className="title-bar-graphic-image" />
                    </div>
                </div>
            </div>)
}
export default Title;