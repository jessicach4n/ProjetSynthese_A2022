import React, { Component } from "react";
import '../../css/index.css'
import '../../css/profile.css'
import * as myConstants from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

class StatsUser extends Component {
    constructor(props) {
      super(props);
      this.state = {count: 0}
    }
    // REF : https://reactjs.org/docs/react-component.html#componentdidmount
    // REF : https://www.geeksforgeeks.org/whats-the-difference-between-super-and-superprops-in-react/#:~:text=Super()%3A%20It%20is%20used,from%20one%20component%20to%20another.
    // REF : https://www.pluralsight.com/guides/react.js-br-tag-and-ajax-request

    componentDidMount() {
      let formData = new FormData();
      formData.append("action", myConstants.GET_COUNT);
      formData.append("session_id", window.sessionStorage.getItem("session_id"));
      fetch(myConstants.HOST + '/profile.php', {
        method: 'POST',
        body: formData
      }) 
      .then(res => res.json())
      .then(res => {
        console.log(res.count);
        this.setState({count: res.count})
      })
    }

    render() {
      return (
        <div className="stats">
          <div className="data" id="icon-profile">
            <div><FontAwesomeIcon icon={faUser} size="5x"/></div>
            <div className="tag" id="stats-username">{myConstants.USERNAME}</div>
          </div>
          <div className="data" id="shared-anim">
            <div className="nb">{this.state.count}</div>
            <div className="tag">Animations partagées</div>
          </div>
        </div>
      );
    }
  }

  export default StatsUser