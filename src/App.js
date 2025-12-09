import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-display text-[#111813] dark:text-gray-200">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/catalogo" element={<Catalog />} />
            {/* Aquí más adelante agregamos otras páginas con tus otros HTML */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
