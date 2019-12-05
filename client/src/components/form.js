import React from "react";
import {
    Jumbotron,
    Input,
    Form,
    FormGroup,
    Label,
    Col
} from "reactstrap";

const NewEmployeeForm =() =>{
    return(
        <Jumbotron>
            <h1>New Hire Checklist</h1>
            
                <h3>Employee info</h3>
                <Form>
                    <FormGroup row>
                    <Label for="name" sm={2} size="lg">Name:</Label>
                    <Col>
                    <Input id="name" ref="name" value=""></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="start" sm={2} size="lg">Start Date:</Label>
                    <Col>
                    <Input id="start" type="date" value=""></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="supervisor" sm={2} size="lg">Supervisor:</Label>
                    <Col>
                    <Input id="supervisor" value=""></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="email" sm={2} size="lg">Email:</Label>
                    <Col>
                    <Input id="email" type="email" value=""></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="employeeID" sm={2} size="lg">Employee ID:</Label>
                    <Col>
                    <Input id="employeeID" value=""></Input>
                    </Col>
                    </FormGroup>
                </Form>

                <h3>Position information</h3>
                <Form>
                    <FormGroup row>
                    <Label for="position" sm={2} size="lg">Position:</Label>
                    <Col>
                    <Input id="position" value=""></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="workgroup" sm={2} size="lg">Workgroup:</Label>
                    <Col>
                    <Input type="select" id="workgroup" name="select" value="">
                        <option value="water">
                        Water Utilities
                        </option>
                        <option value="sewer">
                        Sewer Utilities
                        </option>
                        <option value="streets">
                        Streets
                        </option>
                        <option value="traffic">
                        Traffic
                        </option>
                        <option value="solid waste">
                        Solid Waste
                        </option>
                        <option value="internal services">
                        Internal Services
                        </option>
                    </Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="hiringManager" sm={2} size="lg">Hiring Manager:</Label>
                    <Col>
                    <Input id="hiringManager" value=""></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="location" sm={2} size="lg">Location:</Label>
                    <Col>
                    <Input id="location" type="select" value="">
                    <option value="kaw">
                        Kaw Water Treatment Plant
                        </option>
                        <option value="wwtp">
                        WWTP
                        </option>
                        <option value="streets">
                        Streets
                        </option>
                        <option value="traffic">
                        Traffic
                        </option>
                        <option value="solid waste">
                        Solid Waste
                        </option>
                        <option value="city hall">
                        City Hall
                        </option>
                    </Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="positionPosted" sm={2} size="lg">Position Posted:</Label>
                    <Col>
                    <Input id="positionPosted" type="date" value=""></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="accountLine" sm={2} size="lg">Account Line:</Label>
                    <Col>
                    <Input id="accountLine" type="number" value=""></Input>
                    </Col>
                    </FormGroup>
                   
                    
                    <FormGroup row check id="exempt" value="">
                    <Label for="exempt" sm={2} size="lg">Exempt:</Label>
                        
                        <Input type="radio" name="radio1" value="true" class="radio"/>{' '}Yes        

                        <Input type="radio" name="radio1" value="false" class="radio"/>{' '}No
                    </FormGroup>
                    
                    
                    <FormGroup row check id="supervisorStatus" value="">
                    <Label for="supervisor" sm={2} size="lg">Supervisor:</Label>

                        <Input type="radio" name="radio2" value="true" class="radio"/>{' '}Yes        
                        <Input type="radio" name="radio2" value="false" class="radio"/>{' '}No
    
                    </FormGroup>
                    
                    <FormGroup row check id="visa" value="">
                    <Label for="visa" sm={2} size="lg">Visa Card:</Label>

                        <Input type="radio" name="radio3" value="true" class="radio"/>{' '}Yes 
                        <Input type="radio" name="radio3" value="false" class="radio"/>{' '}No 
                        
    
                    </FormGroup>
                    <FormGroup row check id="cityHallParkingPass" value="">
                    <Label for="cityHallParkingPass" sm={2} size="lg">City Hall Parking Pass:</Label>

                        <Input type="radio" name="radio3" value="true" class="radio"/>{' '}Yes 
                        <Input type="radio" name="radio3" value="false" class="radio"/>{' '}No 
                        
    
                    </FormGroup>
                    
                    {/*end of form*/}
                </Form>
           
        </Jumbotron>
    )
}
export default NewEmployeeForm