import { createStore } from 'redux';
import todoApp from '../reducers';

export default function configureStore(initialState) {
    return createStore(
        todoApp,
        initialState
    );
}