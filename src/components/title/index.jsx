import React from "react";
import illari from "../../assets/portfolio-image.png";
import cloud from "../../assets/portfolio-cloud.png";
import lineGraphic from "../../assets/portfolio-graphic.png";
import laptop from "../../assets/portfolio-laptop.png";
import barGraphic from "../../assets/portfolio-bar-graphic.png";
import { Trans } from "react-i18next";


const Title = () => {
    return (<div className="title-component w-100  flex justify-center mb-14 ">
                <div className="w-100  bg-primary text-primary-content md:mt-10 ps-4 pt-4 pe-7">
                    <div className="flex flex-col sm:flex-row flex wrap  mt-2 justify-center items-center ">
                        <img src={illari} className="w-40 md:w-100 title-illari-image"></img>
                        <div className="ms-1 sm:w-100 flex-col">
                            <h3> <Trans i18nKey="title.part1">Hey! Welcome to Illari's Portfolio</Trans></h3>
                            <p><Trans i18nKey="main.description"></Trans></p>
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