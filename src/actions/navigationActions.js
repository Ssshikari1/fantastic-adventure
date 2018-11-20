import axios from 'axios';

export const BOARDS_REQUEST = 'BOARDS_REQUEST';
export const BOARDS_SUCCESS = 'BOARDS_SUCCESS';
export const BOARDS_FAIL = 'BOARDS_FAIL';

const requestApi = 'http://failchan.ru/';

export default function loadBoards() {
    return dispatch => {
        dispatch({
            type: BOARDS_REQUEST
        });

        axios.get(requestApi + 'boards')
            .then(res => {
                dispatch({
                    type: BOARDS_SUCCESS,
                    payload: res.data,
                });
            }).catch(error => {
                dispatch({
                    type: BOARDS_FAIL,
                });
                throw(error);
            });
    }
};