import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AppPublishForm(props) {
    return (
        <Form>
            <Form.Group className="mb-2">
                <Form.Label className='text-primary'>Title</Form.Label>
                <Form.Control type="text" id="workTitle" placeholder="Enter title" />

            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className='text-primary'>Category</Form.Label>
                <Form.Select id="workCategory" aria-label="Default select example">
                    <option value="">Choose a category</option>
                    <option value="1">Research Paper</option>
                    <option value="2">Article</option>
                    <option value="3">Book</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className='text-primary'>Year</Form.Label>
                <Form.Control id="workYear" type="text" placeholder="Year created" />
            </Form.Group>

            <div className='d-flex justify-content-center'>
                <Button variant="outline-primary" onClick={props.handleClick} id="workSubmitBtn" className='justify-self-center' type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default AppPublishForm;