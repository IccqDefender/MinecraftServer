
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";


function App() {
  return (
    <div className="App">

        <Navbar></Navbar>

        <div className="wrapper">
            <div className="content">
                <Header></Header>
            </div>
        </div>

        <Footer></Footer>

    </div>
  );
}

export default App;
