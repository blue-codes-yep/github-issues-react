import React from 'react';
import './App.css';
import IssueList from './components/IssueList'
import CardColumns from 'react-bootstrap/CardColumns';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <CardColumns>
          <IssueList />
        </CardColumns>
      </header>
    </div>
  );
}

export default App;
