import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/rootes"
import "./index.css";
import Collection from "./Views/Collection";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Contact from "./Views/Contact";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { CartProvider } from "./cartProvider";

//ReactDOM.createRoot(document.getElementById("root")).render(<App />);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CartProvider>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Product/>}/>
                    <Route path="/collection" element={<Collection/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/odyssée" element={<h1>Odyssée</h1>}/>
                    <Route path="/payment" element={<h1>Payment</h1>}/>
                    
                </Routes>
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>
);