import axios from 'axios'
import { useEffect, useState } from 'react'
import Movies from './Movies'
import './ListStyle.css'


function MovieData() {

    let [movies, setMovies] = useState([])


    useEffect(() => {
      // axios.get("https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c")
      axios.get('https://dummyjson.com/products')
      .then((result)=> {
        // console.log(result.data.products);
        setMovies([...result.data.products])
      })
    }, [])
    // console.log(movies);
    
    
  return (
      <>
        <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginTop: '40px', height: ''}}>
        {movies.map(value => {return <div key={value.id}> <Movies data={value} /> </div>
        })}
      </div>
      </>
    )
}

export default MovieData