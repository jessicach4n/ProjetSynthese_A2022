'use strict';

class Settings extends React.Component {
    render() {
        let visibility = "hide";
    
        if (this.props.menuVisibility) {
            visibility = "show";
        }
    
        return (e('div', 
        {id:"menu", onMouseDown : (e) => this.props.handler(e), className: visibility}, 
        e('h1', null, 'MENU')));
    }
}