import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Basket } from "./components/Basket";
import { Catalog } from "./features/catalog/Catalog";
import { About } from "./components/About";
import { MainPage } from "./components/MainPage";
import { Page404 } from "./components/Page404";
import { ProductPage } from "./features/productPage/ProductPage";
import { Menu } from "./features/menu/Menu";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { selectCategories } from "./features/catalog/catalogSlice";
import { Banner } from "./components/Banner";

import "./App.css";
import { useSelector } from "react-redux";

function App() {
    const categories = useSelector(selectCategories);

    return (
        <Router>
            <div className="App">
                <Menu />
                <main className="container">
                    <div className="row">
                        <div className="col">
                            <Banner />
                        </div>
                    </div>
                </main>

                <Routes>
                    <Route path="/" exact element={<MainPage />}></Route>

                    <Route path="/about" element={<About />}></Route>
                    <Route
                        path="/catalog/:prdId"
                        element={<ProductPage />}
                    ></Route>
                    <Route path="/basket" element={<Basket />}></Route>
                    <Route path="/contacts" element={<Contacts />}></Route>
                    <Route path="*" element={<Page404 />}></Route>
                    <Route path=":catId" element={<MainPage />}></Route>
                    <Route
                        path="/catalog/:catId?"
                        element={<Catalog isCatalogPage={true} />}
                    ></Route>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
