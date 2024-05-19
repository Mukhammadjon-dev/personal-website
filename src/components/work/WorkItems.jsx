import React from "react";

const WorkItems = ({item})=>{
    return(
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>

            <div className="work__button-wrapper">
                <div>
                <a href={item.sourceLink} target="_blank" rel="noreferrer" className="work__button">
                Live Demo 
                <i className="bx bx-right-arrow work__button-icon">
                </i>
                </a>
                </div>
                <div>
                <a href={item.codeSource} target="_blank" rel="noreferrer" className="work__button">
                Code source <i className="bx bx-right-arrow-alt work__button-icon">
                </i>
                </a>
                </div>
            </div>
            

        </div>
    )
} 
export default WorkItems;