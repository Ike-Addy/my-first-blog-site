import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">register</span>
        <form className="registerForm">
            <label>Email</label>
            <input className='registerInput' type="text" placeholder='Enter your email...' />
            <label>Password</label>
            <input className='registerInput' type="text" placeholder='Enter your password...' />
            <button className="registerButton">Register</button>
            <button className="registerLoginButton">Login</button>
        </form>
    </div>
  )
}
