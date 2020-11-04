import React from 'react'

type PropsType = {
  name: string
  type?: string
  onClick: (name: string ) => () => void;
}

export const Button: React.FC<PropsType> = ({ name, type, onClick }) => {
  return (
    <div
      className={`Button ${name === '0' ? 'nil' : ''}
  ${type || ''}`}
      onClick={onClick(name)}
    >
      {name}
    </div>
  )
}
