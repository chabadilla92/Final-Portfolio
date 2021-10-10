import logo from './logo.svg';
import './App.css';
import { Projects } from './Components/Projects.js';
import { Navigation } from './Components/Nav.js';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Container>
      <Navigation />
      <Projects />
    </Container>
  );
}

export default App;
