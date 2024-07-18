import React from 'react';
import './GameImage.css'
import firstImage from './assets/image.png';
import thirdImage from './assets/image copy.png';
import second from './assets/image copy 3.png';
import fifth from './assets/image copy 4.png';
import six from './assets/image copy 2.png';
import s1x from './assets/image copy 5.png';
import seven from './assets/image copy 11.png';
import eight from './assets/image copy 7.png';
import nine from './assets/image copy 8.png';
import ten from './assets/image copy 12.png';
import eleven from './assets/image copy 10.png';
import twelve from './assets/image copy 13.png'

const GamePage: React.FC = () => {
  const games = Array.from({ length: 12 }, (_, i) => `Игра ${i + 1}`);
  const gameData = [
    {
      url: 'https://crowdedgames.itch.io/games-for-kids-animals',
      image: firstImage,
      description: 'Образовательная игра для детей с различными животными.'
    },
    {
      url: 'https://christina-nin4.itch.io/animals-game',
      image: six,
      description: 'Веселая и интерактивная игра про животных.'
    },
    {
      url: 'https://valera102.itch.io/alfavit-kids',
      image: thirdImage,
      description: 'Образовательная игра для детей, чтобы помочь им выучить алфавит.'
    },
    {
      url: 'https://blindfold-games.itch.io/animals-bee',
      image: second,
      description: 'Интерактивная игра о пчелах и животных.'
    },
    {
      url: 'https://fyreload.itch.io/kids-step-up-game',
      image: fifth,
      description: 'Игра на шагание для детей.'
    },
    {
      url: 'https://black4ox.itch.io/kids-race',
      image: s1x,
      description: 'Гоночная игра, разработанная для детей.'
    },
    {
      url: 'https://andrick-mercado.itch.io/kids-4-safe-routes-vr',
      image: seven,
      description: 'ВР игра, обучающая детей безопасным маршрутам.'
    },
    {
      url: 'https://callmeakstark.itch.io/kids-play',
      image: eight,
      description: 'Игровая площадка с различными активностями для детей.'
    },
    {
      url: 'https://omael.itch.io/paintem',
      image: nine,
      description: 'Игра для рисования, позволяющая детям исследовать свою креативность.'
    },
    {
      url: 'https://endless409.itch.io/tppg',
      image: ten,
      description: 'Пазл игра для детей.'
    },
    {
      url: 'https://chocolandtv.itch.io/packmaniac',
      image: eleven,
      description: 'Веселая и интерактивная игра в стиле Пакмана для детей.'
    },
    {
      url: 'https://deepnight.itch.io/cats-are-assholes',
      image: twelve,
      description: 'Веселая игра с кошками.'
    }
  ];

  return (
    <div className="min-h-screen bg-customYellow text-white flex flex-col items-center justify-center py-10 place-items-center">
      <h1 className="text-4xl font-custom1 mb-10 text-black">Комната игр</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4 md:px-10 lg:px-20">
        {games.map((game, index) => (
          <div key={game} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center font-bold">
            {index < gameData.length ? (
              <>
                <h2 className="text-2xl font-bold mb-4">{game}</h2>
                <img src={gameData[index].image} alt={game} className="game-image mb-4 rounded-lg " />
                <p className="text-lg mb-4 font-bold">{gameData[index].description}</p>
                <a href={gameData[index].url} target="_blank" rel="noopener noreferrer">
                  <button className="bg-pink-200 hover:bg-pink-500 text-black py-2 px-4 rounded font-custom">
                    Играть
                  </button>
                </a>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4 font-bold">{game}</h2>
                <p className="text-lg mb-4">Описание игры или контент здесь.</p>
                <button className="bg-pink-200 hover:bg-pink-500 text-black font-bold py-2 px-4 rounded">
                  Играть
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
