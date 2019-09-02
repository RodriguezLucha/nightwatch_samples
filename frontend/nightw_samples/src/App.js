import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    showHiddenComponent: false
  }

  componentDidMount() {
    let that = this;
    setTimeout(function(){ that.setState({showHiddenComponent: true}); }, 3000);
  }

  getSlowLoadingComponent() {
    if(this.state.showHiddenComponent){
      return <div className="cactus">Cactus!</div>;
    }
    else {
      return <div className="loading">Loading...</div>
    }
  }

  render() {
    return (
      <div className="App">
        The app.
        <div className="slow-loading">
          {this.getSlowLoadingComponent()}
        </div>
      </div>
    );
  }

}

export default App;
