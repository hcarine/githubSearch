import React, { useState } from 'react';
import './App.css';
import SearchProject from './components/SearchProject'
import CompanyDetails from './components/CompanyDetails'
import {getCompanyProject} from './client/api'

function App() {
  const [result, setResult] = useState([])

  const callApi = (text) => {
    getCompanyProject(text, setResult)
  }

  return (
    <div className="App">
      <header className="App-header">
        Github Search
      </header>
      <SearchProject callApi={callApi}/>
     {result.length && <CompanyDetails companyProjects={result}/>}
     {!result.length &&  
       <div>
          try with the company name
       </div>}
    </div>
  );
}

export default App;
