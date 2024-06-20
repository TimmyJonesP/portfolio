import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./Router";
import { NavBar } from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
