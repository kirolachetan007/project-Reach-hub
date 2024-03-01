import React, { useState, useEffect } from 'react';
import { Typography, Select, Spin } from 'antd';
import LichessAPI from 'LichessAPI';

const { Option } = Select;
const { Title, Paragraph } = Typography;

const ExchangeRate = () => {
  const [playerName, setPlayerName] = useState('');
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectChange = (value) => {
    setPlayerName(value);
  };

  useEffect(() => {
    if (playerName) {
      setIsLoading(true);
      fetchGames(playerName)
        .then((data) => {
          setGames(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching games:', error);
          setIsLoading(false);
        });
    }
  }, [playerName]);

  return (
    <div>
      <Select
        placeholder="Select a player"
        style={{ width: 200, marginBottom: 16 }}
        value={playerName}
        onChange={handleSelectChange}
      >
        <Option value="tihom">Tihom</Option>
        <Option value="anmonteiro">anmonteiro</Option>
      </Select>
      {isLoading ? (
        <Spin />
      ) : (
        <div>
          <Title level={3}>{playerName}</Title>
          <Paragraph>Number of games played in the past month:</Paragraph>
          <Paragraph>Won: {games.filter((game) => game.winner === playerName).length}</Paragraph>
          <Paragraph>Lost: {games.filter((game) => game.winner !== playerName).length}</Paragraph>
          <Paragraph>Drew: {games.filter((game) => game.winner === null).length}</Paragraph>
        </div>
      )}
    </div>
  );
};

export default ExchangeRate;