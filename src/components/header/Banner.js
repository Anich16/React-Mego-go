import React from "react";
import style from "./styles/Banner.module.css";
import iconBuy from "./../../images/icons/shopping-cart.png";
import iconSearc from "./../../images/icons/search.png";

const Banner = (props) => {
    return (
        <div className={style.banner}>
            <div className={style.logoBlock}>
                <a href="#" className={style.logo}>MoGo</a>
            </div>
            <div className={style.menu}>
                <nav className={style.menuList}>
                    <a href="#" className={style.menuItem}>About</a>
                    <a href="#" className={style.menuItem}>Service</a>
                    <a href="#" className={style.menuItem}>Work</a>
                    <a href="#" className={style.menuItem}>Blog</a>
                    <a href="#" className={style.menuItem}>Contact</a>
                </nav>
            </div>
            <div className={style.buttonBlock}>
                <a href="#" className={style.iconLink}><img src={iconBuy} className={style.icon} alt="Buy" width="23px"/></a>
                <a href="#" className={style.iconLink}><img src={iconSearc} className={style.icon} alt="Search" width="23px"/></a>
            </div>
        </div>
    )
};

export default Banner;