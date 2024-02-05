import React from "react";


const ProjectItem = ({ data }) => {
    const {title, technologies, image} = data;
    return (<>
                <div className="card bg-secondary">
                    <div className="card-body">
                        <h2 className="card-title text-secondary-content">{title}</h2>
                        <div className="card-actions justify-end">
                            {technologies.map((tech, key) => {
                                return (  <div key={"project-technology-"+ key} className="badge badge-outline">{tech}</div> )
                            })}
                        </div>
                    </div>
                </div>
            </>)
}
export default ProjectItem;