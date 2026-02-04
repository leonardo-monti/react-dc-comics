import digital from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import subscription from "../assets/img/buy-comics-subscriptions.png";
import locator from "../assets/img/buy-comics-shop-locator.png";
import visa from "../assets/img/buy-dc-power-visa.svg";

export default function BlueBanner() {
    const bannerItems = [
        { text: "DIGITAL COMICS", icon: digital },
        { text: "DC MERCHANDISE", icon: merchandise },
        { text: "SUBSCRIPTION", icon: subscription },
        { text: "COMIC SHOP LOCATOR", icon: locator },
        { text: "DC POWER VISA", icon: visa },
    ];

    return (
        <section className="blue-banner">
            {bannerItems.map((item, index) => (
                <div key={index} className="banner-item">
                    <img src={item.icon} alt={item.text} className="banner-icon" />
                    <span>{item.text}</span>
                </div>
            ))}
        </section>
    );
}
