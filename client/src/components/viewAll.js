import React from "react";
import {
    CardHeader,
    CardGroup,
    Card,
    CardBody
} from 'reactstrap';

const ViewAll = (data) => {
    return (
        <CardGroup>
            <CardHeader>Employee Name</CardHeader>
            <Card>
                <CardBody>
                    {data.name}
                </CardBody>
            </Card>
        </CardGroup>

    )
}
export default ViewAll;