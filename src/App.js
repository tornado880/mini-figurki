import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Towar from "./pages/Towar";

import ONas from "./pages/ONas";
import Contact from "./pages/Contact";

import Admin from "./pages/Admin";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import IPChecker from "./components/IPChecker";  // Import the IPChecker component

import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <IPChecker /> 

                <Navbar />

                <Routes>
                    <Route path="/Sklep" element={<Home />} />
                    <Route path="/Sklep/Koszyk" element={<Buy />} />
                    <Route path="/Sklep/Towar" element={<Towar />} />

                    <Route path="/Sklep/O_Nas" element={<ONas />} />
                    <Route path="/Sklep/Kontact" element={<Contact />} />

                    <Route path="/Sklep/Admin" element={<Admin />} />

                    <Route path="*" element={<Home />} />  {/* Fallback route for unmatched paths */}
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
