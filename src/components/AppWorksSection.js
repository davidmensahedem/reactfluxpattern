import React from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import AppPendingWorkTable from './AppPendingWorkTable';
import AppNotApprovedWorkTable from './AppNotApprovedWorkTable';
import AppPublishedWorkTable from './AppPublishedWorkTable';


const AppWorkSection = (props) => {
    return (
        <Row id="" className="p-3">
            <Col className="p-3">
                <Container className="p-3 bg-light">
                    <Tabs
                        defaultActiveKey="published"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="published" title="Published">
                            <AppPublishedWorkTable PublishedWorks={props.PublishedWorks} handleDisapproveWork={props.handleDisapproveWork} />
                        </Tab>
                        <Tab eventKey="notapproved" title="Not Approved">
                            <AppNotApprovedWorkTable NotApprovedWorks={props.NotApprovedWorks} handleApproveWork={props.handleApproveWork} />
                        </Tab>
                        <Tab eventKey="pending" title="Pending">
                            <AppPendingWorkTable PendingWorks={props.PendingWorks} handleApproveWork={props.handleApproveWork} />
                        </Tab>
                    </Tabs>
                </Container>
            </Col>
        </Row>
    );
}

export default AppWorkSection;