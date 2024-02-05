import React from "react";
import Title from "../../components/title";
import Menu from "../../components/menu";
import { Trans } from 'react-i18next';
import ProjectSearch from "../../components/projects/search";

const MainPage = () => {

    return (<>
        <div className="flex flex-col-reverse md:flex-row w-full  h-full">
            <Menu />
            <div className="flex flex-col md:w-5/6 h-3/4  flex-8  m-auto overflow-y-scroll ">
                <Title />
                <ProjectSearch />
            </div>
        </div>

    </>)
}
export default MainPage;