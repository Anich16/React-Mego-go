import React from "react";
import style from "./styles/SliderBlock.module.css";

const SliderItem = (props) => {
    return (
        <div className={props.slider === props.id ? style.activeSliderItem : style.sliderItem}
             onClick={() => props.changeSlider(props.id)}>
            <h3 className={style.number}>{props.id} <span className={style.info}>{props.info}</span></h3>
        </div>
    )

};

export default SliderItem;