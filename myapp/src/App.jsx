import React, { createContext, useState } from 'react'
import MyRoutes from './MyRoutes'
import './index.css'
import './App.css'
import { MyContextProvider } from './pages/Mycontext'
import { Button } from '@mui/material'
import { combineReducers, createStore } from 'redux'
import counterReducer from './redux/counterReducer'
import personReducer from './redux/PersonReducer'
import { Provider } from 'react-redux'
export const MyThemeContext = createContext()
const App = () => {
  let [theme,setTheme] = useState('light')
  const rootReducer = combineReducers({
    counterStore: counterReducer,
    personStore: personReducer
  })
  const store = createStore(rootReducer)
  return (
    <>
    <Provider store={store}>
      <MyThemeContext.Provider value ={theme}>

    <MyContextProvider>
      <button className={`${theme === 'dark' ? 'bg-blue-400' : 'bg-amber-300'} px-4 py-2 fixed top-[30px]`} onClick={()=>{

        if(theme === 'light'){
          setTheme('dark')
        }
        else{
          setTheme('light')
        }
      }}>{theme}</button> {/* to add the button to change the theme from light to dark myroutes vanda mathi rakhya */}
      <MyRoutes />
    </MyContextProvider>
    </MyThemeContext.Provider>

    </Provider>
    
    </>
    
  )
}

export default App