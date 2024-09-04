import './footer.css'
import facebook from '../../img/socials/fb.svg'
import instagram from '../../img/socials/inst.svg'
import twitter from '../../img/socials/tw.svg'
import linkedin from '../../img/socials/in.svg'
const Footer = () => {
    return (<section className="footer">
        <div className="container">
            <div className="wrapper__footer">
                <div className="footer__row">
                    <div className="footer__logo">
                        <span>Fashion</span>
                    </div>
                    <div className="footer__desc">
                        Complete your style with awesome clothes from us.
                    </div>
                    <div className="footer__social-links">
                        <ul className="footer__social-links-items">
                            <li className="footer__social-links-item"><a href="#1"><img src={facebook} alt="facebook" /></a></li>
                            <li className="footer__social-links-item"><a href="#1"><img src={instagram} alt="instagram" /></a></li>
                            <li className="footer__social-links-item"><a href="#1"><img src={twitter} alt="twitter" /></a></li>
                            <li className="footer__social-links-item"><a href="#1"><img src={linkedin} alt="linkedin" /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__nav">
                    <div className="footer__section">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#support">Support</a></li>
                            <li><a href="#careers">Careers</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#share-location">Share Location</a></li>
                            <li><a href="#orders-tracking">Orders Tracking</a></li>
                            <li><a href="#size-guide">Size Guide</a></li>
                            <li><a href="#faqs">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#terms">Terms & Conditions</a></li>
                            <li><a href="#privacy-policy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section >);
}

export default Footer;