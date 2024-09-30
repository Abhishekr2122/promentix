import "./app.css";
import Aboutus from "./components/Aboutus";

import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import Work from "./components/Work";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Work />
      <Portfolio />
      <Aboutus />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
