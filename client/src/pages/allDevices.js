import React, { Component } from "react";
import ViewAllDevices from "../components/viewAllDevices";
import api from "../utils/api";
import {
    Jumbotron,
    Table
} from "reactstrap"

class Homepage extends Component {
    state = {
        allDevices:[]
    }

    findall = () => {
        let deviceList = []
        api.getDevice()
            .then(Response => {
                deviceList.push(Response.data);
                this.setState({allDevices:deviceList[0]})
                console.log(deviceList[0])
            });
    }
    render() {
        return (
            // review how props work to make sure data is passing through correctly
            <div id="home" >
                <Jumbotron>
                    {this.findall()}
               <span> <h1>Device Inventory</h1></span>
               <Table dark bordered striped hover size="sm">
                    <thead>
                        <tr>
                            <th>Inventory #</th>
                            <th>Date Purchased</th>
                            <th>Workgroup</th>
                            <th>Owner</th>
                            <th>Location</th>
                            <th>Device type</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                {this.state.allDevices.length === 0 ? "":
                this.state.allDevices.map(device =>(
                    <ViewAllDevices
                    _id={device._id}
                    inventoryNum={device.inventoryNum}
                    dateBought={device.dateBought}
                    workGroup={device.workGroup}
                    assigned={device.assigned}
                    assignedTo={device.assignedTo}
                    dataPlan={device.dataPlan}
                    type={device.type}
                    notes={device.notes}
                    />
                            
                ))}
                </Table>
                </Jumbotron>
            </div>
        )
    }
}
export default Homepage;
