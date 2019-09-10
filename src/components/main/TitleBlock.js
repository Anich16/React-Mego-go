import React from "react";
import style from "./styles/TitleBlock.module.css";

const TitleBlock = (props) => {
    return (
        <div className={style.titleBlock}>
            <p className={style.description}>{props.description}</p>
            <h3 className={style.title}>{props.title}</h3>
        </div>
    )
};

export default TitleBlock;