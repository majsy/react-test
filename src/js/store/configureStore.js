import { createStore, applyMiddleware, compose } from 'redux';
import todoApp from '../reducers';
import {createLogger} from 'redux-logger';

export default function configureStore(options = {}) {
    const { initialState = {}, browserHistory = {} } = options;
    const middlewares = [];

    middlewares.push(createLogger());

    // attach dev tools if dev env
    const createReduxStore = compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension()
    );

    const store = createReduxStore(createStore)(todoApp, initialState);

    return store;
}