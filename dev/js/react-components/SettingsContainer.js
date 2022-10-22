// REF : https://reactjs.org/docs/add-react-to-a-website.html
// REF : https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
'use strict';

const e = React.createElement;

class SettingsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { opened: false };
    
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
    }

    handleMouseDown = (e) => {
        this.toggleSettings();
        console.log("clicked")
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
        return [e(SettingsButton, {handleMouseDown : () => this.handleMouseDown, key:1}),
        e(Settings, {handleMouseDown : () => this.handleMouseDown, menuVisibility: this.state.opened, key:2})
        ];}
}


