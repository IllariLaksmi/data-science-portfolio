import React from "react";
import TalksData from "../../data/talks.json";
import TalkItem from "./talkItem";
import { useTranslation, Trans } from 'react-i18next';
const Talks = () => {
    return (<>
            <div className="talks">
                <h2 className="divider subsection"><Trans i18nKey="sections.talks.title"> Talks & Events </Trans></h2>
                <hr/>
                <div className="flex flex-col justify-center items-center mt-4  m-4 w-100">
                <div className="flex flex-col flex-wrap md:flex-row justify-center md:justify-center w-full columns-4 md:columns-3 gap-2 scrollbar-hide ">
                    {TalksData.map((data, index) => { return (<TalkItem key={"project-"+ index } index={index} className="mb-2" />)})}
                </div>
                </div>

         
            </div>
           
            </>)
}
export default Talks;