import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Stack, Tab, Tabs, Table, Badge, Collapse, Button } from "react-bootstrap";
import AppNavbar from "../components/AppNavbar";
import AppWorkSection from "../components/AppWorksSection";
import AppHeader from "../components/AppHeader";
import WorkActions from "../utilities/WorkActions";
import WorkStore from "../utilities/WorkStore";
import AppCreateWorkModal from "../components/AppCreateWorkModal";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            works: WorkStore.getAllWorks(),
            publishedWorks: WorkStore.getPublishedWorks(),
            notApprovedWorks: WorkStore.getNotApprovedWorks(),
            pendingWorks: WorkStore.getPendingWorks(),
            categories: {
                approved: "Approved",
                notApproved: "Not Approved"
            },
            createWorkModalState: false
        }
    }


    componentDidMount() {
        WorkStore.addChangeListener('STORE_SUBMIT_WORK', this.listWorks);
        WorkStore.addChangeListener('STORE_APPROVE_WORK', this.listWorks);
        WorkStore.addChangeListener('STORE_REMOVE_WORK', this.listWorks);
        WorkStore.addChangeListener('STORE_DISAPPROVE_WORK', this.listWorks);
    }

    handleSubmitWork = (evt) => {
        evt.preventDefault();
        console.log("submitting work");
        let newWork = {
            id: this.state.works.length + 1,
            popularityScore: Math.ceil(Math.random() * 1000),
            status:"Pending"
        };

        newWork.author = document.getElementById("workAuthor").value;

        newWork.title = document.getElementById("workTitle").value;

        newWork.category = document.getElementById("workCategory").value;

        newWork.year = document.getElementById("workYear").value;

        WorkActions.submitWork(newWork);

        this.hideCreateWorkModal();

        document.getElementById("workTitle").value = '';
        document.getElementById("workCategory").value = '';
        document.getElementById("workYear").value = '';
    };

    handleApproveWork = (work) => {
        WorkActions.approveWork(work);
    };

    handleRemoveWork = (work) => {
        WorkActions.removeWork(work);
    }

    handleDisapproveWork = (work) => {
        WorkActions.disapproveWork(work);
    }

    listWorks = () => {
        this.setState({
            works: WorkStore.getAllWorks(),
            publishedWorks: this.state.works.filter(w => w.status.toLowerCase() == "approved"),
            notApprovedWorks: this.state.works.filter(w => w.status.toLowerCase() == "not approved"),
            pendingWorks: this.state.works.filter(w => w.status.toLowerCase() == "pending"),
        })
    }

    showCreateWorkModal = () => {
        this.setState({
            createWorkModalState: true
        });
    }

    hideCreateWorkModal = () => {
        this.setState({
            createWorkModalState: false
        });
    }

    render() {

        let publishedWorks = this.state.publishedWorks;

        let pendingWorks = this.state.pendingWorks;

        let notApprovedWorks = this.state.notApprovedWorks;

        return (
            <>
                <AppNavbar />
                <Container fluid>
                    <AppHeader />
                    <Row className="p-3">
                        <Col className="text-center pt-3">
                            <p className="text-muted"><b>View the works of great professionals.</b></p>
                            <Button variant="success" onClick={this.showCreateWorkModal}>Publish work</Button>
                        </Col>
                    </Row>
                    <AppWorkSection
                        PendingWorks={pendingWorks}
                        NotApprovedWorks={notApprovedWorks}
                        PublishedWorks={publishedWorks}
                        handleApproveWork={this.handleApproveWork}
                        handleDisapproveWork={this.handleDisapproveWork} />
                    <AppCreateWorkModal id="worksection"
                        modalState={this.state.createWorkModalState}
                        hideCreateWorkModal={this.hideCreateWorkModal}
                        handleSubmitWork={this.handleSubmitWork}
                    />
                    {/* <Row id="works">
                        
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