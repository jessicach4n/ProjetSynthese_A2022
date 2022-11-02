import React, { Component } from "react";

class Settings extends Component {

    render() {
        let visibility = "hide";
    
        if (this.props.menuVisibility) {
            visibility = "show";
        }
    
        return (<div id="menu" onMouseDown={this.props.handleMouseDown} className={visibility}>
                <h1>Menu</h1>
                </div>);
        
    }
}

export default Settings;