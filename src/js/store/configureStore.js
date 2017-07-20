import { createStore } from 'redux';
import todoApp from '../reducers';

export default function configureStore(reducer, initialState) {
    return createStore(
        todoApp,
        initialState
    );
}