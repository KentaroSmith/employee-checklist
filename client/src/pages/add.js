import React, { Component } from "react";
import api from "../utils/api";
import {
    Button,
    Jumbotron,
    Input,
    Form,
    FormGroup,
    Label,
    Row,
    Col,
    Card,
    CardBody,
    CardHeader
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
        cityHallParkingPass: false,
        newEmployee: true,
        currentEmployee: true
        }
        this.submitEmployee = this.submitEmployee.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    submitEmployee = event => {
    //documentation on forms in react is found here: https://reactjs.org/docs/forms.html
        if(this.state.employeeID.length>=5){
            api.addEmployee(this.state)
            .then(
                console.log("It worked!"),
                console.log(this.state)
            )
            .then(
                window.location.href="/"
            )
        }
        else{
            alert("Employee ID must be at least 5 characters long")
        }
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
            <div id="add">
                <Jumbotron>
                    <Card inverse id="checklistBanner">
                        <CardHeader><h1>New Hire Checklist</h1></CardHeader>
                    </Card>

                <Row>
                <Form>
                
                    <Col>
                    <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardHeader><h3>Employee information</h3></CardHeader>
                        <CardBody>
                        <FormGroup row>
                    <Label for="name"  size="lg">Name:</Label>
                    
                    <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    value={this.state.name} 
                    onChange={this.handleInputChange}
                    ></Input>
                    
                    </FormGroup>
                    <FormGroup row>
                    <Label for="start" size="lg">Start Date:</Label>
                   
                    <Input 
                    id="start" 
                    type="date" 
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.handleInputChange}
                    ></Input>
                  
                    </FormGroup>
                    <FormGroup row>
                    <Label for="supervisor"  size="lg">Supervisor:</Label>
                    
                    <Input 
                    id="supervisor" 
                    type="text"
                    name="supervisorName"
                    value={this.state.supervisorName}
                    onChange={this.handleInputChange}
                    ></Input>
                    
                    </FormGroup>
                    <FormGroup row>
                    <Label for="email" size="lg">Email:</Label>
                    
                    <Input 
                    id="email" 
                    type="email" 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    ></Input>
                  
                    </FormGroup>
                    <FormGroup row>
                    <Label for="employeeID" size="lg">Employee ID:</Label>
                    
                    <Input 
                    id="employeeID" 
                    type="number"
                    name="employeeID"
                    value={this.state.employeeID}
                    onChange={this.handleInputChange}
                    ></Input>
                   
                    </FormGroup>

                        </CardBody>
                    </Card>
                    

                    </Col>
                </Form>

                
                <Form>
                    <Col>
                    <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardHeader><h3>Position information</h3></CardHeader>
                        <CardBody>
                        <FormGroup row>
                    <Label for="position"  size="lg">Position:</Label>
                    
                    <Input 
                    id="position" 
                    type="text"
                    name="position"
                    value={this.state.position}
                    onChange={this.handleInputChange}
                    ></Input>
                    
                    </FormGroup>
                    <FormGroup row>
                    <Label for="workgroup"  size="lg">Workgroup:</Label>
                    
                    <Input 
                    type="select" 
                    id="workgroup" 
                    name="workgroup" 
                    value={this.state.workgroup}
                    onChange={this.handleInputChange}
                    >
                        <option>
                        Please select an option
                        </option>
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
                    
                    </FormGroup>
                    <FormGroup row>
                    <Label for="hiringManager"  size="lg">Hiring Manager:</Label>
                    
                    <Input 
                    id="hiringManager"
                    type="text"
                    name="hiringManager"
                    value={this.state.hiringManager}
                    onChange={this.handleInputChange}
                    ></Input>
                   
                    </FormGroup>
                    <FormGroup row>
                    <Label for="location"  size="lg">Location:</Label>
                  
                    <Input 
                    id="location" 
                    type="select"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleInputChange}
                    >
                        <option>
                        Please select an option
                        </option>
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
                    
                    </FormGroup>
                    <FormGroup row>
                    <Label for="positionPosted"  size="lg">Position Posted:</Label>
                  
                    <Input 
                    id="positionPosted" 
                    type="date"
                    name="positionPosted"
                    value={this.state.positionPosted}
                    onChange={this.handleInputChange}
                    ></Input>
                   
                    </FormGroup>
                    <FormGroup row>
                    <Label for="accountLine" size="lg">Account Line:</Label>
                   
                    <Input 
                    id="accountLine" 
                    type="select" 
                    name="accountLine"
                    value={this.state.accountLine}
                    onChange={this.handleInputChange}
                    >
                        <option>
                        Please select an option
                        </option>
                        <option value="1-3-3000">
                        Street Maintenance 1-3-3000
                        </option>
                        <option value="1-3-3020">
                        Traffic Engineering 1-3-3020
                        </option>
                        <option value="502-3-3515">
                        Solid Waste 502-3-3515
                        </option>
                        <option value="505-3-3910">
                        Stormwater Admin 505-3-3910
                        </option>
                        <option value="505-3-3915">
                        Stormwater Operations 505-3-3915
                        </option>
                        <option value="501-7-1069">
                        Utility Billing 501-7-1069
                        </option>
                        <option value="501-7-7100">
                        Administration 501-7-7100
                        </option>
                        <option value="501-7-7110">
                        Engineering 501-7-7110
                        </option>
                        <option value="501-7-7210">
                        Clinton Water Plant 501-7-7210
                        </option>
                        <option value="501-7-7220">
                        Kaw Water Plant 501-7-7220
                        </option>
                        <option value="501-7-7310">
                        KS WWTP 501-7-7310
                        </option>
                        <option value="501-7-7320">
                        WAK WWTP 501-7-7320
                        </option>
                        <option value="501-7-7410">
                        Collection System 501-7-7410
                        </option>
                        <option value="501-7-7510">
                        Quality Control 501-7-7510
                        </option>
                        <option value="501-7-7610">
                        Distribution System 501-7-7610
                        </option>

                    </Input>
                    
                    </FormGroup>
                        </CardBody>
                    </Card>
                    

                    </Col>
                    </Form>
                    
                    
                    <Form>
                   
                    <Col>
                    <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardHeader><h3>Special Permissions</h3></CardHeader>
                        <CardBody><FormGroup  check  >
                    <Label for="exempt" size="lg">Exempt
                    <Input 
                        id="exempt"
                        style={checkboxesStyle}
                        type="checkbox" 
                        name="exempt" 
                        value={this.state.exempt}
                        onChange={this.handleInputChange}
                        className="checkbox"/>{' '}   
                    </Label>
                 
                    </FormGroup>
                   
                    <FormGroup  check  >
                    <Label for="supervisorStatus" size="lg">Supervisor
                    <Input 
                        style={checkboxesStyle}
                        id="supervisorStatus"
                        type="checkbox" 
                        name="supervisorStatus" 
                        value={this.state.supervisorStatus}
                        onChange={this.handleInputChange}
                        className="checkbox"/>{' '}      
                    </Label>
                        
                    </FormGroup>
                  
                    <FormGroup  check  >
                    <Label for="visa" size="lg">Visa Card
                    <Input 
                        style={checkboxesStyle}
                        id="visa"
                        type="checkbox" 
                        name="visaCard" 
                        value={this.state.visaCard}
                        onChange={this.handleInputChange}
                        className="checkbox"/>{' '}
                    </Label>
                        
                    </FormGroup>
                  
                    <FormGroup  check  >
                    <Label for="cityHallParkingPass"  size="lg">City Hall Parking Pass
                    <Input 
                        style={checkboxesStyle}
                        id="cityHallParkingPass"
                        type="checkbox" 
                        name="cityHallParkingPass" 
                        value={this.state.cityHallParkingPass}
                        onChange={this.handleInputChange}
                        className="checkbox"/>{' '}
                    
                    </Label>
          
                    </FormGroup></CardBody>
                    </Card>
                    <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardHeader><h3>Requested Software</h3></CardHeader>
                        <CardBody>
                        {/*Considering addapting this for dynamically creating checkboxes
                        https://stackoverflow.com/questions/36205673/how-do-i-create-a-dynamic-drop-down-list-with-react-bootstrap
                        */}
                        </CardBody>
                    </Card>
                    </Col>
                    <Col>
                    
                    <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardHeader><h3>Requested Devices</h3></CardHeader>
                        <CardBody>

                        </CardBody>
                    </Card>
                    </Col>
                    {/*end of form*/}
                </Form>
                </Row>
                <Button color="primary" size="lg" id="submit" onClick={this.submitEmployee} >Submit</Button>  
        </Jumbotron>       
                
            </div>
        )
    }
}
export default AddEmployee;