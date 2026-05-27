import {combineReducers} from "redux";

const initAccount = null;
const userReducer = (state = initAccount, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload; // state = action.payload
        case 'LOGOUT':
            return null; // state = null
        default:
            return state; // trả về mặc định
    }
}

// const cartReducer = (state = initAccount, action) => {
//     switch (action.type) {
//         case 'LOGIN':
//             return action.payload; // state = action.payload
//         case 'LOGOUT':
//             return null; // state = null
//         default:
//             return state; // trả về mặc định
//     }
// }

// kêt hợp tất cả các reducers thành 1 rootReducer
export const rootReducer = combineReducers({
    user: userReducer
    // cart: cartReducer
})

