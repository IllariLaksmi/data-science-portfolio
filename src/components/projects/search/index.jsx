import React from "react";
import ProjectsData from "../../../data/projects.json";
import ProjectItem from "../item";


const ProjectSearch = () => {
    console.log(ProjectsData)
    return (<div className="flex flex-col justify-center items-center m-8 w-100">
                <input type="text" placeholder="Filter by technology" className="input input-sm input-bordered w-full max-w-xs m-4" />
                <div className="flex justify-between w-full">
                    {ProjectsData.map((data, key) => { return (<ProjectItem key={"project-"+ key } data={data} />)})}
                </div>


            </div>)
}
export default ProjectSearch;