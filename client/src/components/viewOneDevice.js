import React from "react";
import {Col, Row, CardBody,Card,CardHeader} from "reactstrap";
import Moment from "react-moment";

const ViewOne = ({
    inventoryNum,
    dateBought,
    assigned,
    assignedTo, 
    workGroup, 
    location, 
    dataPlan,
    type,
    notes
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
                            <CardHeader><h1>{inventoryNum} <div id="start">Purchase Date: <Moment format="MM/DD/YYYY" >{dateBought}</Moment></div></h1></CardHeader>
                            <CardBody>
                    <h3>Type of Device: {type} </h3>
                    <h3>Assigned to: {assignedTo} </h3>
                    <h3>Work Group: {workGroup}</h3>
                    <h3>Primary Work Location: {location} </h3>
                    <h5>Is it assigned? {itemBoolean(assigned)}</h5>
                    <h5>Does it have a data plan? {itemBoolean(dataPlan)}</h5>
                        </CardBody>
                        </Card>
                        </Col>
                        
                            <Col>
                            <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader><h1>Pending Requests:</h1></CardHeader>
                            <CardBody>
                            <h5>Notes: {notes}</h5>          
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