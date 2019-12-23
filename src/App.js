import React from 'react';
import VideoHandler from './components/VideoHandler';

function App() {
  return (
    <div className="App">
      <VideoHandler videos={["https://www.youtube.com/watch?v=bzfG5LR0jWI&t=145s", "https://www.youtube.com/watch?v=5mkketnxB34"]}></VideoHandler>
    </div >
  );
}

export default App;
