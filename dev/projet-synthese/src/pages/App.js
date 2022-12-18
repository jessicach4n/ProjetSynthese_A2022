import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import Shares from "./Shares"
import About from "./About"
import Animation from "./Animation"
import Navigation from './components/Navigation';
import Loading from "./Loading";
import NotFound from "./NotFound";
import '../css/index.css'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home/>} />
            <Route path="animation" element={<Animation/>} >
              <Route path="LineRotationAlgorithm" element={<div/>}/>
              <Route path="TriangleBezierCollisionAlgorithm" element={<div/>}/>
              <Route path="BreathingCircleAlgorithm"  element={<div/>}/>
              <Route path="TestAlgorithm" />
            </Route>
            <Route path="loading" element={<Loading />}/>
            <Route path="a-propos" element={<About />} />
            <Route path="partages" element={<Shares />} />
            <Route path="profil" element={<Profile />} />
            <Route path="deconnexion" element={<Home />} />
            <Route path="connexion" element={<Login />} />
            <Route path="register" element={<Register/>} />
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
