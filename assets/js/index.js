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
  const got = await Promise.all(responses.map(res => res.json ()));
  

console.log (got);


  // const gameofthrones = await res.json();
  
};

  loadGameOfThrones ();







