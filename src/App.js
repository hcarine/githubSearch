import React, { useState } from 'react';
import './App.css';
import SearchProject from './components/SearchProject'
import {getCompanyProject} from './client/api'

function App() {
  const [result, setResult] = useState("")

  const callApi = (text) => {
    getCompanyProject(text, setResult)
  }

  return (
    <div className="App">
      <header className="App-header">
        Github Search
      </header>
      <SearchProject callApi={callApi}/>
      <div>
        {result.length}
      </div>
    </div>
  );
}

export default App;
