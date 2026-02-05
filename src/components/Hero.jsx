import heroImage from "../assets/img/jumbotron.jpg";

export default function Hero() {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <button className="hero-button">CURRENT SERIES</button>
        </section>
    );
}
