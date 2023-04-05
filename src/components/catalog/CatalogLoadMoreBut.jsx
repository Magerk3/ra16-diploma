import { useDispatch } from "react-redux";

export const CatalogLoadMoreBut = ({ catId, fetchMore }) => {
    const dispatch = useDispatch();
    return (
        <div className="text-center">
            <button
                className="btn btn-outline-primary"
                onClick={() => dispatch(fetchMore(catId))}
            >
                Загрузить ещё
            </button>
        </div>
    );
};
