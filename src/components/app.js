import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allIs: 'ok'
    };
  }

  render() {
    return (
      <div>{this.state.allIs}</div>
    );
  }
}

export default App;
