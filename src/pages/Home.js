import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Stack, Tab, Tabs, Table, Badge } from "react-bootstrap";
import AppNavbar from "../components/AppNavbar";
import AppPublishForm from "../components/AppPublishForm";
import AppWorkList from "../components/AppWorkList";
import AppWorkPopularList from "../components/AppWorkPopularList";
import AppHeader from "../components/AppHeader";
import WorkActions from "../utilities/WorkActions";
import WorkStore from "../utilities/WorkStore";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            works: [],
            categories: {
                approved: "Approved",
                notApproved: "Not Approved"
            }
        }

        this.handleClick = this.handleClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.listWorks = this.listWorks.bind(this);
    }

    componentDidMount() {
        WorkStore.addChangeListener('STORE_SUBMIT_WORK', this.listWorks);
        WorkStore.addChangeListener('STORE_APPROVE_WORK', this.listWorks);
    }

handleClick = (evt) => {
    evt.preventDefault();
    console.log("creating the work");
    let newWork = {
        id: this.state.works.length + 1,
        author: "David Mensah",
        popularityScore: Math.ceil(Math.random() * 1000)
    };

    newWork.title = document.getElementById("workTitle").value;
    newWork.category = document.getElementById("workCategory").value;
    newWork.year = document.getElementById("workYear").value;

    console.log("dispatching the submit action type with data", newWork);
    WorkActions.submitWork(newWork);

    document.getElementById("workTitle").value = '';
    document.getElementById("workCategory").value = '';
    document.getElementById("workYear").value = '';
}

onRemove() {
    this.listWorks()
}

onSubmit() {
    this.listWorks()
}

listWorks() {
    this.setState({
        works: WorkStore.getAll(),
    })
}


render() {
    return (
        <>
            <AppNavbar />
            <Container fluid>
                <AppHeader />
                <Row id="" className="">
                    <Col className="">
                        <Container className="p-3">
                            <Tabs
                                defaultActiveKey="published"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                                fill
                            >
                                <Tab eventKey="published" title="Published">
                                    <Table responsive>
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
                                            {WorkStore.getApproved().map((work, index) => (
                                                <tr key={work.index}>
                                                    <td >{work.author}</td>
                                                    <td>{work.title.length < 15 ? work.title : work.title.substring(0, 14)}</td>
                                                    <td>{work.category}</td>
                                                    <td>{work.year}</td>
                                                    <td>{work.status}</td>
                                                    <td><Badge bg="danger">{work.popularityScore}</Badge></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="notapproved" title="Pending">
                                    Not Approved
                                </Tab>
                                <Tab eventKey="contact" title="Contact">
                                    Tab content for Contact
                                </Tab>
                            </Tabs>
                        </Container>
                    </Col>
                </Row>
                {/* <Row id="works">
                        <Col md={5} className="p-3">
                            <Stack gap={2} className="p-2">
                                <p className="text-muted text-center"><b>Publish your work</b></p>
                                <AppPublishForm handleClick={this.handleClick} />
                            </Stack>
                        </Col>
                        <Col>
                            <Stack gap={3} className="text-center p-5">
                                <p className="text-muted"><b>Popular works</b></p>
                                <div>
                                    <AppWorkPopularList Works={this.state.works} WorkType={this.state.categories.approved} />
                                </div>
                            </Stack>
                        </Col>

                    </Row> */}


            </Container>
        </>
    );
}
}

export default Home;