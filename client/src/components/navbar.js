import React, {useState} from 'react';
import { Navbar, 
    NavItem, 
    NavbarBrand, 
    Nav, 
    NavLink, 
    Collapse, 
    NavbarToggler,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";



const NavigationBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(

        <Navbar /* color="dark" */ expand="md">
          <NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>

          <Nav navbar>
          <Collapse isOpen={isOpen} navbar>  
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Employee Pages
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavItem>
                    <NavLink href="/employee" className="link">Add New Employee</NavLink>
                </NavItem>
                </DropdownItem>
                <DropdownItem>
                <NavItem>
                    <NavLink href="/allEmployees" className="link">View all Employees</NavLink>
                </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/*devices*/}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Device Pages
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavItem>
              <NavLink href="/device" className="link">Add New Device</NavLink>
            </NavItem>
            </DropdownItem>
            <DropdownItem>
            <NavItem>
              <NavLink href="/allDevices" className="link">View all Devices</NavLink>
            </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Device Pages
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavItem>
              <NavLink href="/software" className="link">Add Software</NavLink>
            </NavItem>
            </DropdownItem>
            <DropdownItem>
            <NavItem>
              <NavLink href="/allSoftware" className="link">View All Software</NavLink>
            </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Collapse>  
          </Nav>

        </Navbar>
    )}

    export default NavigationBar;