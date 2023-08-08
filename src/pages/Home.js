import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Stack, Tab, Tabs } from "react-bootstrap";
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
        this.listWorks();
        WorkStore.addChangeListener('STORE_SUBMIT_WORK', this.listWorks);
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
                    <Row id="works">
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

                    </Row>
                    <Row className="bg-light">
                        <Col>
                            <Stack gap={3} className="text-center p-5">
                                <h3 className="p-2 p-3 text-muted">Published works</h3>
                                <div>
                                    <AppWorkList Works={this.state.works} WorkType={this.state.categories.approved} />
                                </div>
                            </Stack>
                        </Col>
                        <Col>
                            <Stack gap={3} className="text-center p-5">
                                <h3 className="p-2 p-3 text-muted">Pending works</h3>
                                <div>
                                    <AppWorkList Works={this.state.works} WorkType={this.state.categories.notApproved} />
                                </div>
                            </Stack>
                        </Col>

                    </Row>
                    <Row id="">
                        <Col className="">
                            <Container className="p-3">
                                <Tabs
                                    defaultActiveKey="profile"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                    fill
                                >
                                    <Tab eventKey="home" title="Home">
                                        
                                    </Tab>
                                    <Tab eventKey="profile" title="Profile">
                                        Tab content for Profile
                                    </Tab>
                                    <Tab eventKey="contact" title="Contact">
                                        Tab content for Contact
                                    </Tab>
                                </Tabs>
                            </Container>
                        </Col>
                        

                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;