export default function Movie({
    title,
    year,
    plot,
    poster,
    genre
}){
    return(
        <article>
            <h3>{title}, {year}</h3>
            <main>
                <img src={poster} alt={title} />
                <p>{plot}</p>
            </main>
            <footer>
                <p>{genre}</p>
            </footer>
        </article>
    )
}