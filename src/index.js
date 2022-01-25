import React from 'react';
import { render } from "react-dom";
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";

import './index.css';
import App from './App';

import Login from './pages/Login';
import Author from './pages/Author';
import Home from './pages/Home';
import Livros from './pages/Livros';
import Editores from './pages/Editores';
import Categorias from './pages/Categorias';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/authors" element={<Author />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/editores" element={<Editores />} />
        <Route path="/categorias" element={<Categorias />} />

        <Route path="*" element={
          <h4>Página não encontrada!</h4>
        } />
      </Route>
      <Route path="/login" element={<Login />} />

    </Routes>
  </BrowserRouter>,
  rootElement
);

