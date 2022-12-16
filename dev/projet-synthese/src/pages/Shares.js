import '../css/index.css'
import CardHolder from './components/CardHolder.js';
import * as myConstants from './constants.js'

function Shares() {
  if (!myConstants.IS_LOGGED_IN)
  {
      window.location = "/"
      return
  }
  return (
    <div className="Shares">
        <h1>Les partages</h1>
        <CardHolder page={"shares"}/>
    </div>
  );
}

export default Shares;
