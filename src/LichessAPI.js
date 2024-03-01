const fetchGames = async (playerName) => {
    const response = await fetch(`https://lichess.org/api/games/user/${playerName}?max=1000`);
    const data = await response.json();
    return data.games;
  };
  
  export { fetchGames };