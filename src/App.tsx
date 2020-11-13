import React from 'react'
import './App.scss'
import { DateTime } from './components/date'
import {Main} from './components/main'
import { Switch } from 'antd';

const  App:React.FC = () => {
  const [color, setColor] = React.useState(true)
  
  
return (
  <div className={ color ? "container" : "container2"}>
    <div className="top_part">
      <DateTime />
      <Switch onClick={() => setColor(!color)} size="small" style={{ background: 'wheat'}} />
       </div>
      <Main/>
    </div>
  )
}

export default App
