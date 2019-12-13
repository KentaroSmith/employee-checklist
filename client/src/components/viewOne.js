import React from "react";

const ViewAll = ({
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
    let creditCard;
    if (visaCard){
        creditCard= "True"
    }
    else{
        creditCard= "False"
    }
    return (

            <div>
                
                    <h1>{name}</h1>
                    <h3>Employee ID# {id} </h3>
                    <h3>Position Title: {position} </h3>
                    <h3>Account Line: {accountLine}</h3>
                    <h5>Position was posted: {positionPosted} Start Date: {startDate}</h5>
                    <h5>Direct Supervisor: {supervisorName} </h5>
                    <h5>Hiring Manager: {hiringManager} </h5>
                    <h3>City Email: {email} </h3>
                    <h3>WorkGroup: {workgroup} </h3>
                    <h3>Primary Work Location {location} </h3>
                    <h3>Assigned Devices: {devices} </h3>
                    <h5>Are they Exempt?{exempt}</h5>
                    <h5>Are they a supervisor?{supervisorStatus}</h5>
                    <h5>Do they have a Visa? {creditCard}</h5>
                    <h5>Do they have a Parking Pass?{cityHallParkingPass}</h5>
                
            </div>

    )
}
export default ViewAll;