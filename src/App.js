import React from 'react';
import './App.css';
import SkeletonComponent from './SkeletonComponent';

function App() {
  return (
    <div className="App">
      <SkeletonComponent title="Skeleton title" body="Skeleton body" />
    </div>
  );
}

export default App;
