import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home";
import Calcul from "./views/Calcul/Calcul";
import MakeCalcul from "./views/Calcul/MakeCalcul";
import Session from "./views/Session/Session";
import NotFound from "./views/NotFound/NotFound";
import Note from "./views/Note/Note";

import NavBar from "./components/NavBar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calcul/" element={<Calcul />} />
        <Route path="/calcul/addition" element={<MakeCalcul op="+" />} />
        <Route path="/calcul/substraction" element={<MakeCalcul op="-" />} />
        <Route path="/calcul/multiplication" element={<MakeCalcul op="*" />} />
        <Route path="/calcul/division" element={<MakeCalcul op="/" />} />
        <Route path="/session" element={<Session />} />
        <Route path="/note" element={<Note />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
