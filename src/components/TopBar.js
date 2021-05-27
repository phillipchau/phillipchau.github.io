import '../App.css';
import { Navbar, Nav} from 'react-bootstrap';

function TopBar() {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="m-auto">
        <Nav.Link className="navitem" href="/">Home</Nav.Link>
        <Nav.Link className="navitem" href="/education">Education</Nav.Link>
        <Nav.Link className="navitem" href="/experience">Experience</Nav.Link>
        <Nav.Link className="navitem" href="/projects">Projects</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default TopBar;