import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import { App } from './App'
import Context from './core/context/UserContext'

import { Provider } from 'react-redux'
import { store } from './core/redux/store'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider>
      <Provider store={store}>
        <App />
      </Provider>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('myHtmlTag')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
