import React from "react";
import DataScienceProjectsData from "../../../data/projects-data-science.json";
import FrontEndProjectsData from "../../../data/projects-front-end.json";
import BackEndProjectsData from "../../../data/projects-back-end.json";
import ProjectItem from "../item";
import { useTranslation, Trans } from 'react-i18next';

const ProjectSearch = () => {
   
    return ( <>
                <h2 className="divider subsection"><Trans i18nKey="sections.projects.title"> Projects </Trans></h2>
                <div className="flex flex-col justify-center items-center mt-4  m-4 w-100">
                    {/* <input type="text" placeholder="Filter by technology" className="input input-sm input-bordered w-full max-w-xs m-4" />*/}  
                    <div class="divider">Front-end</div>
                    <div className="flex flex-col flex-wrap md:flex-row justify-center md:justify-center w-full columns-4 md:columns-3 gap-2 scrollbar-hide ">
                        {FrontEndProjectsData.map((data, key) => { return (<ProjectItem key={"project-"+ key } data={data} />)})}
                    </div>
                    <div class="divider">Back-end</div>
                    <div className="flex flex-col flex-wrap md:flex-row justify-center md:justify-center w-full columns-4 md:columns-3 gap-2 scrollbar-hide ">
                        {BackEndProjectsData.map((data, key) => { return (<ProjectItem key={"project-"+ key } data={data} />)})}
                    </div>
                    <div class="divider">Data Science</div>
                    <div className="flex flex-col flex-wrap md:flex-row  justify-center md:justify-center w-full columns-4 md:columns-3 gap-2 scrollbar-hide ">
                        {DataScienceProjectsData.map((data, key) => { return (<ProjectItem key={"project-"+ key } data={data} />)})}
                    </div>
                </div>
            </>)
}
export default ProjectSearch;