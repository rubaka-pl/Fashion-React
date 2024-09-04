import Favourite from "./components/Favourite/Favourite";
import AppPromoBanner from "./components/appPromoBanner/AppPromoBanner";
import Arrivals from "./components/arrivals/Arrivals";
import Brands from "./components/brands/Brands";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Newsletter from "./components/newsletter/Newsletter";
import Promo from "./components/promo/Promo";
import promoImg from './img/images/header-img.jpg';
import promoImg2 from './img/images/promo-img.png';
function App() {
  const promoOneProps = {
    imageSrc: promoImg,
    title: (
      <>
        <span className='highlight'>
          <span>LET'S &#32;</span>
        </span>
        EXPLORE
        <span className='highlight highlight--yellow '>
          <span>UNIQUE &#32;</span>
        </span>
        CLOTHES
      </>
    ),
    description: "Live for influential and innovative fashion!",
    buttonText: "Shop Now"
  };

  const promoTwoProps = {
    reverse: true,
    imageSrc: promoImg2,
    title: (
      <>
        <span className='highlight'>
          <span>PAYDAY</span>
        </span>
        <span className="promo__title-sale">SALE NOW</span>
      </>
    ),
    description: "Spend minimal $100 get 30% off voucher code for your next purchase",
    date: "1 June - 10 June 2021",
    terms: "*Terms & Conditions apply",
    buttonText: "Shop Now",
    disableBefore: true
  };

  return (
    <div className="App">
      <Header />
      <Promo {...promoOneProps} />
      <Brands />
      <Arrivals />
      <Promo {...promoTwoProps} />
      <Favourite />
      <AppPromoBanner />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
