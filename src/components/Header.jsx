import logo from "../assets/img/dc-logo.png";

export default function Header() {
    const navLinks = [
        "CHARACTERS",
        "COMICS",
        "MOVIES",
        "TV",
        "GAMES",
        "COLLECTIBLES",
        "VIDEOS",
        "FANS",
        "NEWS",
        "SHOP",
    ];

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="DC Logo" />
            </div>

            <nav className="nav">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>{link}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
