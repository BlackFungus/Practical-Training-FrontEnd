import axios from 'axios'
import '../config'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
    username: '',
    sid: '',
    isAuth: false
}

export function user(state = initState, action) {
    // console.log(state, action)
    switch (action.type) {
        case LOGIN:
            console.log(state,action)
            return { ...state, isAuth: true,...action.payload }
        case LOGOUT:
            return { ...state, isAuth: false }
        case ERROR_MSG:
            return { ...state, isAuth: false, msg: action.msg }
        default:
            return state
    }
}

function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}

function loginSuccess(obj){
    const {password,...data} = obj

    return { type:LOGIN,payload:data }
}

export function login({ username, password }) {
    if (!username || !password) {
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios.get('/account/login', {
            params: {
                username,
                password
            }
        }).then(function (res) {
            if(res.data.code==200){
                dispatch(loginSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}


export function register({username,password,repeatpwd,sid}){
    if(!username||!password||!repeatpwd||!sid){
        return errorMsg('必填项缺失')
    }
    if(password!==repeatpwd){
        return errorMsg('密码和确认密码不同')
    }
    return dispatch=>{
        axios.get('/account/register',{
            params:{
                username,
                password,
                sid
            }
        }).then(res=>{
            console.log(res)
            if(res.data.code==200){
                
                dispatch(loginSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function logout() {
    return { type: LOGOUT }
}