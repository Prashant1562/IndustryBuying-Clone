import {CLEAR_ERRORS, ERROR_AUTH, LOADING_AUTH, LOGIN_AUTH, SIGNUP_AUTH } from "./auth.actionTypes";

export const loadingAuth = ()=> ({type:LOADING_AUTH});
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
export const signupAuth = (input)=> async(dispatch)=> {
    dispatch(loadingAuth({type:LOADING_AUTH}));
    try {
        let res = await fetch('http://localhost:4441/users/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(input)
        });
        let result = await res.json();
        if(result.message === "failed"){
            return  dispatch({type:ERROR_AUTH, payload:result.description})
        }
        return dispatch({type:SIGNUP_AUTH, payload:result})
    } catch (error) {
        return  dispatch({type:ERROR_AUTH, payload:error})
    }
}

export const loginAuth = (input)=> async(dispatch)=> {
    dispatch(loadingAuth({type:LOADING_AUTH}));
    try {
        let res = await fetch('http://localhost:4441/users/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(input)
        });
        let result = await res.json();
        if(result.message === "failed"){
            return  dispatch({type:ERROR_AUTH, payload:result.description})
        }
        return dispatch({type:LOGIN_AUTH, payload:result})
    } catch (error) {
        return  dispatch({type:ERROR_AUTH, payload:error})
    }
}