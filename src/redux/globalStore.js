import { createStore, combineReducers } from 'redux';

import MessageReducer from './message.reducer';

const store = () => {
    const state = createStore(combineReducers({
        messages: MessageReducer
    }));

    state.subscribe(() => {
        console.log(state.getState());
    });

    return state;
}

export default store;