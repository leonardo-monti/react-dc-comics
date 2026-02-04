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
                style={{ backgroundImage: `url(${dcLogoBg})` }}
            >
                {Object.entries(footerLinks).map(([title, links]) => (
                    <div key={title} className="footer-column">
                        <h4>{title}</h4>
                        <ul>
                            {links.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="footer-bottom" style={{ backgroundColor: "#555" }}>
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
    );
}

