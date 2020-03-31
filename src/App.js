import React from 'react';
import './App.css';
import SkeletonComponent from './widgets/SkeletonComponent';

function App() {
  // set the constants for the properties
  const title = 'Skeleton Title';
  const body = 'Skeleton body';

  return (
    <div className="App">
      <SkeletonComponent title={title} body={body} />
      <SkeletonComponent title={title} body={body} />
      <SkeletonComponent title={title} body={body} />
    </div>
  );
}

export default App;
