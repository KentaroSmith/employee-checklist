import React, { Component } from "react";
import ViewOne from "../components/viewOneDevice";
import api from "../utils/api";
import {
    Jumbotron
} from "reactstrap"

class DeviceByID extends Component{
constructor(props){
    super(props);
    this.state={
        device:{}
    }

}
findone = () => {
    let param = window.location.href
    //this worked locally only because localhost:3000 was the url
    //This grabs the last 24 characters in the string and sets it as idNum for getOneEmployee to use as a search parameter
    let idNum = param.substr(param.length-24,param.length)
    let theone={}
    api.getOneDevice(idNum)
        .then(Response => {
            theone=(Response.data);
            this.setState({device:theone})
            console.log(this.state.device)
        });
}
render(){
    return(
    <div>
        <Jumbotron>
            {this.findone()}
                    
                    <ViewOne
                    inventoryNum={this.state.device.inventoryNum}
                    dateBought={this.state.device.dateBought}
                    assigned={this.state.device.assigned}
                    assignedTo={this.state.device.assignedTo}
                    workGroup={this.state.device.workGroup}
                    location={this.state.device.location}
                    dataPlan={this.state.device.dataPlan}
                    type={this.state.device.type}
                    notes={this.state.device.notes}
                    />

           
        </Jumbotron>
    </div>
    )
}
}
export default DeviceByID;