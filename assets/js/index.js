// Loads Game Of Thrones API // 


const gotAPIBaseURL = "https://thronesapi.com/api/v2/Characters/";

const loadGameOfThrones= async () => {
  const randomIds = new Set();
  while(randomIds.size < 16 ) {
    const randomNumber = Math.floor(Math.random() * 53 );
    randomIds.add(randomNumber)
  }

  const gotPromise = [...randomIds].map(id => fetch(gotAPIBaseURL  + id ));
console.log (gotPromise);


  // const gameofthrones = await res.json();
  
};

  loadGameOfThrones ();







