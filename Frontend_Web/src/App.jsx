import React, { createContext, useContext, useReducer } from 'react'
import Navigation from './routes/Navigation.jsx'
import { BrowserRouter as Router, } from 'react-router-dom'
import { initialState, reducer } from './Context/context.ts'

export const GlobalContext = createContext(initialState);


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Router>
        <Navigation />
      </Router>
    </GlobalContext.Provider>
  )
}

export default App

