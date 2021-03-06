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
class AddSoftware extends Component {
    //For the state of the software page, not all fields have inputs. Not sure if
    //all fields will be included in final schema
    constructor(props){
        super(props);
        this.state = {
        Tool: "",
        Purpose: "",
        supervisorName: "",
        //Status will be a dropdown option
        Status: "",
        //this is the number of liscenses, not the actual license itself
        LicenseNumber: "",
        Manager: "",
        Administrator: [],
        //Not going to add anything to users - work flow should be to add software
        //first, then update software as users are added - keep as empty array
        Users: [],
        Installer: "",
        Description: "",
        Integrations: "",
        StatusDetails: "",
        Vendor: "",
        //I feel like this should change in the schema to just annual cost
        Cost2019: "",
        VendorContact: "",
        VendorPhone: "",
        VendorEmail: "",
        VendorDetails: "",
        Format: "",
        TrainingDetails: "",
        Plans: "",
        FileManuals: "",
        FileContracts: "",
        DataLocation: "",
        FileOther: "",
        DataFormat: "",
        Reviewer: "",
        InterfaceWebsite: "",
        Notes: "",
        }
        this.submitSoftware = this.submitSoftware.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    submitSoftware = event => {
    //documentation on forms in react is found here: https://reactjs.org/docs/forms.html
            api.addSoftware(this.state)
            .then(
                console.log("It worked!"),
                console.log(this.state)
            )
            .then(
                window.location.href="/allSoftware"
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
                        <CardHeader><h1>New Software log</h1></CardHeader>
                    </Card>

                <Row>
                <Form>
                
                    <Col>
                    <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardHeader><h3>Basic Information</h3></CardHeader>
                        <CardBody>
                        <FormGroup row>
                    <Label for="name"  size="lg">Tool Name:</Label>
                    
                    <Input 
                    id="name" 
                    name="Tool" 
                    type="text" 
                    value={this.state.Tool} 
                    onChange={this.handleInputChange}
                    ></Input>
                    
                    </FormGroup>
                    <FormGroup row>
                    <Label for="purpose" size="lg">Software Purpose:</Label>
                   
                    <Input 
                    id="purpose" 
                    type="text" 
                    name="Purpose"
                    value={this.state.Purpose}
                    onChange={this.handleInputChange}
                    ></Input>
                  
                    </FormGroup>
                    <FormGroup row>
                    <Label for="status"  size="lg">Status:</Label>
                    
                    <Input 
                    id="status" 
                    type="select"
                    name="Status"
                    value={this.state.Status}
                    onChange={this.handleInputChange}
                    >
                        <option>
                        Please select an option
                        </option>
                        <option value="Proposed">
                        Proposed
                        </option>
                        <option value="Implementation">
                        Implementation
                        </option>
                        <option value="Operational">
                        Operational
                        </option>
                        <option value="Outgoing">
                        Outgoing
                        </option>
                        <option value="Legacy">
                        Legacy
                        </option>

                    </Input>
                    
                    </FormGroup>
                    <FormGroup row>
                    <Label for="LicenseNumber" size="lg">Number of Licenses:</Label>
                    
                    <Input 
                    id="LicenseNumber" 
                    type="number" 
                    name="LicenseNumber"
                    value={this.state.LicenseNumber}
                    onChange={this.handleInputChange}
                    ></Input>
                  
                    </FormGroup>
                    <FormGroup row>
                    <Label for="Manager" size="lg">Manager:</Label>
                    
                    <Input 
                    id="Manager" 
                    type="text"
                    name="Manager"
                    value={this.state.Manager}
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
                        <CardHeader><h3>Maintenance Information</h3></CardHeader>
                        <CardBody>
                        <FormGroup row>
                    <Label for="Administrator"  size="lg">Administrator:</Label>
                    
                    <Input 
                    id="Administrator" 
                    type="text"
                    name="Administrator"
                    value={this.state.Administrator}
                    onChange={this.handleInputChange}
                    ></Input>
                    
                    </FormGroup>
                    
                    <FormGroup row>
                    <Label for="Description"  size="lg">Description:</Label>
                    
                    <Input 
                    id="Description"
                    type="text"
                    name="Description"
                    value={this.state.Description}
                    onChange={this.handleInputChange}
                    ></Input>
                   
                    </FormGroup>
                    <FormGroup row>
                    <Label for="Integrations"  size="lg">Integrations:</Label>
                  
                    <Input 
                    id="Integrations" 
                    type="text"
                    name="Integrations"
                    value={this.state.Integrations}
                    onChange={this.handleInputChange}
                    >
                    </Input>
                    
                    </FormGroup>
                    <FormGroup row>
                    <Label for="StatusDetails"  size="lg">Status Details:</Label>
                  
                    <Input 
                    id="StatusDetails" 
                    type="text"
                    name="StatusDetails"
                    value={this.state.StatusDetails}
                    onChange={this.handleInputChange}
                    ></Input>
                   
                    </FormGroup>
                    <FormGroup row>
                    <Label for="Cost2019" size="lg">Cost:</Label>
                   
                    <Input 
                    id="Cost2019" 
                    type="text" 
                    name="Cost2019"
                    value={this.state.Cost2019}
                    onChange={this.handleInputChange}
                    >
                    </Input>
                    
                    </FormGroup>
                    </CardBody>
                    </Card>
                    </Col>
                    </Form>
                    
                    {/* <FormGroup row>
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
                   
                    <Form>
                    <Col>
                    
                    <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardHeader><h3>Vendor Information</h3></CardHeader>
                        <CardBody>
                    <FormGroup row>
                    <Label for="Vendor" size="lg">Vendor Company Name:</Label>
                   
                    <Input 
                    id="Vendor" 
                    type="text" 
                    name="Vendor"
                    value={this.state.Vendor}
                    onChange={this.handleInputChange}
                    >
                    </Input>
                    
                    </FormGroup>
                    <FormGroup row>
                        <Label for="VendorContact">Vendor Contact</Label>
                        <Input
                        id="VendorContact"
                        type="text"
                        name="VendorContact"
                        value={this.state.VendorContact}
                        onChange={this.handleInputChange}
                        ></Input>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="VendorPhone" size="lg">Vendor Phone:</Label>
                   
                    <Input 
                    id="VendorPhone" 
                    type="tel" 
                    name="VendorPhone"
                    value={this.state.VendorPhone}
                    onChange={this.handleInputChange}
                    >
                    </Input>
                    
                    </FormGroup>
                    <FormGroup row>
                        <Label for="VendorEmail">Vendor Email</Label>
                        <Input
                        id="VendorEmail"
                        type="email"
                        name="VendorEmail"
                        value={this.state.VendorEmail}
                        onChange={this.handleInputChange}
                        ></Input>
                    </FormGroup>
                    
                    <FormGroup row>
                        <Label for="VendorDetails">Vendor Details</Label>
                        <Input
                        id="VendorDetails"
                        type="textarea"
                        name="VendorDetails"
                        value={this.state.VendorDetails}
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
                        <CardHeader><h3>Misc Information</h3></CardHeader>
                        <CardBody>
                    <FormGroup row>
                    <Label for="Notes" size="lg">Notes:</Label>
                   
                    <Input 
                    id="Notes" 
                    type="textarea" 
                    name="Notes"
                    value={this.state.Notes}
                    onChange={this.handleInputChange}
                    >
                    </Input>
                    
                    </FormGroup>
                    </CardBody>
                        </Card>
                        </Col>
                    </Form>
                </Row>     
                {/*end of form*/}
                <Button color="primary" size="lg" id="submit" onClick={this.submitSoftware} >Submit</Button>  
        </Jumbotron>       
                
            </div>
        )
    }
}
export default AddSoftware;