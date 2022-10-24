// REF : https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm
// REF Installation node et npm : https://www.npmjs.com/package/react-jsx

'use strict';

class SettingsButton extends React.Component {
    render() {
    return e(
      'button', 
      {id:'button', onMouseDown : (e) => this.props.handler(e)}, 
      'Options'
    );
  }
}




