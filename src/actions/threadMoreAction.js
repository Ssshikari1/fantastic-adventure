import axios from 'axios';

export const THREADS_REQUEST_MORE = 'THREADS_REQUEST_MORE';
export const THREADS_SUCCESS_MORE = 'THREADS_SUCCESS_MORE';
export const THREADS_FAIL_MORE = 'THREADS_FAIL_MORE';
const requestApi = 'http://failchan.ru/';


export default function loadThreadsMore(slug) {
    return dispatch => {
        dispatch({
            type: THREADS_REQUEST_MORE,
        });
        const querystring = require('querystring');
        axios.get(requestApi + 'boards/' + slug + '/threads', querystring.stringify({skip: 10}))
            .then(res => {
                dispatch({
                    type: THREADS_SUCCESS_MORE,
                    payload: res.data
                });
            }).catch(error => {
                dispatch({
                    type: THREADS_FAIL_MORE
                });
                throw(error);
            });

    }
}