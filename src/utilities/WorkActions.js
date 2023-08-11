import WorkDispatcher from "./WorkDispatcher";

class WorkActions {
    submitWork(data) {
        WorkDispatcher.dispatch({
            actionType: 'SUBMIT_WORK',
            value: data
        });
    }

    removeWork(id) {
        WorkDispatcher.dispatch({
            actionType:'REMOVE_WORK',
            value:id
        })
    }

    approveWork(data){
        WorkDispatcher.dispatch({
            actionType:"APPROVE_WORK",
            value:data
        });
    }

    disapproveWork(data){
        WorkDispatcher.dispatch({
            actionType:"DISAPPROVE_WORK",
            value:data
        });
    }

}

export default new WorkActions();