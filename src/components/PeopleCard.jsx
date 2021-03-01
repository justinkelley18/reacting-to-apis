import { useEffect, useState } from 'react';



const PeopleCard = () => {
	const [People, setPeople] = useState([]);

	useEffect(() => {
		fetch('https://ghibliapi.herokuapp.com/people')
			.then(res => res.json())
			.then(allPeople => setPeople(allPeople))
	}, []);


	return (
		<main className="container">
			<section>
				{People.map(person => (
					<div className="col-md-6" key = {`film-card-${people.id}`}>
						<div className="card shadow my-2">
							<div className="card-body">
								<h5>Name: {person.name}</h5>
								<h5>Age: {person.age}</h5>
							</div>
						</div>

					</div>
				))}				
			</section>
		</main >
	);
};

export default PeopleCard;