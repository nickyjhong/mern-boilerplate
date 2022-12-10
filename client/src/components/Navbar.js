import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { setLogout } from '../store/authSlice'

const Navbar = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  return (
    <div>
      { user ? (
        <div>
          <p>{user.firstName}</p>
          <button onClick={() => dispatch(setLogout())}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar