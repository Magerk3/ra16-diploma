import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./components/cart/Cart";
import { Catalog } from "./components/catalog/Catalog";
import { About } from "./staticPages/About";
import { MainPage } from "./components/mainPage/MainPage";
import { Page404 } from "./staticPages/Page404";
import { ProductPage } from "./components/productPage/ProductPage";
import { Menu } from "./components/menu/Menu";
import { Contacts } from "./staticPages/Contacts";
import { Footer } from "./staticPages/Footer";
import { Banner } from "./staticPages/Banner.jsx";
import { useDispatch } from "react-redux";
import { resetClicks } from "./app/store/searchBarSlice";

function App() {
    const dispatch = useDispatch();

    const hideMenuSearchBar = () => {
        dispatch(resetClicks());
    };

    return (
        <Router basename="/ra16-diploma">
            <div className="App">
                <Menu />
                <main className="container" onClick={hideMenuSearchBar}>
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
                                    path="/:catId"
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
