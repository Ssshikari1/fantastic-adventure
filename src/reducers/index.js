import { combineReducers } from 'redux';
import boardReducer from './board';
import threadReducer from './thread';



export const rootReducer = combineReducers({
    boards: boardReducer,
    threads: threadReducer,
});