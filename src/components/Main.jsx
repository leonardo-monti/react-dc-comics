import { comics } from "../data/comics.js";

export default function Main() {
    return (
        <main className="main">

            <div className="comics-container">
                {comics.map((comic) => (
                    <div key={comic.id} className="comic-card">
                        <img src={comic.thumb} alt={comic.title} />
                        <h5>{comic.title}</h5>
                    </div>
                ))}
            </div>

            <button className="load-more">LOAD MORE</button>


        </main>
    )
}
