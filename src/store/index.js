import { combineReducers, createStore } from "redux";
import reducerA from './Reducer/reducerA';


export const rootReducer = combineReducers({
    reducerA:reducerA
})
// export default (preloadState, options) => {
//   return createStore(
//     combineReducers({
//         reducerA
//     }),
//     preloadState
//   )
// }