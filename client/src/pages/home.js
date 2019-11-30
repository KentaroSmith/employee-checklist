import React, { Component } from "react";
import ViewAll from "../components/viewAll";
import api from "../utils/api";

class Homepage extends Component {
    allEmployees = [];
    findall = () => {
        let employeeList = []
        api.getEmployees()
            .then(res => {
                employeeList.push(res)
            });
        this.allEmployees = employeeList;
    }
    render() {
        return (

            <div id="home">
                <ViewAll >

                </ViewAll>
            </div>
        )
    }
}
export default Homepage;