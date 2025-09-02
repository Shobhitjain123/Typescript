import React from 'react'
import { useCounter } from '../provider/Counter'

function Button2(): React.ReactElement {
  const context = useCounter()

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e);
    context?.setCount(prev => prev + 1)
    context?.setCount(prev => prev + 1)
    context?.setCount(prev => prev + 1)
    
  }
  return (
    <div onClick={handleClick}>{context?.count}</div>
  )
}

export default Button2