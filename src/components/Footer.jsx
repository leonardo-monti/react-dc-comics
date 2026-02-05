import { footerLinks } from "../data/footerLinks";

import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";
import pinterest from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";
import dcLogoBg from "../assets/img/dc-logo-bg.png";
import footerBg from "../assets/img/footer-bg.jpg";

export default function Footer() {
    return (
        <footer className="footer">

            <div
                className="footer-top"
                style={{ backgroundImage: `url(${footerBg})` }}
            >
                <img src={dcLogoBg} alt="DC Logo Big" className="dc-logo-big" />

                {footerLinks.map((col, index) => (
                    <div key={index} className="footer-column">
                        <h4>{col.title}</h4>
                        <ul>
                            {col.links.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="footer-link">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="footer-bottom">
                <button className="signup-button">SIGN-UP NOW!</button>
                <div className="social-links">
                    <img src={facebook} alt="Facebook" />
                    <img src={twitter} alt="Twitter" />
                    <img src={youtube} alt="YouTube" />
                    <img src={pinterest} alt="Pinterest" />
                    <img src={periscope} alt="Periscope" />
                </div>
            </div>
        </footer>
    )
}
