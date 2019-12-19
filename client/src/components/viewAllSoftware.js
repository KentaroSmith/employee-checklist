import React from "react";
import Moment from "react-moment";

const ViewAll = ({Tool,Purpose,Status,Vendor, Description, Cost, Notes,_id}) => {
    return (

            <tbody className="employeeData">
                <tr>
                    <th scope="row"><a href={"/softwareID/"+_id}> {Tool} </a></th>
                    <td> {Purpose} </td>
                    <td> {Status} </td>
                    <td> {Vendor}</td>
                    <td> {Description} </td>
                    <td> {Cost} </td>
                    <td> {Notes}</td>
                </tr>
            </tbody>

    )
}
export default ViewAll;