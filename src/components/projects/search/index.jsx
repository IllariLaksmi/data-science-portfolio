import React from "react";
import ProjectsData from "../../../data/projects.json";
import ProjectItem from "../item";


const ProjectSearch = () => {
    console.log(ProjectsData)
    return (<div className="flex flex-col justify-center items-center  md:h-full m-4 w-100">
                <input type="text" placeholder="Filter by technology" className="input input-sm input-bordered w-full max-w-xs m-4" />
                <div className="flex flex-col md:flex-row overflow-scroll justify-center md:justify-around w-full columns-4 md:columns-3 gap-2 ">
                    {ProjectsData.map((data, key) => { return (<ProjectItem key={"project-"+ key } data={data} />)})}
                </div>


            </div>)
}
export default ProjectSearch;