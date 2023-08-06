import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import AppCarousel from "../components/AppCarousel";
import AppNavbar from "../components/AppNavbar";
import AppPublishForm from "../components/AppPublishForm";
import AppWorkList from "../components/AppWorkList";
import AppWorkPopularList from "../components/AppWorkPopularList";
import AppHeader from "../components/AppHeader";
import WorkActions from "../utilities/WorkActions";


class Home extends Component {
    state = {
        works: [
            {
                id: 1,
                title: "Generating electricity with sachet rubbers.",
                category: "Article",
                year: "2021",
                status: "Approved",
                popularityScore: 60,
                author: "David Mensah"
            },
            {
                id: 2,
                title: "Creating robots to deliver medicine.",
                category: "Article",
                year: "2022",
                status: "Approved",
                popularityScore: 80,
                author: "Jude Mensah"
            },
            {
                id: 3,
                title: "Structured Algorithms.",
                category: "Book",
                year: "2023",
                status: "Not Approved",
                popularityScore: 70,
                author: "Peter Mensah"
            },
        ],
        categories: {
            approved: "Approved",
            notApproved: "Not Approved"
        }


    }

    handleClick = () =>{
       
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
                </Container>
            </>
        );
    }
}

export default Home;