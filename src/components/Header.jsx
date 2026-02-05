import { navLinks } from "../data/navLinks";
import logo from "../assets/img/dc-logo.png";

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="DC Logo" />
            </div>

            <nav className="nav">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}


