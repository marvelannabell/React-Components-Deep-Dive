import Movie from "./Movie";
import React from "react";

export default function MovieList({
    movies,
}) {
    //1. If we pass one movie

    //const firstMovie = movies[0]
    // return (

    //     // 1st way
    //     // <Movie
    //     //     title={firstMovie.title}
    //     //     year={firstMovie.year}
    //     //     plot={firstMovie.plot}
    //     //     poster={firstMovie.poster}
    //     //     genre={firstMovie.genre}
    //     // />


    //     //spread in expression//
    //     <Movie {...firstMovie} />
    // )

    // 2.if we pass more than one movie
    
    // return[
    //     <Movie {...movies[0]} />,
    //     <Movie {...movies[1]} />,
    //     <Movie {...movies[2]} />, 
    //     <Movie {...movies[3]} />

    // ]


    // 3.Use for of loop
    // const movieElements=[];
    // for(const movie of movies){
    //     // movieElements.push(React.createElement(Movie, movie))
    //     movieElements.push(<li><Movie {...movie} /></li>)
    // }
    // return (
    //     <ul>
    //         {movieElements}
    //     </ul>
    // )

    // 3.Use map
    // const movieElements = movies.map(x => (<li><Movie {...x} /></li>))
    // return (
    //     <ul>
    //         {movieElements}
    //     </ul>
    // )

    // 4.or direct return array.map in JSX
     
  
    return (
        <ul>
            {movies.map(x => (<li><Movie {...x} /></li>))}
        </ul>
    )
};