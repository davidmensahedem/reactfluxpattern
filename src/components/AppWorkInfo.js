import React from 'react';
import { Stack } from 'react-bootstrap';

const AppWorkInfo = (props) => {
    return ( 
        <>
            <Stack gap={2}>
                <p><span className='text-primary'>Title</span>: <span className='text-muted'>{props.WorkInfo.title}</span></p>
                <p><span className='text-primary'>Category</span>: <span className='text-muted'>{props.WorkInfo.category}</span></p>
                <p><span className='text-primary'>Year</span>: <span className='text-muted'>{props.WorkInfo.year}</span></p>
                <p><span className='text-primary'>Status</span>: <span className='text-muted'>{props.WorkInfo.status}</span></p>
                                
            </Stack>
        </>
     );
}
 
export default AppWorkInfo;