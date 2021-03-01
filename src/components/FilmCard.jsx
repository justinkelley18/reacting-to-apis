import { useEffect, useState } from 'react';



const FilmCard = () => {
	const [films, setFilms] = useState([]);

	useEffect(() => {
		fetch('https://ghibliapi.herokuapp.com/films')
			.then(res => res.json())
			.then(allFilms => setFilms(allFilms))
	}, []);


	return (
		<main className="container">
			<section>
				{films.map(film => (
					<div className="col-md-6" key = {`film-card-${film.id}`}>
						<div className="card shadow my-2">
							<div className="card-body">
								<h4 className="card-title">{film.title}</h4>
								Description:
								<p className="card-description">{film.description}</p>
								<h5>Director: {film.director}</h5>
								<h5>Producer: {film.producer}</h5>
							</div>
						</div>

					</div>
				))}				
			</section>
		</main >
	);
};

export default FilmCard;
