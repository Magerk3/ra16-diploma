import { useNavigate } from "react-router-dom"

export const OrderingSuccess = () => {
    const navigate = useNavigate();

    return (
        <section className="order">
                    <h2 className="text-center">Заказ успешно размещен</h2>
                    <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
                        <button
                            onClick={() => navigate('/')}
                            className="btn btn-outline-primary btn-center"
                        >
                            Продолжить покупки
                        </button>
                    </div>
                </section>
    )
}