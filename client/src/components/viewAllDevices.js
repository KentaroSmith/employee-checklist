import React from "react";
import Moment from "react-moment";

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
                    <td><Moment format="MM/DD/YYYY">{dateBought}</Moment></td>
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