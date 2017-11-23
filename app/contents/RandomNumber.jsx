import React from "react";

class RandomNumber extends React.Component{

    constructor(props){
        super(props);

        this.updateRandomFunc = this.updateRandomFunc.bind(this);
    }

    updateRandomFunc(){
        let num = Math.round(Math.random()*100);

        this.props.onUpdateFunc(num);
    }

    render(){
        return(
            <div>
                <span>Random Number: {this.props.number}</span>
                <button onClick={this.updateRandomFunc}>random number</button>
            </div>
        );
    }
}

export default RandomNumber;