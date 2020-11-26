import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import toDoApp from './reducers'
import App from './App'

const store = createStore(toDoApp)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

//https://auth0.com/blog/beyond-create-react-app-react-router-redux-saga-and-more/#Installing-PropTypes
