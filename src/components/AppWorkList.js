import ListGroup from 'react-bootstrap/ListGroup';
import AppWorkInfo from './AppWorkInfo';

function AppWorkList(props) {

    const works = props.Works != undefined ? (props.Works.filter(w => w.status == props.WorkType).map((w) => {
        return (<ListGroup.Item key={w.id}>
            <AppWorkInfo WorkInfo={w} WorkType={props.WorkType}/>
        </ListGroup.Item>)
    })) : <p>No item</p>
    return (
        <ListGroup>
            {works}
        </ListGroup>
    );
}

export default AppWorkList;