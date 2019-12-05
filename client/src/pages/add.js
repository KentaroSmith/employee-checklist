import React, { Component } from "react";
import { Button } from "reactstrap";
import NewEmployeeForm from "../components/form"
import api from "../utils/api";
import {
    Jumbotron,
    Input,
    Form,
    FormGroup,
    Label,
    Col
} from "reactstrap";
class AddEmployee extends Component {
    state = {
        name: "Janice Wallace",
        startDate: "12/2/2019",
        supervisorName: "Amber",
        email: "jnelson1@lawrenceks.org",
        employeeID: "223456",
        position: "HR Specialist",
        workgroup: "Internal Services",
        hiringManager: "Amber",
        location: "City Hall",
        positionPosted: "11/18/2019",
        accountLine: "501-7-7100-1021",
        exempt: false,
        supervisorStatus: false,
        visaCard: true,
        cityHallParkingPass: true
    }
    /* constructor(props){
        super(props);
        this.state = {
            name: "Janice Wallace",
        startDate: "12/2/2019",
        supervisorName: "Amber",
        email: "jnelson1@lawrenceks.org",
        employeeID: "223456",
        position: "HR Specialist",
        workgroup: "Internal Services",
        hiringManager: "Amber",
        location: "City Hall",
        positionPosted: "11/18/2019",
        accountLine: "501-7-7100-1021",
        exempt: false,
        supervisorStatus: false,
        visaCard: true,
        cityHallParkingPass: true
        }
    } */
    submitEmployee = event => {
        //Need to find out how information can be save via input forms in react
        api.addEmployee(this.state)
            .then(
                console.log("It worked!"),
                console.log(this.state)
            )
    }
    render() {
        return (
            <div id="add">
                        <Jumbotron>
            <h1>New Hire Checklist</h1>
            
                <h3>Employee info</h3>
                <Form>
                    <FormGroup row>
                    <Label for="name" sm={2} size="lg">Name:</Label>
                    <Col>
                    <Input id="name" value="" onChange={
                        this.setState(()=>{
                            return{name: this.value}
                        })
                    }></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="start" sm={2} size="lg">Start Date:</Label>
                    <Col>
                    <Input id="start" type="date" value="" 
                    onChange={
                        this.setState(()=>{
                            return{date: this.value}
                        })
                    }></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="supervisor" sm={2} size="lg">Supervisor:</Label>
                    <Col>
                    <Input id="supervisor" value="" onChange={
                        this.setState(()=>{
                            return{supervisorName: this.value}
                        })
                    }></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="email" sm={2} size="lg">Email:</Label>
                    <Col>
                    <Input id="email" type="email" value="" onChange={
                        this.setState(()=>{
                            return{email: this.value}
                        })
                    }></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="employeeID" sm={2} size="lg">Employee ID:</Label>
                    <Col>
                    <Input id="employeeID" value="" onChange={
                        this.setState(()=>{
                            return{employeeID: this.value}
                        })
                    }></Input>
                    </Col>
                    </FormGroup>
                </Form>

                <h3>Position information</h3>
                <Form>
                    <FormGroup row>
                    <Label for="position" sm={2} size="lg">Position:</Label>
                    <Col>
                    <Input id="position" value="" onChange={
                        this.setState(()=>{
                            return{position: this.value}
                        })
                    }></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="workgroup" sm={2} size="lg">Workgroup:</Label>
                    <Col>
                    <Input type="select" id="workgroup" name="select" value="" onChange={
                        this.setState(()=>{
                            return{workgroup: this.value}
                        })
                    }>
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
                    <Input id="hiringManager" value="" onChange={
                        this.setState(()=>{
                            return{hiringManager: this.value}
                        })
                    }></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="location" sm={2} size="lg">Location:</Label>
                    <Col>
                    <Input id="location" type="select" value="" onChange={
                        this.setState(()=>{
                            return{location: this.value}
                        })
                    }>
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
                    <Input id="positionPosted" type="date" value="" onChange={
                        this.setState(()=>{
                            return{positionPosted: this.value}
                        })
                    }></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="accountLine" sm={2} size="lg" >Account Line:</Label>
                    <Col>
                    <Input id="accountLine" type="number" value="" onChange={
                        this.setState(()=>{
                            return{accountLine: this.value}
                        })
                    }></Input>
                    </Col>
                    </FormGroup>
                   
                    
                    <FormGroup row check id="exempt" value="" onChange={
                        this.setState(()=>{
                            return{exempt: this.value}
                        })
                    }>
                    <Label for="exempt" sm={2} size="lg">Exempt:</Label>
                        
                        <Input type="radio" name="radio1" value="true" class="radio"/>{' '}Yes        

                        <Input type="radio" name="radio1" value="false" class="radio"/>{' '}No
                    </FormGroup>
                    
                    
                    <FormGroup row check id="supervisorStatus" value="" onChange={
                        this.setState(()=>{
                            return{supervisorStatus: this.value}
                        })
                    }>
                    <Label for="supervisor" sm={2} size="lg">Supervisor:</Label>

                        <Input type="radio" name="radio2" value="true" class="radio"/>{' '}Yes        
                        <Input type="radio" name="radio2" value="false" class="radio"/>{' '}No
    
                    </FormGroup>
                    
                    <FormGroup row check id="visa" value="" onChange={
                        this.setState(()=>{
                            return{visaCard: this.value}
                        })
                    }>
                    <Label for="visa" sm={2} size="lg">Visa Card:</Label>

                        <Input type="radio" name="radio3" value="true" class="radio"/>{' '}Yes 
                        <Input type="radio" name="radio3" value="false" class="radio"/>{' '}No 
                        
    
                    </FormGroup>
                    <FormGroup row check id="cityHallParkingPass" value="" onChange={
                        this.setState(()=>{
                            return{cityHallParkingPass: this.value}
                        })
                    }>
                    <Label for="cityHallParkingPass" sm={2} size="lg">City Hall Parking Pass:</Label>

                        <Input type="radio" name="radio3" value="true" class="radio"/>{' '}Yes 
                        <Input type="radio" name="radio3" value="false" class="radio"/>{' '}No 
                        
    
                    </FormGroup>
                    
                    {/*end of form*/}
                </Form>
           
        </Jumbotron>
                <Button color="primary" id="submit" onClick={this.submitEmployee} >Submit</Button>
            </div>
        )
    }
}
export default AddEmployee;