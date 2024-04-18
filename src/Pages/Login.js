import React from 'react'

const Login = () => {
  return (
    <form>
        <lable>Email</lable>
        <input type='email' required/>
        <lable>Password</lable>
        <input type='password' required/>
        <button type='submit'>login</button>
    </form>
  )
}

export default Login