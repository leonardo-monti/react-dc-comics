import { comics } from "../data/comics.js";
import ComicCard from "./ComicCard.jsx";

export default function Main() {
    return (
        <main className="main">
            <div className="comics-container">

                {comics.map((comic) => (
                    <ComicCard key={comic.id} comic={comic} />
                ))}

            </div>

            <button className="load-more">LOAD MORE</button>

        </main>
    )
}
