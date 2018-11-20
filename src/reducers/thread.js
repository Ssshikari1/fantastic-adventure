import {THREADS_REQUEST, THREADS_SUCCESS, THREADS_FAIL} from '../actions/threadAction';
import {THREADS_REQUEST_MORE, THREADS_SUCCESS_MORE, THREADS_FAIL_MORE} from '../actions/threadMoreAction';

const initialState = {
    listThreads: null,
};

export default function threadReducer(state = initialState, action) {
    switch(action.type) {
        case THREADS_REQUEST:
            return {...state}
        case THREADS_SUCCESS:
            return {...state, listThreads: action.payload}
        case THREADS_FAIL:
            return {...state}
        case 'EDITE_CURRENT_THREAD':
            return {...state, currentThread: action.payload}
        case THREADS_REQUEST_MORE:
            return {...state}
        case THREADS_SUCCESS_MORE:
            return {...state, listThreadsMore: action.payload}
        case THREADS_FAIL_MORE:
            return {...state}
        default: 
            return {...state}
    }
}