import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const moviesTitle = [
	"Matrix",
	"Full Metal Jacket",
	"Movie 2",
	"Old Body"
]

const moviesImage = [
	"https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
	"https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
	"https://i.ytimg.com/vi/oA_NPkJHDDA/maxresdefault.jpg",
	"http://movie.phinf.naver.net/20141013_278/1413163340153RFgde_JPEG/movie_image.jpg?width=200"
]

//const movies =[
//	{
//		title : "Matrix",
//		poster : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
//	},
//	{
//		title : "Full Metal Jacket",
//		poster : "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
//	},
//	{
//		title : "Movie 2",
//		poster : "https://i.ytimg.com/vi/oA_NPkJHDDA/maxresdefault.jpg"
//	},
//	{
//		title : "Old Body",
//		poster : "http://movie.phinf.naver.net/20141013_278/1413163340153RFgde_JPEG/movie_image.jpg?width=200"
//	}
//]

class App extends Component {
	
	//componentWillMount(){
	//	console.log('componentWillMount')
	//}
	//
	
	state = {
		
	}
	
	componentDidMount(){
		/*
		//console.log('did mount')
		
		setTimeout(() => {
			this.setState({
				movies: [
			{
				title : "Matrix",
				poster : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
			},
			{
				title : "Full Metal Jacket",
				poster : "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
			},
			{
				title : "Movie 2",
				poster : "https://i.ytimg.com/vi/oA_NPkJHDDA/maxresdefault.jpg"
			},
			{
				title : "Old Body",
				poster : "http://movie.phinf.naver.net/20141013_278/1413163340153RFgde_JPEG/movie_image.jpg?width=200"
			},
			{
				title: "Trainspotting",
				poster: "http://image.cine21.com/IMGDB/poster/2001/0706/large/172352_18.jpg"
			}
		]
			})
		}, 5000)
		
		//console.log(fetch('http://www.konacard.co.kr/'))
		fetch('http://localhost:3000/movies.json')
		.then(potato => potato.json())
		.then(json => console.log(json))
		.catch(err => console.log(err))
		*/
		
		this._getMovies();
	}
	
	_renderMovies = () => {
		const movies = this.state.movies.map((movie, index) => {
			console.log(movie)
			return <Movie 
						title={movie.title_english} 
						poster={movie.medium_cover_image} 
						key={movie.id}
						genres={movie.genres}
						synopsis={movie.synopsis}
					/>
		})
		
		return movies
	}
	
	_getMovies = async () => {
		const movies = await this._callApi()
		this.setState({
			movies
		})
	}
	
	_callApi = () => {
		return fetch('http://localhost:3000/movies.json')
		.then(potato => potato.json())
		.then(json => json.data.movies)
		.catch(err => console.log(err))
	}
	
	
  render() {
	  console.log('did render')
    return (
      <div className="App">
		{this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

class App2 extends Component {
  render() {
    return (
      <div className="App2">
	  APP2
      </div>
    );
  }
}

export default {App, App2};
