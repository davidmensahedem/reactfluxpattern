import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import AppCarousel from "../components/AppCarousel";
import AppNavbar from "../components/AppNavbar";
import AppPublishForm from "../components/AppPublishForm";
import AppWorkList from "../components/AppWorkList";
import AppWorkPopularList from "../components/AppWorkPopularList";

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
                author:"David Mensah"
            },
            {
                id: 2,
                title: "Creating robots to deliver medicine.",
                category: "Article",
                year: "2022",
                status: "Approved",
                popularityScore: 80,
                author:"Jude Mensah"
            },
            {
                id: 3,
                title: "Structured Algorithms.",
                category: "Book",
                year: "2023",
                status: "Not Approved",
                popularityScore: 70,
                author:"Peter Mensah"
            },
        ],
        categories: {
            approved: "Approved",
            notApproved: "Not Approved"
        }
    }

    render() {
        return (
            <>
                <AppNavbar />
                <Container fluid>
                    <Row className="bg-light">
                        <Col>
                            <Stack gap={3} className="text-center p-5">
                                <h1 className="p-2 p-3 text-primary">Novel Research Hub</h1>
                                <h4 className="p-2">The authentic place to get published scientific articles, books, and research papers.</h4>
                                <div>
                                    <Button size="sm" variant="outline-primary">
                                        <a href="#works" className="text-decoration-none">View articles, books, and research papers</a>
                                    </Button>{' '}
                                </div>
                            </Stack>
                        </Col>
                    </Row>
                    <Row id="works">
                        <Col md={5} className="p-3">
                            <Stack gap={2} className="p-2">
                                <p className="text-muted"><b>Publish your work</b></p>
                                <AppPublishForm />
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
                                <h3 className="p-2 p-3 text-primary">Published works</h3>
                                <div>
                                    <AppWorkList Works={this.state.works} WorkType={this.state.categories.approved} />
                                </div>
                            </Stack>
                        </Col>
                        <Col>
                            <Stack gap={3} className="text-center p-5">
                                <h3 className="p-2 p-3 text-primary">Pending works</h3>
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