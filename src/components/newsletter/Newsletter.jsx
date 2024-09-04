import './newsletter.css'

const Newsletter = () => {
    return (<section className="newsletter">
        <div className="container container__newsletter">
            <div className="wrapper__newsletter">
                <h2 className="newsletter__title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
                <p className="newsletter__text">Type your email down below and be young wild generation</p>
                <form className="newsletter__form">
                    <input
                        type="email"
                        placeholder="Add your email here"
                        className="newsletter__input"
                    />
                    <button type="submit" className="newsletter__button">Send</button>
                </form>
            </div>
        </div>
    </section>
    );
}

export default Newsletter;