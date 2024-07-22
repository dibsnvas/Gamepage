import React from 'react';
import './GameImage.css'
import firstImage from './assets/image copy 19.png';
import thirdImage from './assets/image copy 14.png';
import second from './assets/image copy 17.png';
import fifth from './assets/image copy 4.png';
import six from './assets/image copy 16.png';
import s1x from './assets/image copy 8.png';
import seven from './assets/image copy 18.png';
import eight from './assets/image copy 20.png';

const GamePage: React.FC = () => {
  const games = Array.from({ length: 8 }, (_, i) => `Игра ${i + 1}`);
  const gameData = [
    {
      url: 'https://flappy-rouge.vercel.app/',
      image: eight,
      description: 'Учи числа и развивай логику.'
    },
    {
      url: 'https://guess-the-number-hazel.vercel.app/',
      image: six,
      description: 'Игра для детей на интуицию.'
    },
    {
      url: 'https://connect-woad.vercel.app/',
      image: thirdImage,
      description: 'Игра развивающая смекалку и логику'
    },
    {
      url: 'https://doodle-psi.vercel.app/',
      image: second,
      description: 'Развлекательная игра с прыжками.'
    },
    {
      url: 'https://wordle-five-xi.vercel.app/',
      image: fifth,
      description: 'Игра для развития интуиции у детей.'
    },
    {
      url: 'https://num-blush.vercel.app/',
      image: s1x,
      description: 'Угадай число и развивай логику.'
    },
    {
      url: 'https://magic-alpha.vercel.app/',
      image: seven,
      description: 'Развивай память и логику.'
    },
    {
      url: 'https://drag-and-drop-nine-ivory.vercel.app/',
      image: firstImage,
      description: 'Игра для изучения и соединения различных цветов для детей'
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
