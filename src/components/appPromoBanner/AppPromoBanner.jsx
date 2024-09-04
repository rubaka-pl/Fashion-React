import './appPromoBanner.css'
import appstore from '../../img/icons/app-store.png'
import google from '../../img/icons/google-play.png'
import vouchersImg from '../../img/images/vouchers-img.png'
const AppPromoBanner = () => {
    return (
        <section className="app-promo-banner">
            <div className="container">
                <div className="voucher__container">
                    <div className="app-download-banner">
                        <h2 className="app-promo-banner__title title-2">DOWNLOAD APP & GET THE VOUCHER!</h2>
                        <p className="app-promo-banner__description ">Get 30% off for first transaction using
                            Rondovision mobile app for now.</p>
                        <div className="app-promo-banner__button-container">
                            <a href="#!" className="app-promo-banner__appstore-button"><img src={appstore} alt="appstore" /></a>
                            <a href="#!" className="app-promo-banner__google-button"><img src={google} alt="google" /></a>
                        </div>
                    </div>
                    <img src={vouchersImg} alt="voucher" />
                </div>
            </div>
        </section>
    );
}

export default AppPromoBanner;