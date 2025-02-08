import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/ConterSlice';

function App() {
  const count = useSelector((state) => state.counter.value)
  console.log('sfhb', count);

  const dispatch = useDispatch()
  
  return (
    <div>
      <button onClick={()=> dispatch(increment())}>incriment</button>
      <p>{count}</p>
      <button onClick={()=> dispatch(decrement())}>decriment</button>
      <button onClick={()=> dispatch(reset())}>reset</button>
    </div>
  )
}

export default App
