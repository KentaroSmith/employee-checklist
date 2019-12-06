import React from "react";

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