import React from 'react'
import Banner from './Component/Banner/Banner.js'
import './App.css';
import CommentList from './Component/CommentList/CommentList.js';
import CommentListChild from './Component/CommentListChild/CommentListChild.js'

function App() {
  return (
    <div className="App">
      <Banner />
      <CommentList/>
    </div>
  );
}

export default App;
