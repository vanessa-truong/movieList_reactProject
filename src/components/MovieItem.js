
const MovieItem = (props) => {
    return ( 
        <div>
            <div>
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            {props.genre.map((elt) => 
            <p className="genre_font">{elt}</p>)}
        </div>
        </div>
    );
}

export default MovieItem;


