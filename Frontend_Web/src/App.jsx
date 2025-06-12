import { createContext, useReducer } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { initialState, reducer } from './Context/context.ts';
import Navigation from './routes/Navigation.jsx';

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

