import { createStore } from 'redux';
import { createAction, handleAction } from 'redux-actions';

let increement = createAction('INCREEMENT');


let initState = {};

let redux = handleAction(increement,(state, action) => ({
    counter: state.counter + 1
}), initState)


export const store = createStore();
