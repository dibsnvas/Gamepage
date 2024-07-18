
import React from 'react';
import GamePage from './GamePage';
import { Analytics } from '@vercel/analytics/react';
import './index.css';

const App: React.FC = () => {
  return (
    <>
      <GamePage />
      <Analytics />
    </>
  );
};

export default App;
