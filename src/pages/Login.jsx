import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='auth'>
      <h1>Coding Everday</h1>
      <form>
        <input required type="text" placeholder='Username' />
        <input required type="password" placeholder='Password' />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          Don't you have an account? 
          <Link className="register" to="/register">
            Register
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Login
