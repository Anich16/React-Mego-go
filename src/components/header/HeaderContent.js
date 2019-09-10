import React, {Component} from "react";
import style from "./styles/HeaderContent.module.css";

class HeaderContent extends React.Component {
    render () {
        return (
            <div className={style.content}>
                <p className={style.description}>Creative Template</p>
                <h1 className={style.title}>Welcome to mogo</h1>
                <a href="#" className={style.button} onClick={() => alert("Learn more")}>Learn more</a>
            </div>
        )
    }
}

export default HeaderContent;