import '../css/index.css'
import '../css/home.css'

function Home() {
  return (
    <div className="home-content">
        <div className="headings-content">
            <h1 className="nom-site">Générateur d'art météorlogique</h1>
            <h1>L'expérience commence</h1>
        </div>
        <div className="go-to-animation">
            <span id="circle"></span>
            <a id="go-to-animation" href="animation">ici</a>
        </div>
    </div>
  );
}

export default Home;
