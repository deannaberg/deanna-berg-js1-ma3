const url =
	"https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultDisplay = document.querySelector(".resultDisplay");

async function getGames() {
	try {
		const response = await fetch(url);

		const results = await response.json();

		const gameResults = results.results;

		resultDisplay.innerHTML = "";

		for (let i = 0; i < gameResults.length; i++) {
			if (i === 8) {
				break;
			}

			const name = gameResults[i].name;
			const rating = gameResults[i].rating;
			const tags = gameResults[i].tags.length;

			resultDisplay.innerHTML += `<div><h2>${name}</h2>Rating: ${rating} Tags: ${tags}</div>`;
		}
	} catch (error) {
		console.log("No games for you");
		resultDisplay.innerHTML = "No games for you";
	}
}
getGames();
