
export function Movies({ movieData }) {
    return (
    <div className="movies-app">
      <ul>
        {movieData.map(movie => (
        <div className="cart-content">
          <li key={movie.id}>
            <div className="cart">
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            </div>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </li>
          </div>
        ))}
      </ul>
      </div>
    );
  }