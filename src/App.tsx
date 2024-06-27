import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./Router";
import { NavBar } from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Contact from "./pages/contact/Contact"; // Asegúrate de importar tu componente de Contacto

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        {/* Ruta específica para /contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Ruta para todas las demás páginas */}
        <Route
          path="*"
          element={
            <>
              <AppRouter />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
