import { EventEmitter } from 'events';
import WorkDispatcher from './WorkDispatcher';




class WorkStore extends EventEmitter {

    _works = [
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
        {
            id: 4,
            title: "Mathematical Methods.",
            category: "Book",
            year: "2023",
            status: "Pending",
            popularityScore: 100,
            author: "Abraham Mensah"
        }
    ];

    _worksPublished = this._works.filter(w => w.status.toLowerCase() == "approved");

    _worksNotApproved = this._works.filter(w => w.status.toLowerCase() == "not approved");
   
    _worksPending = this._works.filter(w => w.status.toLowerCase() == "pending");

    constructor() {
        super();
        this.dispatchToken = WorkDispatcher.register(this.dispatcherCallback.bind(this))
    }



    emitChange(eventName) {
        this.emit(eventName);
    }

    // getters

    getAllWorks() {
        return this._works;
    }

    getApprovedWorks() {
        return this._worksApproved;
    }

    getNotApprovedWorks() {
        return this._worksNotApproved;
    }

    getPublishedWorks() {
        return this._worksPublished;
    }

    getPendingWorks() {
        return this._worksPending;
    }


    submitWork(work) {
        console.log("work is finally submitted");
        this._works.push(work);
    }

    removeWork(id) {
        this._works.splice(id, 1);
    }

    approveWork(work) {
        let existingWork = this._works.find(w => w.id == work.id);
        existingWork.status = "Approved";
    }

    disApproveWork(work) {
        let existingWork = this._works.find(w => w.id == work.id);
        existingWork.status = "Not Approved";
    }

    addChangeListener(eventName, callback) {
        this.on(eventName, callback);
    }

    removeChangeListener(eventName, callback) {
        this.removeListener(eventName, callback);
    }

    dispatcherCallback(action) {
        switch (action.actionType) {
            case 'SUBMIT_WORK':
                console.log("Store responding to the submit action");
                this.submitWork(action.value);
                break;
            case 'APPROVE_WORK':
                this.approveWork(action.value);
                break;
            case 'REMOVE_WORK':
                this.removeWork(action.value);
            case 'DISAPPROVE_WORK':
                this.disApproveWork(action.value);
           
        }

        this.emitChange('STORE_' + action.actionType);

        return true;
    }
}

export default new WorkStore();