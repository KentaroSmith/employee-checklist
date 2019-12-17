import React from "react";


const ViewAll = ({inventoryNum,dateBought,assigned,assignedTo, workGroup, location,_id,dataPlan,type,notes}) => {
    const nullResponse = function(data){
        if(data===null){
            return("None")
        }
        else{
            return(data)
        }
    }
    return (

            <tbody className="deviceData">
                <tr>
                    <th scope="row"><a href={"/deviceID/"+_id}> {inventoryNum} </a></th>
                    <td> {dateBought} </td>
                    <td> {workGroup} </td>
                    <td> {assignedTo} </td>
                    <td> {nullResponse(location)}</td>
                    <td> {type}</td>
                    <td> {notes}</td>
                </tr>
            </tbody>

    )
}
export default ViewAll;