import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { login } from '../store/authSlice'

const Login = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    dispatch(login(data))
    if (login.fulfilled) navigate('/')
  }

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleSubmit(submitForm)}>
        <label>Username</label>
        <input
          {...register('username')}
        />
        <label>Password</label>
        <input
          {...register('password')}
        />
        <button type="submit">Login</button>
      </form>
      <div>
        <p>Don't have an account?</p>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  )
}

export default Login