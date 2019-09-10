import React, {Component} from "react";
import style from "./styles/SliderBlock.module.css";
import SliderItem from "./SliderItem";

class SliderBlock extends React.Component {

    state = {
        slider: "01",
        sliderList: [
            {
                id: "01",
                info:" intro"
            },
            {
                id: "02",
                info: "works"
            },
            {
                id: "03",
                info: "about",
            },
            {
                id: "04",
                info: "contacts"
            }
        ]
    };

    changeSlider = (id) => {
        this.setState({slider: id})
    };

    render () {
        return (
            <div className={style.sliderList}>
                {
                    this.state.sliderList.map(i => {
                        return <SliderItem key={i.id} {...i} slider={this.state.slider} changeSlider={this.changeSlider}/>
                    })
                }
            </div>
        )
    }
}

export default SliderBlock;