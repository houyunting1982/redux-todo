import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import App from './App'

import createSagaMiddleware from 'redux-saga'
import { loadToDoList } from './actions'
import toDoApp from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    toDoApp,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

store.dispatch(loadToDoList())

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
)

//https://auth0.com/blog/beyond-create-react-app-react-router-redux-saga-and-more/#Installing-PropTypes
