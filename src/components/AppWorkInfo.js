import React from 'react';
import { Button, Stack, Badge } from 'react-bootstrap';

const AppWorkInfo = (props) => {
    return (
        <>
            <Stack gap={1}>
                <p>
                    <span className=''>
                        <Badge bg="primary">
                            Author: <span className=''>{props.WorkInfo.author}</span>
                        </Badge>
                    </span>
                </p>
                <p><span className='text-primary'>Title</span>: <span className='text-muted'>{props.WorkInfo.title}</span></p>
                <p><span className='text-primary'>Category</span>: <span className='text-muted'>{props.WorkInfo.category}</span></p>
                <p><span className='text-primary'>Year</span>: <span className='text-muted'>{props.WorkInfo.year}</span></p>
                <p><span className='text-primary'>Status</span>: <span className='text-muted'>{props.WorkInfo.status == "Approved" ? <Badge bg="success">
                    <span className=''>{props.WorkInfo.status}</span>
                </Badge> : <Badge bg="danger">
                    <span className=''>{props.WorkInfo.status}</span>
                </Badge>}</span></p>
                {props.WorkType == "Approved" ? null : <hr/>}
                {props.WorkType == "Approved" ? null : <p><Button size="sm" variant="outline-success" className=''>Approve Work</Button></p>}
            </Stack >
        </>
    );
}

export default AppWorkInfo;