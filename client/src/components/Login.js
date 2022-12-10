import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
  // const user = useSelector((state) => state.user)
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  
  const dispatch = useDispatch()
  return (
    <div>
      <p>Login</p>
    </div>
  )
}

export default Login