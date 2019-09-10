import React from "react";
import style from  "./styles/Header.module.css";
import Banner from "./Banner";
import HeaderContent from "./HeaderContent";
import SliderBlock from "./SliderBlock";

const Header = (props) => {
    return (
        <div className={style.header}>
            <Banner />
            <HeaderContent/>
            <SliderBlock/>
        </div>
    )
};

export default Header;