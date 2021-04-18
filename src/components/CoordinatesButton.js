// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{

    handleClick=(event)=>{
        let arr = [event.clientX,event.clientY];
        this.props.onReceiveCoordinates(arr)
    }
    

    render(){
        return(
            <div>
                <button
                    onClick={this.handleClick}
                >
                    Click for Coordinates!
                </button>
            </div>
        )
    }
}
export default CoordinatesButton;
