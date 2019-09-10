import React from "react";
import style from "./styles/AboutUsItem.module.css";
import icon from "./../../images/icons/contact.png";

const AboutUsItem = (props) => {
    return (
        <div className={style.item}>
            <div className={style.photoBlock}>
                <img src={props.url} alt="Photo" className={style.photo} />
                <div className={style.coverBlock}></div>
                <div className={style.info}>
                    <img src={icon} className={style.icon} alt="Icon" width="35px"/>
                    <p className={style.text}>Super team</p>
                </div>
            </div>
        </div>
    )
};

export default AboutUsItem;