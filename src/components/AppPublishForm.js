import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AppPublishForm(props) {
    let { handleSubmitWork } = props;
    return (
        <div className='p-3'>
            <Form className='bg-light p-3'>

                <Form.Group className="mb-2">
                    <Form.Label className='text-primary'>Author</Form.Label>
                    <Form.Control type="text" id="workAuthor" placeholder="Enter author name" />
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Label className='text-primary'>Title</Form.Label>
                    <Form.Control type="text" id="workTitle" placeholder="Enter title" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='text-primary'>Category</Form.Label>
                    <Form.Select id="workCategory" aria-label="Default select example">
                        <option value="">Choose a category</option>
                        <option value="Research Paper">Research Paper</option>
                        <option value="Article">Article</option>
                        <option value="Book">Book</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='text-primary'>Year</Form.Label>
                    <Form.Control id="workYear" type="text" placeholder="Year created" />
                </Form.Group>

                <div className='d-flex justify-content-center'>
                    <Button variant="outline-primary" onClick={(evt) => handleSubmitWork(evt)} id="workSubmitBtn" className='justify-self-center' type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default AppPublishForm;