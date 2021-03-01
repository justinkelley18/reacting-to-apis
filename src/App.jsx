import React from 'react';
import FilmCard from './components/FilmCard';
import PeopleCard from './components/ PeopleCard';





class App extends React.Component {
	state = {
		films: []
	};
	
	componentDidMount() {
		fetch('https://ghibliapi.herokuapp.com/films')
		.then(res => res.json())
		.then(films => this.setState({ films }));
	}
	
	render() {
		return (
			<main className="container">
				<section className="row my-2 justify-content-center">
					{this.state.films.map(film => {
						return (
							<FilmCard key={film.id} film={film} />
							
							
						);
					})}
				</section>
			</main>
    );
	}

	state = {
		people: []
	};
	
	componentDidMount() {
		fetch('https://ghibliapi.herokuapp.com/people')
		.then(res => res.json())
		.then(people => this.setState({ people }));
	}
	
	render() {
		return (
			<main className="container">
				<section className="row my-2 justify-content-center">
					{this.state.people.map(person => {
						return (
							<PeopleCard key={person.id} people={person} />
							
							
						);
					})}
				</section>
			</main>
    );
	}
}

export default App;