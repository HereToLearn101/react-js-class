import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Main from './Main';

class App extends React.Component {
  // In any class you can start creating state by using a constructor.
  // A constructor will run right when the component is rendered.
  // This is the first thing that's going to happen when you're component
  // is brought into the browser.
  constructor() {
    // Always required in the constructor by default
    super();

    this.state = {
      name: "Ted Moso",
      microsoftValue: 100,
      twitterValue: 200,
      amazonValue: 300
    }
  }

  increaseValues() {
    // console.log(this);
    this.setState((prevState) => ({
        microsoftValue: prevState.microsoftValue + 1,
        twitterValue: prevState.twitterValue + 1,
        amazonValue: prevState.amazonValue + 1
    }));
  }

  decreaseValues() {
    // console.log(this);
    this.setState((prevState) => ({
        microsoftValue: prevState.microsoftValue - 1,
        twitterValue: prevState.twitterValue - 1,
        amazonValue: prevState.amazonValue - 1
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Stock Data App</h1>
        <Welcome 
          name={this.state.name} 
        />
        
        <Main 
          microsoftValue={this.state.microsoftValue}
          twitterValue={this.state.twitterValue}
          amazonValue={this.state.amazonValue}
          increase={this.increaseValues.bind(this)}
          decrease={this.decreaseValues.bind(this)}
        />
      </div>
    );
  }
}

export default App;
