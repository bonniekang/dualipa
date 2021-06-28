import React, { Component } from 'react';
import Tour from '../../Components/Tour';

class TourPresenter extends Component {
    constructor(props) {
        super(props)
    }

    tourList = () => {
        return this.props.tours.map((tour) => <Tour tour={tour} />)
    }

    render() {
        return (
            <div>
                {this.tourList()}
            </div>
        )
    }
}



export default TourPresenter;