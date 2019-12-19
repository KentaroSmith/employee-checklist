import React from "react";
import {Col, Row, CardBody,Card,CardHeader} from "reactstrap";
import Moment from "react-moment";

const ViewOne = ({
    Tool,
    Purpose,
    Status,
    LicenseNumber,
    Manager,
    Administrator,
    Users,
    Installer,
    Description,
    Integrations,
    StatusDetails,
    Vendor,
    Cost2019,
    VendorContact,
    VendorPhone,
    VendorEmail,
    VendorDetails,
    Format,
    TrainingDetails,
    Plans,
    FileManuals,
    FileContracts,
    DataLocation,
    FileOther,
    DataFormat,
    Reviewer,
    InterfaceWebsite,
    Notes,
}) => {
    const itemBoolean = function(item){
        if (item){
            return("True")
        }
        else{
            return("False")
        }
    }

    return (

            <div>
                <Row>
                <Col>
                
                        
                        <Row>
                            <Col>
                            <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader><h1>{Tool}</h1></CardHeader>
                            <CardBody>
                    <h3>Purpose:</h3>
                    <p>{Purpose}</p>
                    <h3>Status: {Status} </h3>
                    <h3>Number of Licenses: {LicenseNumber}</h3>
                    <h5>Manager: {Manager}</h5>
                    <h5>Administrator: {Administrator} </h5>
                    <h5>Users: {Users} </h5>
                    <h3>Installer: {Installer}</h3>
                    <h3>Description:</h3>
                    <p> {Description} </p>
                    <h3>Integrations: {Integrations} </h3>
                    <h3>Status Details: {StatusDetails} </h3>
                    
                        </CardBody>
                        </Card>
                        </Col>
                        
                            <Col>
                            <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader><h1>Vendor Information:</h1></CardHeader>
                            <CardBody>
                            <h5>Vendor: {Vendor}</h5>
                            <h5>Vendor Contact: {VendorContact}</h5>
                            <h5>Vendor Phone: {VendorPhone}</h5>
                            <h5>Vendor Email: {VendorEmail}</h5>
                            <h5>Vendor Details: {VendorDetails}</h5>
                            </CardBody>
                            </Card>
                            </Col>

                            <Col>
                            <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader><h1>Notes:</h1></CardHeader>
                            <CardBody>
                            <h5>{Notes}</h5>
                            
                            </CardBody>
                            </Card>
                            </Col>
                        </Row>
                        
                    
                </Col>

                </Row>
                    
                    
                    
                
            </div>

    )
}
export default ViewOne;