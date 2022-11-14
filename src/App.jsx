import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import NavBar from "./components/NavBar";
import CategorieList from "./pages/Categories/CategorieList";
import CategorieDetails from "./pages/Categories/CategorieDetails";
import CategorieEdit from "./pages/Categories/CategorieEdit";
import CategoryCreate from "./pages/Categories/CategorieCreate";
import ProductsList from "./pages/Products/ProductsList";
import ProductDetails from "./pages/Products/ProductDetails";
import ProductEdit from "./pages/Products/ProductEdit";
import ProductCreate from "./pages/Products/ProductCreate";
import CommandesList from "./pages/Commandes/CommandesList";
import CommandesDetails from "./pages/Commandes/CommandesDetails";
import CommandeEdite from "./pages/Commandes/CommandeEdite";
import CommandeCreate from "./pages/Commandes/CommandeCreate";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CategorieList />} />
        <Route path="/categorie_details/:id" element={<CategorieDetails />} />
        <Route path="/categorie_edit" element={<CategorieEdit />} />
        <Route path="/categorie_nouvelle" element={<CategoryCreate />} />
        <Route path="/products_list" element={<ProductsList />} />
        <Route path="/product_details/:id" element={<ProductDetails />} />
        <Route path="/product_edit" element={<ProductEdit />} />
        <Route path="/product_create" element={<ProductCreate />} />
        <Route path="/commandes_list" element={<CommandesList />} />
        <Route path="/commandes_details/:id" element={<CommandesDetails />} />
        <Route path="/commandes_edite" element={<CommandeEdite />} />
        <Route path="/commandes_create" element={<CommandeCreate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
