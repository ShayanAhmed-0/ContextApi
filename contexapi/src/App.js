import './App.css';
import React, { useState } from 'react';
import Parent from './Parent';
import myContext from './ContexApi';
function App() {
  let counter=useState(0);
  return (
     <div>
       <myContext.Provider value={counter}>
       <Parent/>
       </myContext.Provider>
     </div> 
  );
}

export default App;
