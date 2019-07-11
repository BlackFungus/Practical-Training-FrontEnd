import axios from 'axios'

const SUMIT = 'SUMIT'
const ERROR_MSG = 'ERROR_MSG'
const GETMAIN = 'GETMAIN'


const initState = {
    title: "",
    context: "",
    sid: "",
    username: "",
    file: ""
}

export function topic(state = initState, action) {
    switch (action.type) {
        case SUMIT:
            return { ...state, ...action.payload }
        case ERROR_MSG:
            return { ...state, msg: action.msg }
        case GETMAIN:
            // console.log({ ...state, ...action.payload })
            return { ...state, ...action.payload }
        default:
            return state
    }
}

function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}

function getMianSuccess(data) {
    // console.log(data)
    return { type: GETMAIN, payload: data }
}

export function getAllMain(){
    return dispatch=>{
        axios.get('/topic/allRelease').then(res=>{
            if (res.data.code == 200) {
                dispatch(getMianSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function getReply(tid){
    return dispatch=>{
        axios.get('/topic/Reply',{
            params:{
                tid
            }
        }).then(res=>{
            if (res.data.code == 200) {
                dispatch(getMianSuccess(res.data.data))
                return res.data.data
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}


export function sumit(data) {
    const { context, title, sid } = data
    return dispatch => {
        axios.get('/topic/release', {
            params: {
                context, title, sid, file: ""
            }
        }).then(res => {
            if (res.data.code == 200) {
                dispatch(getMianSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}


export function sumitReply(data,tid) {
    console.log(data)
    const { replyContext, sid } = data
    return dispatch => {
        axios.get('/topic/replyRelease', {
            params: {
                context:replyContext, 
                tid, 
                sid, 
                file: ""
            }
        }).then(res => {
            if (res.data.code == 200) {
                dispatch(getMianSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}


export function getMain(sid) {
    return dispatch => {
        axios.get('/topic/userRelease', {
            params: {
                sid
            }
        }).then(res => {
            if (res.data.code == 200) {
                dispatch(getMianSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}


export function getUserReply(sid) {
    return dispatch => {
        axios.get('/topic/userReply', {
            params: {
                sid
            }
        }).then(res => {
            if (res.data.code == 200) {
                dispatch(getMianSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}





