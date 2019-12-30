import React from "react";
import {Col, Row, CardBody,Card,CardHeader, Button, Input, Label} from "reactstrap";
import Moment from "react-moment";
import api from "../utils/api"

const ViewOne = ({
    name,
    position,
    email,
    id, 
    workgroup, 
    location, 
    devices,
    startDate,
    positionPosted,
    accountLine,
    supervisorName,
    hiringManager,
    exempt,
    supervisorStatus,
    visaCard,
    cityHallParkingPass,
    requestedSoftware,
    _id
}) => {
    const itemBoolean = function(item){
        if (item){
            return("True")
        }
        else{
            return("False")
        }
    }
    const data = {
        name,
        position,
        email,
        id, 
        workgroup, 
        location, 
        devices,
        startDate,
        positionPosted,
        accountLine,
        supervisorName,
        hiringManager,
        exempt,
        supervisorStatus,
        visaCard,
        cityHallParkingPass,
        requestedSoftware,
        _id
    }
    const updateEmployee = event =>{
        api.updateEmployee(_id, data)
        .then(
            console.log("Success!"),
            console.log(data)
            )
    }
    const checkboxesStyle = {
        display: 'inline',
        position: 'relative',
        float:"left",
        height: '25px',
        width: '25px',
        backgroundColor: '#eee',
        marginLeft:"0rem"
    }
    return (

            <div>
                <Row>
                <Col>
                
                        
                        <Row>
                            <Col>
                            <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader><h1>{name} <div id="start">Start Date: <Moment format="MM/DD/YYYY" >{startDate}</Moment></div></h1></CardHeader>
                            <CardBody className="form-horizonal">
                    <Label for="id" className="label"><h3>Employee ID#  </h3></Label><Input 
                    type="text"
                    name="id"
                    id="id"
                    value={id}
                    className="col-md-2 data"
                    ></Input>
                    <Label for="position" className="label"><h3>Position Title:  </h3></Label><Input
                    type="text"
                    name="id"
                    id="position"
                    value={position}
                    className="col-md-4 data"
                    ></Input>
                    <Label for="accountLine"><h3>Account Line: </h3></Label><Input
                    type="text"
                    name="accountLine"
                    id="accountLine"
                    value={accountLine}
                    className="col-md-4 data"
                    ></Input>
                    <Label><h5>Position was posted: <Moment format="MM/DD/YYYY">{positionPosted}</Moment></h5></Label><Input
                    type="date"
                    name="positionPosted"
                    id="positionPosted"
                    value={positionPosted}
                    className="col-md-4 data"
                    ></Input>
                    
                    <Label><h5>Direct Supervisor: </h5></Label><Input
                    type="text"
                    name="supervisorName"
                    id="supervisorName"
                    value={supervisorName}
                    className="col-md-4 data"
                    ></Input>
                    <Label><h5>Hiring Manager: </h5></Label><Input
                    type="text"
                    name="hiringManager"
                    id="hiringManager"
                    value={hiringManager}
                    className="col-md-4 data"
                    ></Input>
                    <Label><h3>City Email: <a href={"mailto:"+email}>{email}</a></h3></Label><Input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="col-md-4 data"
                    ></Input>
                    <Label><h3>WorkGroup: </h3></Label><Input
                    type="text"
                    name="workgroup"
                    id="workgroup"
                    value={workgroup}
                    className="col-md-4 data"
                    ></Input>
                    <Label><h3>Primary Work Location: {location} </h3></Label><Input
                    type="text"
                    name="location"
                    id="location"
                    value={location}
                    className="col-md-4 data"
                    ></Input>
                    <Label><h3>Assigned Devices: {devices} </h3></Label><Input
                    type="textarea"
                    name="devices"
                    id="devices"
                    value={devices}
                    className="col-md-4 data"
                    ></Input>
                    <Label for="exempt"><h5>Are they Exempt? {itemBoolean(exempt)}</h5></Label><Input
                    type="checkbox"
                    name="exempt"
                    id="exempt"
                    value={itemBoolean(exempt)}
                    className="checkbox"
                    style={checkboxesStyle}
                    >{' '}</Input>
                    <Label for="supervisorStatus"><h5>Are they a supervisor? {itemBoolean(supervisorStatus)}</h5></Label><Input
                    type="checkbox"
                    name="supervisorStatus"
                    id="supervisorStatus"
                    value={itemBoolean(supervisorStatus)}
                    className="checkbox"
                    style={checkboxesStyle}
                    >{' '}</Input>
                    <Label for="visaCard"><h5>Do they have a Visa? {itemBoolean(visaCard)}</h5></Label><Input
                    type="checkbox"
                    name="visaCard"
                    id="visaCard"
                    value={itemBoolean(visaCard)}
                    className="checkbox"
                    style={checkboxesStyle}
                    >{' '}</Input>
                    <Label for="cityHallParkingPass"><h5>Do they have a Parking Pass? {itemBoolean(cityHallParkingPass)}</h5></Label><Input
                    type="checkbox"
                    name="cityHallParkingPass"
                    id="cityHallParkingPass"
                    value={itemBoolean(cityHallParkingPass)}
                    className="checkbox"
                    style={checkboxesStyle}
                    >{' '}</Input>
                    
                    
                        </CardBody>
                        </Card>
                        </Col>
                        
                            <Col>
                            <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader><h1>Pending Requests:</h1></CardHeader>
                            <CardBody>
                                <h3>Requested Software: {requestedSoftware} </h3>
                            </CardBody>
                            </Card>
                            </Col>
                        </Row>
                        
                    
                </Col>

                </Row>
                    
                    
                    
                <Button color="primary" size="lg" onClick>Submit</Button>
            </div>

    )
}
export default ViewOne;