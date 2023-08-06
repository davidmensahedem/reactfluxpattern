import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Badge from 'react-bootstrap/Badge';

let showProgressBar = (stats) => {
    return <ProgressBar now={stats} />;
}

let compareNumbers = (a, b) => {
    return b - a;
}

function AppWorkPopularList(props) {

    const works = props.Works != undefined ? (props.Works.sort().filter(w => w.status == props.WorkType).map((w) => {
        return (<ListGroup.Item key={w.id}>
            <p><small className='text-primary'>{w.title}: <Badge bg="danger">{w.popularityScore}</Badge></small></p>
            <p><small className='text-primary'>By: {w.author}</small></p>
        </ListGroup.Item>)
    })) : <p>No item</p>
    return (
        <ListGroup>
            {works}
        </ListGroup>
    );
}

export default AppWorkPopularList;