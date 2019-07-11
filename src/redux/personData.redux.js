import axios from 'axios'

const CHANGE = 'CHANGE'
const GET = 'GET'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
    nativePlace:'',
    ID_No:'',
    Email:'',
    phoneNum:'',
    ClassNum:'',
    QQNum:'',
    introduction:''
}
export function personData(state=initState,action){
    switch(action.type){
        case GET:
            return {...state,...action.payload}
        case ERROR_MSG:
            return {...state,msg:action.msg}    
        default:
            return state
    }
}

function errorMsg(msg){
    return {msg,type:ERROR_MSG}
}

function getSuccess(obj){
    return {type:GET,payload:obj}
}

export function getData(sid){
    return dispatch=>{
        axios.get('/person/find',{
            params:{
                sid
            }
        }).then(function(res){
            if(res.data.code==200){
                dispatch(getSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function changeData(data){
    const {phoneNum,QQNum,Email,nativePlace,sid,ID_No} = data
    const ClassNum = data.ClassNum
    return dispatch=>{
        axios.get('/person/updata',{
            params:{
                ClassNum:data.ClassNum,
                sid,
                phoneNum,
                QQNum,
                Email,
                nativePlace,
                ID_No,
                name:""
            }
        }).then(function(res){
            console.log(res)
            if(res.data.code==200){

                dispatch(getSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}


















