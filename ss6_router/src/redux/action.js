// export const login = (account) => {
//     return {
//         type: 'LOGIN',
//         payload: account
//     }
// };
//
// export const logout = () => {
//     return {
//             type: 'LOGOUT'
//     }
// };

import {checkLogin} from "../service/accountService.js";

export const login = (un, pw) => {
    return async (dispatch) => {
        const account = await checkLogin(un, pw);
        if (account) {
            console.log("-------ok-------");
            dispatch({
                type: "LOGIN",
                payload: account,
            })
            return true;
        } else {
            console.log("-------okn't-------");
            return false;
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch({
            type: "LOGOUT"
        })
    }
}