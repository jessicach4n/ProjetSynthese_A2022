// REF : https://reactjs.org/docs/add-react-to-a-website.html
// REF : https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
'use strict';

class SettingsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { opened: false };
    
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
    }

    handleMouseDown = (e) => {
        this.toggleSettings();
        e.stopPropagation();
    }

    toggleSettings = () => {
        this.setState (
            {
                opened: !this.state.opened
            }
        );
    }

     // Passing a property called handle to SettingsButton
    render() {
        return [e(SettingsButton, {handler : this.handleMouseDown, key:1}),
            e(Settings, {handler : this.handleMouseDown, menuVisibility: this.state.opened, key:2})
        ]
    }
}

const container = document.querySelector('#settings-container');
const root = ReactDOM.createRoot(container);
root.render(e(SettingsContainer));


