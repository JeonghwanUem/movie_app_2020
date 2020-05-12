import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({id,title,summary,poster,year}){
return <div class ="movie">
    <img src ={poster} alt ={title} title ={title}/>
    <div class ="movieData">
    <h3 class ="movie_title" >{title}</h3>
    
    <h5 class = "movie_title">{year}</h5>
    <p class= "movie_summary">{summary}</p>
    </div>
</div>
}
//style={{backgroundColor:"red"}}
/**Movie.PropTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired
};*/

export default Movie;