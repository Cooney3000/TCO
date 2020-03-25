import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Verein } from './Verein';
import { Mannschaften } from './Mannschaften';
import { Jugend } from './Jugend';
import { Training } from './Training';
import { Platzbuchung } from './Platzbuchung';
import { Login } from './Login';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { Footer } from './components/Footer';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/verein" component={Verein} />
              <Route exact path="/mannschaften" component={Mannschaften} />
              <Route exact path="/jugend" component={Jugend} />
              <Route exact path="/training" component={Training} />
              <Route exact path="/platzbuchung" component={Platzbuchung} />
              <Route exact path="/login" component={Login} />
              <Route exact component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </>
    );
  }
}



export default App;
