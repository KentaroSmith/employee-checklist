import React from "react";
import Moment from "react-moment";

const ViewAll = ({name,position,email,id, workgroup, location, startDate,_id}) => {
    return (

            <tbody className="employeeData">
                <tr>
                    <th scope="row"><a href={"/employeeID/"+_id}> {id} </a></th>
                    <td> {name} </td>
                    <td> {position} </td>
                    <td> <a href={"mailto:"+email}>{email}</a>  </td>
                    <td> {workgroup} </td>
                    <td> {location} </td>
                    <td> <Moment format="MM/DD/YYYY">{startDate}</Moment> </td>
                </tr>
            </tbody>

    )
}
export default ViewAll;