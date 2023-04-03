import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./components/cart/Cart";
import { Catalog } from "./components/catalog/Catalog";
import { About } from "./pages/About";
import { MainPage } from "./pages/MainPage";
import { Page404 } from "./pages/Page404";
import { ProductPage } from "./components/productPage/ProductPage";
import { Menu } from "./components/menu/Menu";
import { Contacts } from "./pages/Contacts";
import { Footer } from "./pages/Footer";

import { Banner } from "./pages/Banner";



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
