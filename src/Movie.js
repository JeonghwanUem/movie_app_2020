import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({id,title,summary,poster,year,genres}){
return <div className ="movie">
    <img src ={poster} alt ={title} title ={title}/>
    <div className ="movieData">
    <h3 className ="movie_title" >{title}</h3>
    
    <h5 className = "movie_title">{year}</h5>
<ul className = "genres">{genres.map((genre,index)=>
<li key={index} className="genres__genre">{genre}</li>)}
</ul>
    <p className= "movie_summary">{summary}</p>
    </div>
</div>
}
//style={{backgroundColor:"red"}}
/**Movie.PropTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};*/

export default Movie;