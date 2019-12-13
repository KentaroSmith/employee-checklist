import React from "react";

const ViewAll = ({name,position,email,id, workgroup, location, devices}) => {
    return (

            <div>
                
                    <h1>{id}</h1>
                    <h3> {name} </h3>
                    <h3> {position} </h3>
                    <h3> {email} </h3>
                    <h3> {workgroup} </h3>
                    <h3> {location} </h3>
                    <h3> {devices} </h3>
                
            </div>

    )
}
export default ViewAll;