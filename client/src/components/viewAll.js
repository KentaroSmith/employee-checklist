import React from "react";
import {
    CardHeader,
    CardGroup,
    Card,
    CardBody,
    Table
} from 'reactstrap';

const ViewAll = ({name,position,email,id}) => {
    return (

            <tbody>
                <tr>
                    <th scope="row">{id}</th>
                    <td> {name} </td>
                    <td> {position} </td>
                    <td> {email} </td>
                </tr>
            </tbody>

    )
}
export default ViewAll;