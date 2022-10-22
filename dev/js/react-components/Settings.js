'use strict';

class Settings extends React.Component {
    render() {
        let visibility = "hide";
    
        if (this.props.menuVisibility) {
            visibility = "show";
        }
    
        return (e('div', 
        {id:"menu", onMouseDown : () => this.props.handleMouseDown, className: visibility}, 
        e('h1', null, 'MENU')));
    }
}