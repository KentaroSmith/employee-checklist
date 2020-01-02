import React from "react";
import {Col, Row, CardBody,Card,CardHeader, Button, Input, Label, Form, FormGroup} from "reactstrap";
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
        float:"right",
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
                    <Form>
                    <FormGroup className="col-12">
                    <Label for="id" className="col-8"><h3>Employee ID#  </h3></Label><Input 
                    type="text"
                    name="id"
                    id="id"
                    value={id}
                    className="col-4 data"
                    ></Input>
                    </FormGroup>
                    <FormGroup className="col-12">
                    <Label for="position" className="col-8"><h3>Position Title:  </h3></Label><Input
                    type="text"
                    name="id"
                    id="position"
                    value={position}
                    className="col-4 data"
                    ></Input>
                    </FormGroup>
                    <FormGroup className="col-12">
                    <Label for="accountLine" className="col-8"><h3>Account Line: </h3></Label><Input
                    type="text"
                    name="accountLine"
                    id="accountLine"
                    value={accountLine}
                    className="col-4 data"
                    ></Input>
                    </FormGroup>
                    <FormGroup className="col-12">
                    <Label className="col-8"><h5>Position was posted: <Moment format="MM/DD/YYYY">{positionPosted}</Moment></h5></Label><Input
                    type="date"
                    name="positionPosted"
                    id="positionPosted"
                    value={positionPosted}
                    className="col-4 data"
                    ></Input>
                    </FormGroup>
                    <FormGroup className="col-12">
                    <Label className="col-8"><h5>Direct Supervisor: </h5></Label><Input
                    type="text"
                    name="supervisorName"
                    id="supervisorName"
                    value={supervisorName}
                    className="col-4 data"
                    ></Input>
                    </FormGroup>
                    <FormGroup className="col-12">
                    <Label className="col-8"><h5>Hiring Manager: </h5></Label><Input
                    type="text"
                    name="hiringManager"
                    id="hiringManager"
                    value={hiringManager}
                    className="col-4 data"
                    ></Input>
                    </FormGroup>
                    <FormGroup className="col-12">
                    <Label className="col-8"><h3>City Email: <a href={"mailto:"+email}>{email}</a></h3></Label><Input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="col-4 data"
                    ></Input>
                    </FormGroup>
                    <FormGroup className="col-12">
                    <Label className="col-8"><h3>WorkGroup: </h3></Label><Input
                    type="text"
                    name="workgroup"
                    id="workgroup"
                    value={workgroup}
                    className="col-4 data"
                    ></Input>
                    </FormGroup>
                    <FormGroup className="col-12">
                    <Label className="col-8"><h3>Primary Work Location:</h3></Label><Input
                    type="text"
                    name="location"
                    id="location"
                    value={location}
                    className="col-4 data"
                    ></Input>
                    </FormGroup>
                    <FormGroup className="col-12">
                    <Label className="col-6"><h3>Assigned Devices: {devices} </h3></Label><Input
                    type="textarea"
                    name="devices"
                    id="devices"
                    value={devices}
                    className="col-6 data"
                    ></Input>
                    </FormGroup>
                    <FormGroup className="col-12">
                    <Label for="exempt" className="col-8"><h5>Are they Exempt? {itemBoolean(exempt)}</h5></Label><Input
                    type="checkbox"
                    name="exempt"
                    id="exempt"
                    value={itemBoolean(exempt)}
                    className="checkbox col-4"
                    style={checkboxesStyle}
                    >{' '}</Input>
                    </FormGroup>
                    <FormGroup className="col-12">
                    <Label for="supervisorStatus" className="col-8"><h5>Are they a supervisor? {itemBoolean(supervisorStatus)}</h5></Label><Input
                    type="checkbox"
                    name="supervisorStatus"
                    id="supervisorStatus"
                    value={itemBoolean(supervisorStatus)}
                    className="checkbox col-4"
                    style={checkboxesStyle}
                    >{' '}</Input>
                    </FormGroup>
                    <FormGroup className="col-12">
                    <Label for="visaCard" className="col-8"><h5>Do they have a Visa? {itemBoolean(visaCard)}</h5></Label><Input
                    type="checkbox"
                    name="visaCard"
                    id="visaCard"
                    value={itemBoolean(visaCard)}
                    className="checkbox col-4"
                    style={checkboxesStyle}
                    >{' '}</Input>
                    </FormGroup>
                    <FormGroup className="col-12">
                    <Label for="cityHallParkingPass" className="col-8"><h5>Do they have a Parking Pass? {itemBoolean(cityHallParkingPass)}</h5></Label><Input
                    type="checkbox"
                    name="cityHallParkingPass"
                    id="cityHallParkingPass"
                    value={itemBoolean(cityHallParkingPass)}
                    className="checkbox col-4"
                    style={checkboxesStyle}
                    >{' '}</Input>
                    </FormGroup>
                    </Form>
                        </CardBody>
                        </Card>
                        </Col>
                        
                            <Col>
                            <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader><h1>Pending Requests:</h1></CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup className="col-12">
                                    <Label className="col-4"><h3>Requested Software: {requestedSoftware} </h3></Label>
                                    <Input
                                    className="col-8 data"
                                    id="requestedSoftware"
                                    name="requestedSoftware"
                                    value={requestedSoftware}
                                    type="textarea"
                                    />
                                    </FormGroup>

                                </Form>
                                
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