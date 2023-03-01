export default function Movie({
    id,
    title,
    year,
    plot,
    poster,
    genre,
    onMovieDel
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
                <button onClick={()=>onMovieDel(id)}>Delete</button>
            </footer>
        </article>
    )
}
