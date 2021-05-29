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
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route exact path="/education">
          <Education />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </>
  );
}

export default App;
