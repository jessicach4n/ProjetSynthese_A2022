import React, { Component } from "react";
import '../../css/index.css'
import '../../css/stats.css'


class StatsUser extends Component {
    constructor(props) {
      super(props);

    }
    // REF : https://reactjs.org/docs/react-component.html#componentdidmount
    // REF : https://www.geeksforgeeks.org/whats-the-difference-between-super-and-superprops-in-react/#:~:text=Super()%3A%20It%20is%20used,from%20one%20component%20to%20another.
    // REF : https://www.pluralsight.com/guides/react.js-br-tag-and-ajax-request

    // componentDidMount() {
    //   fetch("http://localhost:8888/profile.php")
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    // }

    render() {
      return (
        <div className="stats">
          <div className="data" id="icon-profile">
            <div><img src="https://static.vecteezy.com/system/resources/previews/001/192/291/original/circle-png.png" alt=""/></div>
            <div className="tag" id="stats-username">Nom utilisateur</div>
          </div>
          <div className="data" id="gen-anim">
            <div className="nb">01</div>
            <div className="tag">Animations générées</div>
          </div>
          <div className="data" id="shared-anim">
            <div className="nb">01</div>
            <div className="tag">Animations partagées</div>
          </div>
          <div className="data" id="likes">
            <div className="nb">01</div>
            <div className="tag">Coups de coeur</div>
          </div>
        </div>
      );
    }
  }

  export default StatsUser