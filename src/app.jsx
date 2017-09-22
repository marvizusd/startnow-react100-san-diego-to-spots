import React, { Component } from 'react';
import axios from 'axios'
import TopSpot from './topspot';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        topspots: []
    };
}



// https://maps.google.com/?q=32.746271,,{lon}

// https://maps.google.com/?q={lat},{lon}

// <pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre>

componentWillMount() {
  axios
  .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
  .then(response => response.data)
  .then(topspots => this.setState({ topspots }));
      }

  render() {    
    return (
      <div className='App container'>
          <div className='row'>
            <div className='jumbotron'>
              <h1 className='display-3'>San Diego Top Spots</h1>
              <h4 className=''>A list of the top 30 place to see in San Diego, California</h4>
            </div>  
          </div>
          <div className='row'>
            <div className='jumbotron'>
                      { 
              this.state.topspots.map(topspot => (
                  <TopSpot
                      key={topspot.id}
                      name={topspot.name}
                      description={topspot.description}
                      location={topspot.location} />
              ))
          }            
            </div>
          </div>      
      </div>
    );
  }
}

// export default App;
