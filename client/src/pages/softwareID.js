import React, { Component } from "react";
import ViewOne from "../components/viewOneSoftware";
import api from "../utils/api";
import {
    Jumbotron
} from "reactstrap"

class SoftwareByID extends Component{
constructor(props){
    super(props);
    this.state={
        software:{}
    }

}
findone = () => {
    let param = window.location.href
    //this worked locally only because localhost:3000 was the url
    //This grabs the last 24 characters in the string and sets it as idNum for getOneEmployee to use as a search parameter
    let idNum = param.substr(param.length-24,param.length)
    let theone={}
    api.getOneSoftware(idNum)
        .then(Response => {
            theone=(Response.data);
            this.setState({software:theone})
        });
}
render(){
    return(
    <div>
        <Jumbotron>
            {this.findone()}
                    
                    <ViewOne
                    Tool={this.state.software.Tool}
                    Purpose={this.state.software.Purpose}
                    Status={this.state.software.Status}
                    LicenseNumber={this.state.software.LicenseNumber}
                    Manager={this.state.software.Manager}
                    Administrator={this.state.software.Administrator}
                    Users={this.state.software.Users}
                    Installer={this.state.software.Installer}
                    Description={this.state.software.Description}
                    Integrations={this.state.software.Integrations}
                    StatusDetails={this.state.software.StatusDetails}
                    Vendor={this.state.software.Vendor}
                    Cost2019={this.state.software.Cost2019}
                    VendorContact={this.state.software.VendorContact}
                    VendorPhone={this.state.software.VendorPhone}
                    VendorEmail={this.state.software.VendorEmail}
                    VendorDetails={this.state.software.VendorDetails}
                    Format={this.state.software.Format}
                    TrainingDetails={this.state.software.TrainingDetails}
                    Plans={this.state.software.Plans}
                    FileManuals={this.state.software.FileManuals}
                    FileContracts={this.state.software.FileContracts}
                    DataLocation={this.state.software.DataLocation}
                    FileOther={this.state.software.FileOther}
                    DataFormat={this.state.software.DataFormat}
                    Reviewer={this.state.software.Reviewer}
                    InterfaceWebsite={this.state.software.InterfaceWebsite}
                    Notes={this.state.software.Notes}
                    />

           
        </Jumbotron>
    </div>
    )
}
}
export default SoftwareByID;