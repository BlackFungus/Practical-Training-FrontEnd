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
    console.log(state, action)
    switch (action.type) {
        case LOGIN:
            return { ...state, isAuth: true }
        case LOGOUT:
            return { ...state, isAuth: false }
        case ERROR_MSG:
            return { ...state, isAuth: false, mgs: action.msg }
        default:
            return state
    }
}

function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}

export function login({ username, password }) {
    console.log(username,password)
    if (!username || !password) {
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios.get('/api/account/login', {
            params: {
                username,
                password
            }
        }).then(function (res) {
            console.log(res)
        })
    }
    return { type: LOGOUT }
}

export function logout() {
    return { type: LOGOUT }
}