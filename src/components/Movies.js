import movies from "../data/movies";
import MovieItem from "./MovieItem";
import { useState } from "react";


const Movies = () => {

const [movieArr, setMovieArr] = useState(movies) //meine data in useState eingeben 

const [add, setAdd] = useState([])

const handleSortAZ = () => {   // funkrion fürs sortierem
    const newArr = [...movieArr]
    const sortedArr = newArr.sort((a,b) => {
    let aMovie = a.title 
    let bMovie = b.title
    if (aMovie < bMovie) {
        return -1;
    } else if (aMovie > bMovie) {
        return 1;
    } else {
        return 0;
    }
    })

    setMovieArr(sortedArr) // hier rufe ich es aus
}


const handleSortZA = () => {
    const newArr = [...movieArr]
    const sortArr = newArr.sort((a,b) => {
        let aMovie = a.title
        let bMovie = b.title
        if(aMovie < bMovie) {   // unbedingt nochmal anschauen 
            return 1;
        } else if (aMovie > bMovie) {
            return -1;
        }   else {
            return 0
        }
        
    })
    setMovieArr(sortArr) // hier rufe ich es auf
}

const handleSortYearNew = () => {
    const newArr = [...movieArr]
    const sortArr = newArr.sort((a,b) => {
        let aMovie = a.year
        let bMovie = b.year
        if(aMovie < bMovie) {
            return 1;
        } else if (aMovie > bMovie) {
            return -1;
        } else {
            return 0;
        }
    })
    setMovieArr(sortArr)
}

const handleSortYearOld = () => {
    const newArr = [...movieArr]
    const sortArr = newArr.sort((a,b) => {
        let aMovie = a.year
        let bMovie = b.year
        if (aMovie < bMovie) {
            return -1;
        } else if (aMovie > bMovie) {
            return 1;
        } else {
            return 0
        }
    })
    setMovieArr(sortArr)
}

const handleSortRating = () => {
    const newArr = [...movieArr]
    const sortArr = newArr.sort((a,b) => {
        let aMovie = a.rate
        let bMovie = b.rate
        if (aMovie < bMovie) {
            return 1;
        } else if (aMovie > bMovie) {
            return -1;
        } else {
            return 0
        }
    })
    setMovieArr(sortArr)
}

const addFilm = () => {
    const inputFilm = document.getElementById('inputFilm');
    setMovieArr([...movieArr, inputFilm.value]);
    inputFilm.value = '';
}

const data = movieArr.map((movie, i) => {
    return (
        <MovieItem 
        title={movie.title}
        year={movie.year}
        directior={movie.director}
        duration={movie.duration}
        rate={movie.rate}
        genre={movie.genre}
        key={i}
        />
    )
})

    return ( 
    <section>
        <button onClick={handleSortAZ}>A-Z</button>
        <button onClick={handleSortZA}>Z-A</button>
        <button onClick={handleSortYearNew}>Sort by Date Ascending</button>
        <button onClick={handleSortYearOld}>Sort by Date Ascending</button>
        <button onClick={handleSortRating}>Best Rate</button>
        <form action="#">
        <input type="text" name="inputFilm" id="inputFilm"  placeholder="Add new Film.."/>
        <input type="button" value="Add" id="addButton" onClick={addFilm} />
        </form>

        <div className="movie_grid">{data}</div>
    </section>

    );
}

export default Movies;