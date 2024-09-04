import './promo.css'


const Promo = ({ reverse, imageSrc, title, description, date, terms, buttonText, disableBefore }) => {
    return (
        <section className={`promo ${disableBefore ? 'promo--no-before' : ''}`}>
            <div className="container">
                <div className={`promo__content promo__content__1 ${reverse ? 'promo__content--reverse' : ''}`}>
                    <div className="promo__text">

                        <div className="promo__title">
                            {title}
                        </div>

                        <div className={`promo__desc ${reverse ? 'promo__desc--reverse' : ''}`}>
                            {description}
                        </div>

                        {date && <strong className="open__hours">{date}</strong>}
                        {terms && <p className='terms'>{terms}</p>}
                        <div className="promo__btn-wrapper">
                            <a href="#" className='promo__btn'>
                                {buttonText}
                            </a>
                        </div>
                    </div>
                    <div className="promo__img">
                        <img src={imageSrc} alt="Promo" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;