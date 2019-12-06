import React, { Component } from "react";
import ViewAll from "../components/viewAll";
import api from "../utils/api";
import {
    Button,
    Jumbotron,
    Table
} from "reactstrap"
class Homepage extends Component {
    state = {
        allEmployees:[]
    }

    findall = () => {
        let employeeList = []
        api.getEmployees()
            .then(Response => {
                employeeList.push(Response.data);
                this.setState({allEmployees:employeeList[0]})
                console.log(employeeList)
            });
    }
    render() {
        return (
            // review how props work to make sure data is passing through correctly
            <div id="home" >
                <Jumbotron>
               <span> <h1>Employee Info Dashboard</h1><Button onClick={this.findall}>Show all Employees</Button></span>
               <Table>
                    <thead>
                        <tr>
                            <th>Employee id #</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                {this.state.allEmployees.length === 0 ? "":
                this.state.allEmployees.map(employee =>(
                    
                    <ViewAll 
                    name={employee.name}
                    position={employee.position}
                    email={employee.email}
                    id={employee.employeeID}
                    />
                            
                ))}
                </Table>
                </Jumbotron>
            </div>
        )
    }
}
export default Homepage;
