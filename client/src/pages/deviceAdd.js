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
class AddDevice extends Component {
    constructor(props){
        super(props);
        this.state = {
        inventoryNum: "",
        dateBought: "",
        workGroup: "",
        assigned: false,
        assignedTo: "",
        dataPlan: false,
        notes: "",
        type: "",
        location:"",
        active: false
        }
        this.submitDevice = this.submitDevice.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    submitDevice = event => {
    //documentation on forms in react is found here: https://reactjs.org/docs/forms.html
        api.addDevice(this.state)
            .then(
                console.log("It worked!"),
                console.log(this.state)
            )
/*             .then(
                window.location.href="/"
            ) */
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
                        <CardHeader><h1>New Device Form</h1></CardHeader>
                    </Card>

                <Row>
                <Form>
                
                    <Col>
                    <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardHeader><h3>Basic Information</h3></CardHeader>
                        <CardBody>
                        <FormGroup row>
                    <Label for="inventoryNum"  size="lg">Inventory Number:</Label>
                    
                    <Input 
                    id="inventoryNum" 
                    name="inventoryNum" 
                    type="text" 
                    value={this.state.name} 
                    onChange={this.handleInputChange}
                    ></Input>
                    
                    </FormGroup>
                    <FormGroup row>
                    <Label for="type"  size="lg">Type:</Label>
                  
                    <Input 
                    id="type" 
                    type="select"
                    name="type"
                    value={this.state.type}
                    onChange={this.handleInputChange}
                    >
                        <option value="Smart Phone">
                        Smart Phone
                        </option>
                        <option value="Flip Phone">
                        Flip Phone
                        </option>
                        <option value="Desktop">
                        Desktop
                        </option>
                        <option value="Laptop">
                        Laptop
                        </option>
                        <option value="Surface Pro">
                        Surface Pro
                        </option>
                        <option value="Tablet">
                        Tablet
                        </option>
                        <option value="Mi-Fi">
                        Mi-Fi Pack
                        </option>
                    </Input>
                    
                    </FormGroup>
                    <FormGroup row>
                    <Label for="start" size="lg">Purchase Date:</Label>
                   
                    <Input 
                    id="dateBought" 
                    type="date" 
                    name="dateBought"
                    value={this.state.startDate}
                    onChange={this.handleInputChange}
                    ></Input>
                  
                    </FormGroup>
                    <FormGroup row>
                    <Label for="assignedTo"  size="lg">Assigned To:</Label>
                    
                    <Input 
                    id="assignedTo" 
                    type="text"
                    name="assignedTo"
                    value={this.state.supervisorName}
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
                        <CardHeader><h3>Details</h3></CardHeader>
                        <CardBody>

                    <FormGroup row>
                    <Label for="workGroup"  size="lg">Workgroup:</Label>
                    
                    <Input 
                    type="select" 
                    id="workGroup" 
                    name="workGroup" 
                    value={this.state.workGroup}
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
                    
                    </FormGroup>
                    <FormGroup row>
                    <Label for="notes"  size="lg">Notes:</Label>
                    
                    <Input 
                    id="notes"
                    type="text"
                    name="notes"
                    value={this.state.notes}
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
                        <option value="Mobile">
                        Mobile
                        </option>
                    </Input>
                    
                    </FormGroup>
                    <Label for="assigned" size="lg">Assigned
                    <Input 
                        id="assigned"
                        style={checkboxesStyle}
                        type="checkbox" 
                        name="assigned" 
                        value={this.state.assigned}
                        onChange={this.handleInputChange}
                        className="checkbox"/>{' '}   
                    </Label>
                    <Label for="active" size="lg">Active
                    <Input 
                        id="active"
                        style={checkboxesStyle}
                        type="checkbox" 
                        name="active" 
                        value={this.state.active}
                        onChange={this.handleInputChange}
                        className="checkbox"/>{' '}   
                    </Label>
                    <Label for="dataPlan" size="lg">Data Plan
                    <Input 
                        id="dataPlan"
                        style={checkboxesStyle}
                        type="checkbox" 
                        name="dataPlan" 
                        value={this.state.dataPlan}
                        onChange={this.handleInputChange}
                        className="checkbox"/>{' '}   
                    </Label>
                        </CardBody>
                    </Card>
                    </Col>
                    </Form>
                </Row>
                <Button color="primary" size="lg" id="submit" onClick={this.submitDevice} >Submit</Button>  
        </Jumbotron>       
                
            </div>
        )
    }
}
export default AddDevice;