import './App.css';
import StudentForm from './component/StudentForm.js';
import StudentTable from './component/StudentTable.js';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function App() {
  return (
      <Container>
        <Row>
          <Col xs={8}><StudentTable/></Col>
          <Col><StudentForm/></Col>
        </Row>
      </Container>
  );
}

export default App;
