import axios from 'axios';
// import LichessAPI from './LichessAPI';


const API_BASE_URL = 'https://lichess.org/api';

const fetchGames = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/account/${username}/games/stream`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_LICHESS_API_KEY}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error.message);
    throw error;
  }
};

const LichessAPI = {
  fetchGames,
};

export default LichessAPI;