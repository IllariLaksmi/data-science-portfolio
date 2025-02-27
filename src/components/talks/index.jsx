import React from "react";
import TalksData from "../../data/talks.json";
import TalkItem from "./talkItem";

const Talks = () => {

    return (<>
            <div className="talks">
                <h2>Charlas y eventos</h2>
                {TalksData.map((data, key) => { return (<TalkItem key={"project-"+ key } data={data} className="mb-2" />)})}
            </div>
           
            </>)
}
export default Talks;