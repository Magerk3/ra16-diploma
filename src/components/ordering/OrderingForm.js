export const OrderingForm = ({ handleSubmit }) => {
    return (
        <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div
                className="card"
                style={{ maxWidth: "30rem", margin: "0 auto" }}
            >
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="phone">Телефон</label>
                        <input
                            className="form-control"
                            id="phone"
                            placeholder="Ваш телефон"
                        ></input>
                    </div>
                    <div className="form-group">
                        <label for="address">Адрес доставки</label>
                        <input
                            className="form-control"
                            id="address"
                            placeholder="Адрес доставки"
                        ></input>
                    </div>
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="agreement"
                        ></input>
                        <label className="form-check-label" for="agreement">
                            Согласен с правилами доставки
                        </label>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary">
                        Оформить
                    </button>
                </form>
            </div>
        </section>
    );
};
