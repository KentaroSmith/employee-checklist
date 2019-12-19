import React, { Component } from "react";
import ViewAll from "../components/viewAllSoftware";
import api from "../utils/api";
import {
    Jumbotron,
    Table
} from "reactstrap"

class AllSoftware extends Component {
    constructor(props){
        super(props);
        this.state={
            AllSoftware:[]
        }
        this.findall = this.findall.bind(this)
    }

    findall = () => {
        let softwareList=[];
        api.getSoftware()
            .then(Response => {
                softwareList.push(Response.data);
                this.setState({AllSoftware:softwareList[0]})
                console.log(this.state.AllSoftware)
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
               <span> <h1>All Software</h1></span>
               <Table dark bordered striped hover size="sm">
                    <thead>
                        <tr>
                            <th>Tool</th>
                            <th>Purpose</th>
                            <th>Status</th>
                            <th>Vendor</th>
                            <th>Description</th>
                            <th>Cost</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
        {this.state.AllSoftware.length === 0 ? "":
                this.state.AllSoftware.map(software =>(
                    <ViewAll 
                    _id={software._id}
                    Tool={software.Tool}
                    Purpose={software.Purpose}
                    Status={software.Status}
                    Vendor={software.Vendor}
                    Description={software.Description}
                    Cost={software.Cost2019}
                    Notes={software.Notes}
                    />
                            
                ))}
                </Table>
                </Jumbotron>
            </div>
        )
    }
}
export default AllSoftware;
