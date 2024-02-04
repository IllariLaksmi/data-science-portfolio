import React from "react";
import Title from "../../components/title";
import Menu from "../../components/menu";
import {  Trans } from 'react-i18next';
import ProjectSearch from "../../components/projects/search";

const MainPage = () => {

    return (<>
    <div className="flex w-100 h-full">
        <Menu/>
        <div className="flex flex-col w-8/12 m-auto overflow-y-scroll ">
            <Title />
            <p className="mt-20 text-center">
            <Trans i18nKey="main.description">
            Junior Data Scientist with experience as a Software Developer.<br/>
            Certified as an AWS Cloud Practitioner by AWS. Big Data - AI by Keep Coding.<br/>
            I am known for my communication skills, good sense of humor, and growth mindset.
          </Trans>
          </p>
    
    
       <ProjectSearch/>
        </div>
    </div>

    </>)
}  
export default MainPage;