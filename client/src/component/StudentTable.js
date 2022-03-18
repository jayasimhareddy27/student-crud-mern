import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect,useState } from 'react';
function StudentTable(){
    const [studentList , setStudent]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/studentUrl/students').then((allstudents)=>{setStudent(allstudents.data)})
    },[]);
    async function del(id){
        await axios.delete(`http://localhost:5000/studentUrl/students/${id}`)
        .then(()=>{console.log("success");}).then(()=>{window.location.reload(false)})
        .catch(()=>{console.log("failed");})
    }

    return (
        <Table bordered hover variant="dark" size="sm">
            <thead>
                <tr>
                    <th >Student Name</th>
                    <th >Roll.no</th>
                    <th >Grade</th>
                    <th >delete</th>
                </tr>
            </thead>
            <tbody>
            {   studentList.map((val,key)=>{
                    return (<tr key={key}>
                        <td>{val.Name}</td>
                        <td>{val.RollNumber}</td>
                        <td>{val.Grade}</td>
                        <td><Button type='submit' onClick={()=>del(val._id)}>delete</Button></td>
                    </tr>)
                })
            }
                
            </tbody>
            </Table>

    );
}
export default StudentTable;