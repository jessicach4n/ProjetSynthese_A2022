// REF : https://reactjs.org/docs/add-react-to-a-website.html
// REF : https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
// REF : https://rajdeep-das.medium.com/how-to-add-react-to-an-existing-website-or-web-project-11b598f989d3
// REF : https://reactjs.org/docs/introducing-jsx.html

import React, { Component } from "react";
import SettingsButton from "./SettingsButton";
import Settings from "./Settings";

class SettingsContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { opened: false };
    
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
    }

    handleMouseDown(e) {
        this.toggleSettings();
        console.log('clicked')
        e.stopPropagation();
    }

    toggleSettings() {
        this.setState (
            {
                opened: !this.state.opened
            }
        );
    }

    render() {
        return (
            <>
            <SettingsButton handleMouseDown={this.handleMouseDown}/>
            <Settings handleMouseDown={this.handleMouseDown} 
                    menuVisibility = {this.state.opened}/>
            </>
        );
    }
}

export default SettingsContainer;

// const container = document.querySelector('#settings-container');
// const root = ReactDOM.createRoot(container);
// root.render(e(SettingsContainer));


