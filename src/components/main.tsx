import React, { useState } from 'react'
import {Button} from './button'

export const Main: React.FC = () => {
  
  const [currentValue, setCurrentValue] = useState<string>('0')
  const [save, setSave] = useState<number | any >(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [saveInMemory, setSaveInMemory] = useState<number | any >(0)

  const buttonPress = (name: string) => () => {
    const number = parseFloat(currentValue)

    if (name === 'mc') {
      setSaveInMemory(0)
      return
    }
    if (name === 'mr') {
      setCurrentValue(saveInMemory)
      setOperator('mr')
      return
    }

    if (name === 'm+') {
      setSaveInMemory(saveInMemory + parseFloat(currentValue))
      setOperator('m+')
      return
    }
    if (name === 'm-') {
      setSaveInMemory(saveInMemory - parseFloat(currentValue))
      setOperator('m-')
      return
    }

    if (name === '+') {
      if (operator !== null) {
        if (operator === '+') {
          setSave(save + parseFloat(currentValue))
        } else if (operator === '−') {
          setSave(save - parseFloat(currentValue))
        } else if (operator === '×') {
          setSave(save * parseFloat(currentValue))
        } else if (operator === '÷') {
          setSave(save / parseFloat(currentValue))
        }
      } else {
        setSave(parseFloat(currentValue))
      }
      setOperator('+')
      setCurrentValue('0')
      return
    }

    if (name === 'AC') {
      setCurrentValue('0')
      //setSave(null)
      setOperator(null)
      return
    }
    if (name === '+/-') {
      setCurrentValue((number * -1).toString())
      return
    }
    if (name === '%') {
      setCurrentValue((number / 100).toString())
      setSave(null)
      setOperator(null)
      return
    }
    if (name === '.') {
      if (currentValue.includes('.')) return
      setCurrentValue(currentValue + '.')
      return
    }

    if (name === '−') {
      if (operator !== null) {
        if (operator === '+') {
          setCurrentValue((save + parseFloat(currentValue)).toString())
        } else if (operator === '−') {
          setCurrentValue((save - parseFloat(currentValue)).toString())
        } else if (operator === '×') {
          setCurrentValue((save * parseFloat(currentValue)).toString())
        } else if (operator === '÷') {
          setCurrentValue((save / parseFloat(currentValue)).toString())
        }
      }
      setSave(parseFloat(currentValue))
      setCurrentValue('0')
      setOperator('−')
      return
    }

    if (name === '×') {
      if (operator !== null) {
        if (operator === '+') {
          setCurrentValue((save + parseFloat(currentValue)).toString())
        } else if (operator === '−') {
          setCurrentValue((save - parseFloat(currentValue)).toString())
        } else if (operator === '×') {
          setCurrentValue((save * parseFloat(currentValue)).toString())
        } else if (operator === '÷') {
          setCurrentValue((save / parseFloat(currentValue)).toString())
        }
      }
      setSave(parseFloat(currentValue))
      setCurrentValue('0')
      setOperator('×')
      return
    }
    if (name === '÷') {
      if (operator !== null) {
        if (operator === '+') {
          setCurrentValue((save + parseFloat(currentValue)).toString())
        } else if (operator === '−') {
          setCurrentValue((save - parseFloat(currentValue)).toString())
        } else if (operator === '×') {
          setCurrentValue((save * parseFloat(currentValue)).toString())
        } else if (operator === '÷') {
          setCurrentValue((save / parseFloat(currentValue)).toString())
        }
      }
      setSave(parseFloat(currentValue))
      setCurrentValue('0')
      setOperator('÷')
      return
    }
    if (name === '=') {
      if (!operator) return

      if (operator === '+') {
        setCurrentValue((save + parseFloat(currentValue)).toString())
      } else if (operator === '−') {
        setCurrentValue((save - parseFloat(currentValue)).toString())
      } else if (operator === '×') {
        setCurrentValue((save * parseFloat(currentValue)).toString())
      } else if (operator === '÷') {
        setCurrentValue((save / parseFloat(currentValue)).toString())
      }
      setSave(null)
      setOperator(null)
      return
    }
    if (currentValue[currentValue.length - 1] === '.') {
      setCurrentValue(currentValue + name)
    } else {
      setCurrentValue(parseFloat(number + name).toString())
    }

    if (currentValue.length >= 8) alert('too much numbers')
  }
  
  return (
    <>
    
    <div className="memory_info">{`memory: ${saveInMemory}`}</div>
      
      <div className="display_block">{currentValue}</div>
      <div className="buttons_block">
       
        <Button onClick={buttonPress} name="AC" type="special" />
        <Button onClick={buttonPress} name="+/-" type="special" />
        <Button onClick={buttonPress} name="%" type="special" />
        <Button onClick={buttonPress} name="÷" type="operator" />
        <Button onClick={buttonPress} name="mc" />
        <Button onClick={buttonPress} name="mr" />
        <Button onClick={buttonPress} name="m-" />
        <Button onClick={buttonPress} name="m+" type="operator" />
        <Button onClick={buttonPress} name="7" />
        <Button onClick={buttonPress} name="8" />
        <Button onClick={buttonPress} name="9" />
        <Button onClick={buttonPress} name="×" type="operator" />
        <Button onClick={buttonPress} name="4" />
        <Button onClick={buttonPress} name="5" />
        <Button onClick={buttonPress} name="6" />
        <Button onClick={buttonPress} name="−" type="operator" />
        <Button onClick={buttonPress} name="1" />
        <Button onClick={buttonPress} name="2" />
        <Button onClick={buttonPress} name="3" />
        <Button onClick={buttonPress} name="+" type="operator" />
        <Button onClick={buttonPress} name="0" />
        <Button onClick={buttonPress} name="." />
        <Button onClick={buttonPress} name="=" type="operator" />
      </div>
      </>
  )
}