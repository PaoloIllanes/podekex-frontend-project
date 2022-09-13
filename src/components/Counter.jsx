import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {login} from '../store/counter/authThank'

export function Counter() {
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="login"
          onClick={() => dispatch(login())}
        >
          Login
        </button>
      </div>
    </div>
  )
}