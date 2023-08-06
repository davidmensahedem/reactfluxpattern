import WorkDispatcher from "./WorkDispatcher";

class WorkActions {
    submitWork(data) {
        WorkDispatcher.dispatch({
            actionType: 'SUBMIT_WORK',
            value: data
        });
        WorkDispatcher.dispatch({
            actionType: 'APPROVE_WORK',
            value: data
        });
    }

    removeWork(id) {
        WorkDispatcher.dispatch({
            actionType:'REMOVE_WORK',
            value:id
        })
    }
}

export default new WorkActions();