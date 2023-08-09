import React from 'react';
import { Table,Badge } from 'react-bootstrap';



const AppPublishedWorkTable = (props) => {

    let publishedWorks = props.PublishedWorks;

    let view = publishedWorks.length > 0 ? (<Table responsive>
        <thead>
            <tr>
                <th>Author</th>
                <th>Title</th>
                <th>Category</th>
                <th>Year</th>
                <th>Status</th>
                <th>Stats</th>
            </tr>
        </thead>
        <tbody>
            {publishedWorks.length > 0 && publishedWorks.map((work, index) => (
                <tr key={work.id}>
                    <td>{work.author}</td>
                    <td>{work.title.length < 15 ? work.title : `${work.title.substring(0, 14)}...`}</td>
                    <td>{work.category}</td>
                    <td>{work.year}</td>
                    <td>{work.status}<Badge bg="danger" className="mx-1 flagApproved" onClick={()=> props.handleDisapproveWork(work)}>Flag</Badge></td>
                    <td><Badge bg="warning">{work.popularityScore}</Badge></td>
                </tr>
            ))}
        </tbody>
    </Table>) : (<p className='text-center p-3'>No published work available.</p>);

    return view;
}

export default AppPublishedWorkTable;