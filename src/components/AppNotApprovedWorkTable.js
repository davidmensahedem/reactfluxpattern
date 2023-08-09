import React from 'react';
import { Table,Badge, Button } from 'react-bootstrap';



const AppNotApprovedWorkTable = (props) => {

    let notApprovedWorks = props.NotApprovedWorks;

    let view = notApprovedWorks.length > 0 ? (<Table responsive>
        <thead>
            <tr>
                <th>Author</th>
                <th>Title</th>
                <th>Category</th>
                <th>Year</th>
                <th>Status</th>
                <th>Stats</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {notApprovedWorks.length > 0 && notApprovedWorks.map((work, index) => (
                <tr key={work.id}>
                    <td>{work.author}</td>
                    <td>{work.title.length < 15 ? work.title : `${work.title.substring(0, 14)}...`}</td>
                    <td>{work.category}</td>
                    <td>{work.year}</td>
                    <td>{work.status}</td>
                    <td><Badge bg="danger">{work.popularityScore}</Badge></td>
                    <td><Badge bg="success"><a onClick={(evt)=>props.handleApproveWork(work)}>Approve</a></Badge></td>
                </tr>
            ))}
        </tbody>
    </Table>) : (<p className='text-center p-3'>No work available.</p>);
    return view;
}

export default AppNotApprovedWorkTable;