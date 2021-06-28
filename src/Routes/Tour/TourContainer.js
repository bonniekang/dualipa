import React from "react";
import TourPresenter from "./TourPresenter.js";
import tours from "../../Components/tours.js";

export default class extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tours
        }
    }

    render() {
        return (
            <TourPresenter tours={this.state.tours}/>
        )
    }
}