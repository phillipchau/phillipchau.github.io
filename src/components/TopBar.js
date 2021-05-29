import '../App.css';
import { Navbar, Nav} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

function TopBar() {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="m-auto">
        <Link className="navitem" to="/">Home</Link>
        <Link className="navitem" to="/education">Education</Link>
        <Link className="navitem" to="/experience">Experience</Link>
        <Link className="navitem" to="/projects">Projects</Link>
      </Nav>
    </Navbar>
  );
}

export default TopBar;