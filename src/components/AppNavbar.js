import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function AppNavbar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home"><i>Novel Research Hub</i></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Scientists ecosystem
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;