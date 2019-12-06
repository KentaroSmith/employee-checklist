import React from "react";
import {
    CardHeader,
    CardGroup,
    Card,
    CardBody
} from 'reactstrap';

const ViewAll = ({name,position}) => {
    return (
        <CardGroup>
<CardHeader>{name}</CardHeader>
            <Card>
                <h2> {position} </h2>
                <CardBody>
                    
                </CardBody>
            </Card>
        </CardGroup>

    )
}
export default ViewAll;