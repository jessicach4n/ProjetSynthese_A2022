import '../css/index.css'
import CardHolder from './components/CardHolder.js';

function Shares() {
  return (
    <div className="Shares">
        <h1>Les partages</h1>
        <CardHolder page={"shares"}/>
    </div>
  );
}

export default Shares;
