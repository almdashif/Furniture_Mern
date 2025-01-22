import React from 'react'
import Navigation from './routes/Navigation.jsx'
import { BrowserRouter as Router, } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Navigation />
    </Router>
  )
}

export default App

