const processesInitialState={
    processes: [],
    // 'loading', 'error', 'ready', 'active', 'finished'
    status: "loading",
}

export default function processesReducer(state=processesInitialState,action){
    switch(action.type){
        case 'processes/data':
            return {...state,processes:action.payload,status:'ready'};
        case 'dataFailed':
            return {...state, status:'error'};
        default:
            return state;
    }
}