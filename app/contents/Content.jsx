import React from "react";

import NumberContent from "./NumberContent";

class Content extends React.Component{

    constructor(props){
        super(props);

        this.updateIfElseNum.bind(this);

        this.state = {
            content: this.props.contentName
            , ifElseNum: this.props.ifElseNum
        };
    }

    alertFunc(){
        alert("이효섭 진짜 병신");
    }

    updateIfElseNum(){
        let intNum = parseInt(this.state.ifElseNum);
        intNum = ++intNum;

        this.setState({
            ifElseNum: intNum.toString()
        });
    }

    render(){
        let text = "이효섭 병신";
        let bgStyle = {
            backgroundColor: "#D8D8D8"
        };
        let ifElseNum = this.state.ifElseNum;

        return (
            <div style={bgStyle}>{this.state.ifElseNum == "1" ? "True" : "False"}
                <h3>{this.state.content}</h3>
                <h3>{text}</h3>

                <button onClick={this.alertFunc}>click event</button>
                <br/>
                <span>{this.state.ifElseNum}</span>
                <button onClick={this.updateIfElseNum.bind(this)}>numberChange event</button>

                <NumberContent/>
            </div>
        );
    }
}

export default Content;