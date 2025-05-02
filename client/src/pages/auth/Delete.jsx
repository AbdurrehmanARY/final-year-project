import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,incrementByAmount,reset} from '../../store/auth'
function Delete() {
    const counter=useSelector((state)=>state.counter.value)
    const [ammount,setAmmount]=useState(0)
    const dispatch=useDispatch()

  const  handleIncreament=()=>{
    dispatch(increment())
        
    }
   const handleDecreament=()=>{
    dispatch(decrement())
    }

    const handleReset=()=>{
        dispatch(reset())
        }

        const handleIncreamentByAmmount=()=>{
            console.log('handle inc. by ammount')
            console.log(ammount)
            dispatch(incrementByAmount(ammount))
            }
  return (
    <div>
    <div>
      <button
        aria-label="Increment value"
        onClick={handleIncreament}
      >
        Increment
      </button>
      <span>{counter} </span>
      <button
        aria-label="Decrement value"
        onClick={handleDecreament}
      >
        Decrement
      </button>

      <button
        aria-label="Decrement value"
        onClick={handleReset}
      >
        Reset
      </button>


      <input type="text"
      value={ammount}
      onChange={(e)=>setAmmount(e.target.value)}
      />

      <button onClick={handleIncreamentByAmmount}>handle inc</button>
    </div>
  </div>
  )
}

export default Delete