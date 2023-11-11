import { movies } from '../movieDummy';
import Movie from '../Component/Movie/Movie';

export default function Movies({ title, poster_path, vote_average, overview}) {
  return (
    <div >
      <div className="movies-container">
        {
          movies.results.map((item) => {
            return (
              <Movie
               title = {item.title}
               poster_path={item.poster_path}
               vote_average={item.vote_average}
               overview={item.overview}
               />
            )
          })
        }
      </div>
    </div>
  );
}
  
