import Button from 'react-bootstrap/Button';
import {useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
function StudentForm() {
    const [student , setStudent]=useState({ RollNumber:'',Name:'',Grade:''} );
    function onFormFieldChange(e){setStudent({...student,[e.target.name]:e.target.value}) }
    async function fetchpost(){
        const res=await axios.post('http://localhost:5000/studentUrl/students',student);
        console.log((res.data));
        
        /*fetch('http://localhost:5000/studentUrl/students', {method: 'POST',headers: {'Content-Type': 'application/json;charset=utf-8'},body: JSON.stringify(student)})
        .then(response => response.json()).then(json => console.log(json))
        .catch((err)=>console.log({message:err.message}));*/
    }
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                <form >
                    name<input name='Name' type="text"  value={student.Name} onChange={onFormFieldChange} /><br></br>
                    roll:<input name='RollNumber' type="text" value={student.RollNumber} onChange={onFormFieldChange}/><br></br>
                    grade<input name='Grade' type="text" value={student.Grade} onChange={onFormFieldChange}/><br></br>
                    <Button type="submit" value="submit" onClick={fetchpost}>fetch</Button>
                </form>    
                </Col>
            </Row>
        </Container>

    );
  }
  
  export default StudentForm;