import React from 'react';

import Header from "../header/Header";
import Content from "../contents/Content";

class App extends React.Component {

    render(){
        return(
            <div>
                <Header headerName={this.props.headerName}/>
                <Content contentName={this.props.contentName}
                        ifElseNum={this.props.ifElseNum}/>
            </div>
        );
    }
}

App.defaultProps = {
    headerName: "Default Header"
    , contentName: "Default Content"
    , ifElseNum: "1"
};

export default App;
