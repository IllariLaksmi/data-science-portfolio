import React from "react";
import Title from "../../components/title";
import Menu from "../../components/menu";
import { Trans } from 'react-i18next';
import ProjectSearch from "../../components/projects/search";
import Talks from "../../components/talks";

const MainPage = () => {

    return (<>
        <div className="flex flex-col  w-full  h-full">
            <Menu />
            <Title />
            <Talks/>            
            <ProjectSearch />
        </div>

    </>)
}
export default MainPage;