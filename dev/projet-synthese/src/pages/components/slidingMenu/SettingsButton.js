// REF : https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
// REF Installation node et npm : https://www.npmjs.com/package/react-jsx

import React, { Component } from "react";

class SettingsButton extends Component {
    render() {
    return (
      <button id='button' onMouseDown={this.props.handleMouseDown}>
        Options
      </button>
    );
  }
}

export default SettingsButton;




