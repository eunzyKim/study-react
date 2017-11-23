import React from "react";

import RandomNumber from "./RandomNumber";

class NumberContent extends React.Component{

    constructor(props){
        super(props);

        this.onUpdateFunc = this.onUpdateFunc.bind(this);

        this.state = {
            number: Math.round(Math.random()*100)
        };
    }

    onUpdateFunc(num){
        this.setState({
            number: num
        });
    }

    render(){
        return(
            <RandomNumber number={this.state.number} onUpdateFunc={this.onUpdateFunc}/>
        );
    }
}

export default NumberContent;