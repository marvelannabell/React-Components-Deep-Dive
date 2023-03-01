import { useEffect } from "react"

export default function Movie({
    id,
    title,
    year,
    plot,
    poster,
    genre,
    onMovieDel
}) {
    useEffect(() => {
        console.log(`Movie ${title} - mounted`);

        return () => {
            console.log(`Movie ${title} - unmounted`);
        }
    }, []);
 
    return (
        <article>
            <h3>{title}, {year}</h3>
            <main>
                <img src={poster} alt={title} />
                <p>{plot}</p>
            </main>
            <footer>
                <p>{genre}</p>
                <button onClick={() => onMovieDel(id)}>Delete</button>
            </footer>
        </article>
    )
}
