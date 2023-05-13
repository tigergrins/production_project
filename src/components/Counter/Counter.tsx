import { useState } from 'react'
import './Counter.scss'

export default function Counter() {
	const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count => count + 1)
  }

	return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
    </div>
  )
}
