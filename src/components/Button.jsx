import React from "react";
import "../stylesheets/button.css";

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"button"
        };
    }
    render(){
        return(
            <div className="button-individual">
                {this.props.bTitle}
            </div>
        );
    }
}

export default Button;