import React from "react";
import {Col, Row, CardBody,Card,CardHeader} from "reactstrap";
import Moment from "react-moment";

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
    cityHallParkingPass
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
                            <CardHeader><h1>{name} <div id="start">Start Date: <Moment format="MM/DD/YYYY" >{startDate}</Moment></div></h1></CardHeader>
                            <CardBody>
                    <h3>Employee ID# {id} </h3>
                    <h3>Position Title: {position} </h3>
                    <h3>Account Line: {accountLine}</h3>
                    <h5>Position was posted: <Moment format="MM/DD/YYYY">{positionPosted}</Moment></h5>
                    <h5>Direct Supervisor: {supervisorName} </h5>
                    <h5>Hiring Manager: {hiringManager} </h5>
                    <h3>City Email: <a href={"mailto:"+email}> {email} </a></h3>
                    <h3>WorkGroup: {workgroup} </h3>
                    <h3>Primary Work Location: {location} </h3>
                    <h3>Assigned Devices: {devices} </h3>
                    <h5>Are they Exempt? {itemBoolean(exempt)}</h5>
                    <h5>Are they a supervisor? {itemBoolean(supervisorStatus)}</h5>
                    <h5>Do they have a Visa? {itemBoolean(visaCard)}</h5>
                    <h5>Do they have a Parking Pass? {itemBoolean(cityHallParkingPass)}</h5>
                        </CardBody>
                        </Card>
                        </Col>
                        
                            <Col>
                            <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader><h1>Pending Requests:</h1></CardHeader>
                            <CardBody>
                                
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