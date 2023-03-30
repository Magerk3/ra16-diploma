import { Bestsellers } from "../features/bestsellers/Bestsellers";
import { Catalog } from "../features/catalog/Catalog";
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
