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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="animation" element={<Animation />} />
          <Route path="a-propos" element={<About />} />
          <Route path="partages" element={<Shares />} />
          <Route path="profil" element={<Profile />} />
          <Route path="deconnexion" element={<Home />} />
          <Route path="connexion" element={<Login />} />
          <Route path="register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
