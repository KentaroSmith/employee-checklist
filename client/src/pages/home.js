import React, { Component } from "react";
import ViewAll from "../components/viewAll";
import api from "../utils/api";
import {
    Jumbotron,
    Table
} from "reactstrap"

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state={
            allEmployees:[],
            newEmployees:[]
        }
        this.findall = this.findall.bind(this)
    }

    findall = () => {
        let employeeList=[];
        api.getEmployees()
            .then(Response => {
                Response.data.forEach((req) => {
                    if(req.newEmployee){
                        employeeList.push(req)
                    }
                });
                /* employeeList.push(Response.data); */
                this.setState({newEmployees:employeeList})
                console.log(this.state.newEmployees)
            })
    }
    componentDidMount(){
        this.findall()
    }
    render() {
        return (
            // review how props work to make sure data is passing through correctly
            <div id="home" >
                <Jumbotron>
                    {/* {this.findall()} */}
               <span> <h1>New Employee Info Dashboard</h1></span>
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
        {this.state.newEmployees.length === 0 ? "":
                this.state.newEmployees.map(employee =>(
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
