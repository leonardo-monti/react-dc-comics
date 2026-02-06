export default function ComicCard({ comic }) {
    return (
        <div className="comic-card">
            <img src={comic.thumb} alt={comic.series} />
            <h5>{comic.series}</h5>
        </div>
    )
}