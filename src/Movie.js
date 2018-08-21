import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

/*
class Movie extends Component{
	
	static propTypes = {
		title: PropTypes.string,
		poster: PropTypes.string
	}
	
	render(){
		console.log(this.props);
		return(
			<div>
				<MoviePoster poster={this.props.poster} />
				//<h1>hello this is a movie</h1>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}
*/

function Movie({title, poster, genres, synopsis}){
	return(
			<div className="Movie">
				<div className="Movie__Columns">
					<MoviePoster poster={poster} alt={title} />
				</div>
				<div className="Movie__Columns">
					<h1>{title}</h1>
					<div className="Movie__Genres">
						{genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
					</div>
					<p className="Movie__Synopsis">
						{synopsis}
					</p>
				</div>
				
			</div>
		)
}

/*
class MoviePoster extends Component{
	render(){
		return(
			//<img src="http://movie.phinf.naver.net/20141013_278/1413163340153RFgde_JPEG/movie_image.jpg?width=200"/>
			<img src= {this.props.poster}/>
		)
	}
}
*/


function MoviePoster({poster, alt}){
	return <img src= {poster} alt={alt} title={alt} className="Movie__Poster"/>
}

function MovieGenre({genre}){
	return (
		<span className="Movie__Genre">{genre} </span>
	)
}

Movie.propTyes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired,
	synopsis: PropTypes.string.isRequired
}

MoviePoster.propTyes ={
	poster : PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired
}

MovieGenre.propType = {
	genre : PropTypes.string.isRequired
}

export default Movie;