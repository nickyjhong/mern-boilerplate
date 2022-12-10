import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { signup } from '../store/authSlice'

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const submitForm = (data) => {
    data.username = data.username.toLowerCase()
    dispatch(signup(data))
    if (signup.fulfilled) navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            className='form-input'
            {...register('firstName')}
            required
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            className='form-input'
            {...register('lastName')}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Username</label>
          <input
            type='text'
            className='form-input'
            {...register('username')}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-input'
            {...register('password')}
            required
          />
        </div>
        <button type='submit'>
          Register
        </button>
      </form>
      <div>
        <p>Have an account?</p>
        <Link to="/login">Sign up</Link>
      </div>
    </div>
  )
}

export default Signup