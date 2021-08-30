import { Component } from 'react';
import './App.css';
import NavigationTabBar from './components/NavigationTabBar';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Search></Search> */}
        <NavigationTabBar></NavigationTabBar>
        {/* <Feedback></Feedback> */}
      </div>
      // <BrowserRouter>
      //   <Switch>
      //     <Route exact path="/feedback" component={Feedback} />
      //     <Route exact path="/navigate" component={NavigationTabBar} />
      //     <Route exact path="/" component={NavigationTabBar} />
      //     <Route path="*" component={NavigationTabBar} />
      //   </Switch>
      // </BrowserRouter>
    );
  }
}

export default App;
