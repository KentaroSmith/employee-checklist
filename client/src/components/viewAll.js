import React from "react";

const ViewAll = ({name,position,email,id, workgroup, location, devices,_id}) => {
    return (

            <tbody>
                <tr>
                    <th scope="row"><a href={"/employeeID/"+_id}> {id} </a></th>
                    <td> {name} </td>
                    <td> {position} </td>
                    <td> {email} </td>
                    <td> {workgroup} </td>
                    <td> {location} </td>
                    <td> {devices} </td>
                </tr>
            </tbody>

    )
}
export default ViewAll;