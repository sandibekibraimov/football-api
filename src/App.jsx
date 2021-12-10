import React from 'react';
import VideoList from './components/VideoList';
import Search from './components/Search';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      {/* <Search /> */}
      <VideoList />
    </div>
  );
};

export default App;
