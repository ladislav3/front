import React, { Component } from 'react';
import './App.css';
import Card1 from './components/presentational/Card1.jsx';
import Card2 from './components/presentational/Card2.jsx';
import Card3 from './components/presentational/Card3.jsx';
import data from './data.json';

class App extends Component {
  constructor() {
    super();  
    this.state = {
      data
    }; 
  };

  render() {
    const { data } = this.state;
    const {origin_iata, destination_iata} = this.state.data;
    return (
      <div className="App">
        <div className="overview">Overview</div>
        <div className="main-content">
          <div>{origin_iata} - {destination_iata}</div>
          {/* Card 1 */}
          <Card1 data={data.segments[0]} active={true} />
          {/* Card 2 */}
          <Card2 data={data.segments[1]} active={false} terminal="Terminal C" status="Busy" />
          {/* Card 3 */}
          <Card3 data={data.segments[2]} active={false} />
        </div>  
      </div>
    );
  }
}

export default App;
