import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./features/cart/Cart";
import { Catalog } from "./features/catalog/Catalog";
import { About } from "./components/About";
import { MainPage } from "./components/MainPage";
import { Page404 } from "./components/Page404";
import { ProductPage } from "./features/productPage/ProductPage";
import { Menu } from "./features/menu/Menu";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

import { Banner } from "./components/Banner";



function App() {
    return (
        <Router>
            <div className="App">
                <Menu />
                <main className="container">
                    <div className="row">
                        <div className="col">
                            <Banner />
                            <Routes>
                                <Route
                                    path="/"
                                    exact
                                    element={<MainPage />}
                                ></Route>

                                <Route
                                    path="/about"
                                    element={<About />}
                                ></Route>
                                <Route
                                    path="/products/:prdId"
                                    element={<ProductPage />}
                                ></Route>
                                <Route path="/cart" element={<Cart />}></Route>
                                <Route
                                    path="/contacts"
                                    element={<Contacts />}
                                ></Route>
                                <Route path="*" element={<Page404 />}></Route>
                                <Route
                                    path=":catId"
                                    element={<MainPage />}
                                ></Route>
                                <Route
                                    path="/catalog/:catId?"
                                    element={<Catalog isCatalogPage={true} />}
                                ></Route>
                            </Routes>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
