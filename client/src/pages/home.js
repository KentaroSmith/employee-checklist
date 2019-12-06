import React, { Component } from "react";
import ViewAll from "../components/viewAll";
import api from "../utils/api";

class Homepage extends Component {
    state = {
        allEmployees:[]
    }

    findall = () => {
        let employeeList = []
        api.getEmployees()
            .then(res => {
                employeeList.push(res);
            });
        this.setState({allEmployees:employeeList})
        console.log(this.state)
    }
    render() {
        return (
            // review how props work to make sure data is passing through correctly
            <div id="home">
                {this.findall()}
                <h1>All Employees:</h1>
                {this.state.allEmployees.length === 0 ? "":
                this.state.allEmployees.map(employee =>(
                    <ViewAll 
                    name={employee.name}
                    position={employee.position}
                    />
                ))}
            </div>
        )
    }
}
export default Homepage;
