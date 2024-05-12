
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import pages
import Home from "./pages/Home/Home"
import Market from "./pages/Market/Market";
import PersonalArea from "./pages/PersonalArea/PersonalArea";
import Rules from "./pages/Rules/Rules";
import GregTech from "./pages/Servers/GregTech/GregTech";
import HiTech from "./pages/Servers/HiTech/HiTech";
import TechnoMagic from "./pages/Servers/TechnoMagic/TechnoMagic";
import StartPlay from "./pages/StartPlay/StartPlay";
import Servers from "./pages/Servers/Servers";

//import components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";




function App() {
  return (
    <div className="App">

        <Router>
            <Navbar></Navbar>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/market" element={<Market />}></Route>
                <Route path="/personalArea" element={<PersonalArea />}></Route>
                <Route path="/rules" element={<Rules />}></Route>
                <Route path="/servers/gregTech" element={<GregTech />}></Route>
                <Route path="/servers/technoMagic" element={<TechnoMagic />}></Route>
                <Route path="/servers/hiTech" element={<HiTech />}></Route>
                <Route path="/startPlay" element={<StartPlay />}></Route>
                <Route path="/servers" element={<Servers />}></Route>
            </Routes>

            <Footer></Footer>
        </Router>


    </div>
  );
}

export default App;
