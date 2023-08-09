import React from 'react';
import AppNavbar from "../components/AppNavbar";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";

const AppHeader = (props) => {
    return (
        <>
            <Row className="bg-light">
                <Col>
                    <Stack gap={3} className="text-center p-5">
                        <h1 className="p-2 p-3 text-success">Novel Research Hub</h1>
                        <h4 className="p-2 text-muted">The authentic place to get published scientific articles, books, and research papers.</h4>
                        <div>
                            <Button size="sm" variant="outline-success">
                                <a href="#works" className="text-decoration-none text-muted p-3">View articles, books, and research papers</a>
                            </Button>{' '}
                        </div>
                    </Stack>
                </Col>
            </Row>
        </>
    );
}

export default AppHeader;