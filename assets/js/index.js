// Loads Game Of Thrones API //

const gotAPIBaseURL = 'https://thronesapi.com/api/v2/Characters/';
const game = document.getElementById('game');

const loadGameOfThrones = async () => {
  const randomIds = new Set();
  while (randomIds.size < 8) {
    const randomNumber = Math.floor(Math.random() * 53);
    randomIds.add(randomNumber);
  }

  const gotPromises = [...randomIds].map((id) => fetch(gotAPIBaseURL + id));
  const responses = await Promise.all(gotPromises);
  return await Promise.all(responses.map((res) => res.json()));
};

// found this way of generating through Ania Kubow "online course creator - freecodecamp"

const displayGameOfThrones = (gameOfThrones) => {
  gameOfThrones.sort((_) => Math.random() - 0.5);
  const gameOfThronesHTML = gameOfThrones
    .map((gameOfThrones) => {
      return `
    <div class="card">
    <div class="card-front">
    </div>
    <div class="card-back">
    <img src="${gameOfThrones.imageUrl}" alt="${gameOfThrones.fullName}" />
 </div>
    </div>
   `;
    })
    .join('');
  game.innerHTML = gameOfThronesHTML;
};

const newGame = async () => {
  const gameOfThrones = await loadGameOfThrones();
  displayGameOfThrones([...gameOfThrones, ...gameOfThrones]);
};

newGame();
