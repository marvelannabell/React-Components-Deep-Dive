
import './App.css';
import MovieList from './components/MovieList';
 const movies= [
  {
    id: 1,
    title: 'Star Wars: The Last Jedi',
    year: 2017,
    genre: 'Action, Adventure, Fantasy',
    plot: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg'
  },
  {
    id: 2,
    title: 'Black Swan',
    year: 2010,
    genre: 'Drama, Thriller',
    plot: 'A committed dancer wins the lead role in a production of Tchaikovskys only to find herself struggling to maintain her sanity.',
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg'
  },
  {
    id: 3,
    title: 'Fight Club',
    year: 1999,
    genre: 'Drama',
    plot: 'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.',
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg'
  },
  {
    id: 4,
    title: 'The Godfather: Part II',
    year: 1974,
    genre: 'Crime, Drama',
    plot: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    poster: 'https://m.media-amazon.com/images/I/714ZOEiVNtL._RI_.jpg'
  }
]
function App() {
  return (
    <div >
      <h1>Movie Collection</h1>
      <MovieList  movies={movies} />
      
    </div>
  );
}

export default App;
