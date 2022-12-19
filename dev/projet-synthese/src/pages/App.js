import '../css/index.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import * as myConstants from './constants'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home/>} />
            <Route path="animation" element={<Animation/>} >
              <Route path="PolygonAlgorithm" element={<div/>}/>
              <Route path="TriangleBezierCollisionAlgorithm" element={<div/>}/>
              <Route path="BreathingCircleAlgorithm"  element={<div/>}/>
            </Route>
            <Route path="loading" element={myConstants.IS_LOGGED_IN ? (<Loading />) : (<Navigate replace to={"/"}/>)}/>
            <Route path="a-propos" element={<About />} />
            <Route path="partages" element={myConstants.IS_LOGGED_IN ? (<Shares />) : (<Navigate replace to={"/"}/>)} />
            <Route path="profil" element={myConstants.IS_LOGGED_IN ? (<Profile />) : (<Navigate replace to={"/"}/>)} />
            <Route path="deconnexion" element={<Home />} />
            <Route path="connexion" element={!myConstants.IS_LOGGED_IN ? (<Login />) : (<Navigate replace to={"/"}/>)} />
            <Route path="inscription" element={!myConstants.IS_LOGGED_IN ? (<Register />) : (<Navigate replace to={"/"}/>)} />
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
