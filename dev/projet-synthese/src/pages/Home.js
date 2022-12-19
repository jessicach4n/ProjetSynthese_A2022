import '../css/index.css'
import '../css/home.css'
import '../css/shape.css'
import '../css/about.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-content">
        <div id="square"></div>
        <div id="polygon"></div>
        <div className="headings-content">
            <h1 className="nom-site">Générateur d'art météorologique</h1>
            <Link to="/animation">
              <button id='go-to-animation'>Voir animations</button>
            </Link>
        </div>
    </div>
  );
}

export default Home;
