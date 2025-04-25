import React from "react";
import { useTranslation, Trans } from 'react-i18next';

const TalkItem = ({ index }) => {
    return (<>
                <div className="card card-border w-100">
                    <div className="card-body">
                        <h2 className="card-title"> <Trans i18nKey={"sections.talks.items."+ index +".title"}> Title </Trans></h2>
                        <p><Trans i18nKey={"sections.talks.items."+ index +".description"}> Description </Trans></p>
                        {}
                        <br/>
                        <div className="flex justify-center">
                            {String(index) === "0" ? <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7303753218814021632?collapsed=1" height="685" width="504" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe> : <></>}
                            {String(index) === "1" ? <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7300511266211532823?collapsed=1" height="670" width="504" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe> : <></>}
                        </div>
                    </div>
                </div>
            </>)
}
export default TalkItem;