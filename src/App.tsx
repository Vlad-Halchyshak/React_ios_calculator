import React from 'react'
import './App.scss'
import { DateTime } from './components/date'
import {Main} from './components/main'

const  App:React.FC = () => {
  
return (
    <div className="container">
      <div className="top_part">
        <DateTime />
      </div>
      <Main/>
    </div>
  )
}

export default App
