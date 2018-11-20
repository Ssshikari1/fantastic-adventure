import {BOARDS_REQUEST, BOARDS_SUCCESS, BOARDS_FAIL} from '../actions/navigationActions';

const initialState = { 
    currentBoard: null,
}
export default function boardReducer(state = initialState, action) {
    switch(action.type) {
        case BOARDS_REQUEST:
            return {...state}
        case BOARDS_SUCCESS:
            return {...state, listBoards: action.payload}
        case BOARDS_FAIL:
            return {...state}
        case 'EDITE_CURRENT_TITLE':
            return {...state, currentBoard: action.payload}
        default:
            return state;
    }
}