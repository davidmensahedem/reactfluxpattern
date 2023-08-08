import { EventEmitter } from 'events';
import WorkDispatcher from './WorkDispatcher';
import React,{useEffect,useState} from 'react';

let _works = [
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
    }
];
let _worksApproved = _works.filter(w => w.status.toLowerCase() == "approved");

class WorkStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = WorkDispatcher.register(this.dispatcherCallback.bind(this))
    }

    emitChange(eventName) {
        this.emit(eventName);
    }

    getAll() {
        return _works;
    }

    getApproved() {
        return _worksApproved;
    }

    submitWork(work) {
        console.log("work is finally submitted");
        _works.push(work);
    }

    removeWork(id) {
        _works.splice(id, 1);
    }

    approveWork(work) {
        let existingWork = _works.find(w => w.id == work.id);
        let indexOfWork = _works.indexOf(existingWork);
        existingWork.status = "Approved";
        _works.splice(indexOfWork,1,existingWork);
        console.log("Approved works",_works);
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
        }

        this.emitChange('STORE_' + action.actionType);

        return true;
    }
}

export default new WorkStore();