import MainPage from './MainPage'
import TopBar from './TopBar'
import Experience from './Experience'
import Education from './Education'
import Projects from './Projects'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import '../App.css';

function App() {
  return (
    <>
    <TopBar />
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
