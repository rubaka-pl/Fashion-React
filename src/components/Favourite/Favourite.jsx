
import './favourite.css';
import TeenCard from "../teenCard/TeenCard";
import fav01Img from '../../img/images/promo-01.jpg';
import fav02Img from '../../img/images/promo-02.jpg';

const Favourite = () => {
    return (
        <section className="teenFavourite">
            <div className="container">
                <div className="teenFavourite__header">
                    <h2 className="title-2">
                        YOUNG’S FAVOURITE
                    </h2>
                </div>
                <div className="teenFavourite__cards">
                    <TeenCard title='Trending on instagram' img={fav01Img} />
                    <TeenCard title='All Under $40' img={fav02Img} />
                </div>
            </div>
        </section>
    );
}

export default Favourite;