import axios from 'axios';

export const THREADS_REQUEST = 'THREADS_REQUEST';
export const THREADS_SUCCESS = 'THREADS_SUCCESS';
export const THREADS_FAIL = 'THREADS_FAIL';
const requestApi = 'http://failchan.ru/';

export default function loadThreads(slug) {
    return dispatch => {
        dispatch({
            type: THREADS_REQUEST,
        });

        axios.get(requestApi + 'boards/' + slug + '/threads')
            .then(res => {
                dispatch({
                    type: THREADS_SUCCESS,
                    payload: res.data
                });
            }).catch(error => {
                dispatch({
                    type: THREADS_FAIL
                });
                throw(error);
            });

    }
}