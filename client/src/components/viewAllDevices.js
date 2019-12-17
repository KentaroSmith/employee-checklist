import React from "react";


const ViewAll = ({inventoryNum,dateBought,assigned,assignedTo, workGroup, location,_id,dataPlan,type,notes}) => {
    return (

            <tbody class="employeeData">
                <tr>
                    <th scope="row"><a href={"/employeeID/"+_id}> {inventoryNum} </a></th>
                    <td> {dateBought} </td>
                    <td> {workGroup} </td>
                    <td> {assignedTo} </td>
                    <td> {location}</td>
                    <td> {type}</td>
                    <td> {notes}</td>
                </tr>
            </tbody>

    )
}
export default ViewAll;