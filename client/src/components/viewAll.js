import React from "react";

const ViewAll = ({name,position,email,id, workgroup, location, devices}) => {
    return (

            <tbody>
                <tr>
                    <th scope="row">{id}</th>
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