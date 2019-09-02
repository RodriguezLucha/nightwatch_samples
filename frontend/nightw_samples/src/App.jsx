import React from 'react';
import './App.css';
import leetspeak from 'leetspeak';


class App extends React.Component {

  state = {
    showHiddenComponent: false,
    counter: 0,
    word: "",
    converted: ""
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

  incrementCount() {
    this.setState({counter: this.state.counter + 1});
  }

  onChangeHandler(e){
    this.setState({word: e.currentTarget.value});
  }
  
  onSubmitHandler(e){
    e.preventDefault();
    const leetified = leetspeak(this.state.word);
    this.setState({converted: leetified})
  }

  render() {
    return (
      <div className="App">
        The app.
        <hr/>
        <div className="slow-loading">
          {this.getSlowLoadingComponent()}
        </div>
        <hr/>
        <div className="counter">
          <div className="counter-value">
            {this.state.counter}
          </div>
          <button className="addOne" onClick={() => this.incrementCount()}>Add 1</button>
        </div>
        <hr/>

        <form className="convert-word" onSubmit={(e) => this.onSubmitHandler(e)}>
          <label className="word">
            word
            <input type='text' onChange={(e) => {this.onChangeHandler(e)}}/>
          </label>
          <input type='submit'/>
          <div className='converted'>
            {this.state.converted}
          </div>
        </form>


      </div>
    );
  }

}

export default App;
