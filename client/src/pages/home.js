import React, { Component } from "react";
import ViewAll from "../components/viewAll";
import api from "../utils/api";
import {
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
                console.log(employeeList[0])
            });
    }
    render() {
        return (
            // review how props work to make sure data is passing through correctly
            <div id="home" >
                <Jumbotron>
                    {this.findall()}
               <span> <h1>Employee Info Dashboard</h1></span>
               <Table dark bordered striped hover size="sm">
                    <thead>
                        <tr>
                            <th>Employee id #</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Email</th>
                            <th>Workgroup</th>
                            <th>Location</th>
                            <th>Start Date</th>
                        </tr>
                    </thead>
                {this.state.allEmployees.length === 0 ? "":
                this.state.allEmployees.map(employee =>(
                    <ViewAll 
                    _id={employee._id}
                    name={employee.name}
                    position={employee.position}
                    email={employee.email}
                    id={employee.employeeID}
                    workgroup={employee.workgroup}
                    location={employee.location}
                    startDate={employee.startDate}
                    />
                            
                ))}
                </Table>
                </Jumbotron>
            </div>
        )
    }
}
export default Homepage;
