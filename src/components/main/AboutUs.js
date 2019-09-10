import React,{Component} from "react";
import TitleBlock from "./TitleBlock";
import style from "./styles/AboutUs.module.css";
import aboutUs1 from "./../../images/about1.jpg";
import aboutUs2 from "./../../images/about2.jpg";
import aboutUs3 from "./../../images/about3.jpg";
import icon from "./../../images/icons/contact.png";
import AboutUsItem from "./AboutUsItem";

class AboutUs extends React.Component {

    state = {
        itemList: [
            {
                id: 1,
                url: aboutUs1
            },
            {
                id: 2,
                url: aboutUs2
            },
            {
                id: 3,
                url: aboutUs3
            }
        ]
    };

    render () {
        return (
            <div className={style.aboutUsBlock}>
                <TitleBlock description="What we do" title="story about us"/>
                <div className={style.content}>
                    <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className={style.list}>
                        {
                            this.state.itemList.map(i => {
                                return <AboutUsItem key={i.id} {...i}/>
                            })
                        }
                        {/*<div className={style.item}>*/}
                            {/*<div className={style.photoBlock}>*/}
                                {/*<img src={aboutUs1} alt="Photo" className={style.photo}/>*/}
                                {/*<div className={style.coverBlock}></div>*/}
                                {/*<div className={style.info}>*/}
                                    {/*<img src={icon} className={style.icon} alt="Icon" width="35px"/>*/}
                                    {/*<p className={style.text}>Super team</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className={style.item}>*/}
                            {/*<div className={style.photoBlock}>*/}
                                {/*<img src={aboutUs2} alt="Photo" className={style.photo}/>*/}
                                {/*<div className={style.coverBlock}></div>*/}
                                {/*<div className={style.info}>*/}
                                    {/*<img src={icon} className={style.icon} alt="Icon" width="35px"/>*/}
                                    {/*<p className={style.text}>Super team</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className={style.item}>*/}
                            {/*<div className={style.photoBlock}>*/}
                                {/*<img src={aboutUs3} alt="Photo" className={style.photo}/>*/}
                                {/*<div className={style.coverBlock}></div>*/}
                                {/*<div className={style.info}>*/}
                                    {/*<img src={icon} className={style.icon} alt="Icon" width="35px"/>*/}
                                    {/*<p className={style.text}>Super team</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;