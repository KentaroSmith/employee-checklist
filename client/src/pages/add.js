import React, { Component } from "react";
import api from "../utils/api";
import {
    Button,
    Jumbotron,
    Input,
    Form,
    FormGroup,
    Label,
    Col
} from "reactstrap";
class AddEmployee extends Component {
    constructor(props){
        super(props);
        this.state = {
        name: "",
        startDate: "",
        supervisorName: "",
        email: "",
        employeeID: "",
        position: "",
        workgroup: "",
        hiringManager: "",
        location: "",
        positionPosted: "",
        accountLine: "",
        exempt: false,
        supervisorStatus: false,
        visaCard: false,
        cityHallParkingPass: false
        }
        this.submitEmployee = this.submitEmployee.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    submitEmployee = event => {
    //documentation on forms in react is found here: https://reactjs.org/docs/forms.html
        api.addEmployee(this.state)
            .then(
                console.log("It worked!"),
                console.log(this.state)
            )
            .then(
                window.location.href="/"
            )
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
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
                    <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    value={this.state.name} 
                    onChange={this.handleInputChange}
                    ></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="start" sm={2} size="lg">Start Date:</Label>
                    <Col>
                    <Input 
                    id="start" 
                    type="date" 
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.handleInputChange}
                    ></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="supervisor" sm={2} size="lg">Supervisor:</Label>
                    <Col>
                    <Input 
                    id="supervisor" 
                    type="text"
                    name="supervisorName"
                    value={this.state.supervisorName}
                    onChange={this.handleInputChange}
                    ></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="email" sm={2} size="lg">Email:</Label>
                    <Col>
                    <Input 
                    id="email" 
                    type="email" 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    ></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="employeeID" sm={2} size="lg">Employee ID:</Label>
                    <Col>
                    <Input 
                    id="employeeID" 
                    type="number"
                    name="employeeID"
                    value={this.state.employeeID}
                    onChange={this.handleInputChange}
                    ></Input>
                    </Col>
                    </FormGroup>
                </Form>

                <h3>Position information</h3>
                <Form>
                    <FormGroup row>
                    <Label for="position" sm={2} size="lg">Position:</Label>
                    <Col>
                    <Input 
                    id="position" 
                    type="text"
                    name="position"
                    value={this.state.position}
                    onChange={this.handleInputChange}
                    ></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="workgroup" sm={2} size="lg">Workgroup:</Label>
                    <Col>
                    <Input 
                    type="select" 
                    id="workgroup" 
                    name="workgroup" 
                    value={this.state.workgroup}
                    onChange={this.handleInputChange}
                    >
                        <option value="Water Utilities">
                        Water Utilities
                        </option>
                        <option value="Sewer Utilities">
                        Sewer Utilities
                        </option>
                        <option value="Streets Department">
                        Streets
                        </option>
                        <option value="Traffic Department">
                        Traffic
                        </option>
                        <option value="Solid Waste">
                        Solid Waste
                        </option>
                        <option value="Internal Services">
                        Internal Services
                        </option>
                    </Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="hiringManager" sm={2} size="lg">Hiring Manager:</Label>
                    <Col>
                    <Input 
                    id="hiringManager"
                    type="text"
                    name="hiringManager"
                    value={this.state.hiringManager}
                    onChange={this.handleInputChange}
                    ></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="location" sm={2} size="lg">Location:</Label>
                    <Col>
                    <Input 
                    id="location" 
                    type="select"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleInputChange}
                    >
                    <option value="Kaw Water Treatment Plant">
                        Kaw Water Treatment Plant
                        </option>
                        <option value="WWTP">
                        WWTP
                        </option>
                        <option value="Streets">
                        Streets
                        </option>
                        <option value="Traffic">
                        Traffic
                        </option>
                        <option value="Solid Waste">
                        Solid Waste
                        </option>
                        <option value="City Hall">
                        City Hall
                        </option>
                    </Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="positionPosted" sm={2} size="lg">Position Posted:</Label>
                    <Col>
                    <Input 
                    id="positionPosted" 
                    type="date"
                    name="positionPosted"
                    value={this.state.positionPosted}
                    onChange={this.handleInputChange}
                    ></Input>
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="accountLine" sm={2} size="lg">Account Line:</Label>
                    <Col>
                    <Input 
                    id="accountLine" 
                    type="text" 
                    name="accountLine"
                    value={this.state.accountLine}
                    onChange={this.handleInputChange}
                    ></Input>
                    </Col>
                    </FormGroup>
                   
                    
                    <FormGroup row check id="exempt" >
                    <Label for="exempt" sm={2} size="lg">Exempt:</Label>
                        <Input 
                        type="checkbox" 
                        name="exempt" 
                        value={this.state.exempt}
                        onChange={this.handleInputChange}
                        class="checkbox"/>{' '}      
                    </FormGroup>
                    
                    
                    <FormGroup row check id="supervisorStatus" >
                    <Label for="supervisorStatus" sm={2} size="lg">Supervisor:</Label>
                        <Input 
                        type="checkbox" 
                        name="supervisorStatus" 
                        value={this.state.supervisorStatus}
                        onChange={this.handleInputChange}
                        class="radio"/>{' '}      
                    </FormGroup>
                    
                    <FormGroup row check id="visa" >
                    <Label for="visa" sm={2} size="lg">Visa Card:</Label>
                        <Input 
                        type="checkbox" 
                        name="visaCard" 
                        value={this.state.visaCard}
                        onChange={this.handleInputChange}
                        class="radio"/>{' '}
                    </FormGroup>
                    <FormGroup row check id="cityHallParkingPass" >
                    <Label for="cityHallParkingPass" sm={2} size="lg">City Hall Parking Pass:</Label>
                        <Input 
                        type="checkbox" 
                        name="cityHallParkingPass" 
                        value={this.state.cityHallParkingPass}
                        onChange={this.handleInputChange}
                        class="radio"/>{' '}
                    </FormGroup>
                    
                    {/*end of form*/}
                </Form>
                <Button color="primary" id="submit" onClick={this.submitEmployee} >Submit</Button>  
        </Jumbotron>       
                
            </div>
        )
    }
}
export default AddEmployee;