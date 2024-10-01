import React from "react";

class Input extends React.Component {
    render() {
        return(
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type="text" id={this.props.id} placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default Input;