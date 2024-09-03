import React from "react";
import Title from "../../components/title";
import Menu from "../../components/menu";
import { Trans } from 'react-i18next';
import ProjectSearch from "../../components/projects/search";

const MainPage = () => {

    return (<>
        <div className="flex flex-col  w-full  h-full">
            <Menu />
            <Title />
            <ProjectSearch />
        </div>

    </>)
}
export default MainPage;