import db from '../db';
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios';

const INIT = 'INIT';
const GET_LOGIN = 'GET_LOGIN';
const SET_LOGIN = 'SET_LOGIN';

const initialState  = {
    socketID: '',
    nick: ''
};

const initAPI = (data) => {

/*    console.log(data)
    init.socketID = data.id;
    init.nick = data.nickname;*/
};

const getLoginAPI = () => {

};

function setLoginAPI() {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1');
}

export const getLogin = createAction(GET_LOGIN, getLoginAPI);
export const setLogin = createAction(SET_LOGIN);
export const initialrize = createAction(INIT, initAPI);

export default handleActions({
    [SET_LOGIN] : (state, action) => {
        console.log(state,action)
    }
/*    ...pender({
        type: SET_LOGIN,
        onSuccess: (state, action) => {
            console.log('SUC / ', action.payload.data);
            return alert('222')
        }
    })*/
}, initialState);
/*
// 멤버조회
export let getLogin = (state, func) => {
    let { id, pw, socketID } = state;
    let ref = db.ref(`member/${socketID}`);

    ref.once('value', (query) => {       
        if(query.val()) {
            console.log('Access / ' , query.val());
            func();
        } else {
            alert('회원등록이 안되었거나, 로그인 오류!');
            return false;
        }
    })
};

// 회원등록
export let setLogin = (state) => {
    let { id, pw, socketID } = state;
    let ref = db.ref(`member/${socketID}`);

    ref.once('value', (query) => {
         if(query.val()) {
            alert('닉네임으로 사용할 수 없습니다');
            return false;
        } else {
            ref.update({
                id: id,
                pw: pw
            }, () => {
                alert(`회원등록 id: ${id}, pw: ${pw}`)
            });
        }
    }, (errorObject) => {
        console.log("The read failed: " + errorObject.code);
    });
};
*/