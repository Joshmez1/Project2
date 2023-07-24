// Loads Game Of Thrones API // 


const gotAPIBaseURL = "https://thronesapi.com/api/v2/Characters/";

const loadGameOfThrones= async () => {
  const randomIds = new Set();
  while(randomIds.size < 16 ) {
    const randomNumber = Math.floor(Math.random() * 53 );
    randomIds.add(randomNumber)
  }

  const gotPromises = [...randomIds].map(id => fetch(gotAPIBaseURL  + id ));
  const responses = await Promise.all(gotPromises);
  return await Promise.all(responses.map(res => res.json ()));
  
};

// found this way of generating through Ania Kubow "online course creator - freecodecamp"

const displayGameOfThrones =(gameOfThrones) => {
 gameOfThrones.sort( _ => Math.random() - 0.5);
  console.log (gameOfThrones.map (gameOfThrones => {
   return `
    <div class="card">
 <h2>${gameOfThrones.fullName}
    </div>
   `
 }))
}

const newGame = async () => {
  const gameOfThrones = await loadGameOfThrones(); 
  displayGameOfThrones([...gameOfThrones, ...gameOfThrones]);
}


  


  newGame ();







