import React from "react";


const TalkItem = ({ data }) => {
    const {title, subtitle, text, img} = data;
    return (<>
               <div className="card card-side bg-base-100 shadow-xl">
             
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Recursos y playlist!</p>

                    <hr/>
                    <p>Mentalidad de Crecimiento: Carol Dweck</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_X0mgOOSpLU?si=zXTx7E8IlcnKe-PQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               
                    <hr/>
                    <p>Playlist</p>
                    <iframe style={{"border-radius":"12px"}} src="https://open.spotify.com/embed/playlist/6wsGpSQZxcy7foSrRYPlLD?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                </div>
            </>)
}
export default TalkItem;