import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from "../redux/counterSlice"

function Counter() {

    const dispatch = useDispatch()

    const coun = useSelector(state=>state.counterReducer.count)

    return (
      <>
        <div className='d-flex justify-content-center align-items-center' style={{width:'100%',height:"70vh"}}>
              <div style={{width:'30%'}} className="border shadow rounded p-5 d-flex justify-content-center align-items-center flex-column">
                <h1 className="text-light">{coun}</h1>
                <div className="d-flex justify-content-between w-100 mt-5">
                    <button onClick={()=>dispatch(decrement())} className="btn btn-warning">Decrement</button>
                    <button onClick={()=>dispatch(reset())} className="btn btn-danger">Reset</button>
                    <button onClick={()=>dispatch(increment())} className="btn btn-success">Increment</button>
                </div>
                <button onClick={()=>dispatch(incrementByAmount(5))} className="btn btn-primary mt-3">Increment by amount</button>
              </div>
          </div>
      </>
    )
  }
  
  export default Counter