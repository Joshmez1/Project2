// Loads Game Of Thrones API // 


const gotAPIBaseURL = "https://thronesapi.com/api/v2/Characters/";

const loadGameOfThrones= async () => {
  const res = await fetch(gotAPIBaseURL  + "1");
  const gameofthrones = await res.json();
  console.log(gameofthrones);
};

  loadGameOfThrones ();







