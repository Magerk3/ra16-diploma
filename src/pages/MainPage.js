import { Bestsellers } from "../components/bestsellers/Bestsellers";
import { Catalog } from "../components/catalog/Catalog";
export const MainPage = () => {
    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <Bestsellers />
                    <Catalog />
                </div>
            </div>
        </main>
    );
};
