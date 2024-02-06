import React from "react";


const ProjectItem = ({ data }) => {
    const {title, technologies, image, link} = data;
    return (<>
                <div className="card bg-secondary" onClick={()=> window.open(link) }>
                    <div className="card-body">
                        <h2 className="card-title text-secondary-content">{title}</h2>
                        <div className="card-actions justify-end">
                            {technologies.map((tech, key) => {
                                return (  <div key={"project-technology-"+ key} className=" border border-text-content text-content rounded p-2">{tech}</div> )
                            })}
                        </div>
                    </div>
                </div>
            </>)
}
export default ProjectItem;