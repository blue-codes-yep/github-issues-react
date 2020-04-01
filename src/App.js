import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IssueList from './components/IssueList'
import IssueDetail from './components/IssueDetail';
import CardColumns from 'react-bootstrap/CardColumns';


function App() {

  return (
    <div className="App">

      <Router>

        <CardColumns>
          <Route path="/" exact component={IssueList} />
          <Route path="/issue/:issue_number?" component={IssueDetail} />
        </CardColumns>
      </Router>

    </div>
  );
}

export default App;
