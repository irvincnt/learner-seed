import React from 'react'
import '../../styles/login.scss'
import loginImg from '../../assets/images/login.svg'

export default function Login() {
  return (
    <div className='login'>
      <div className='image-login'>
        <img src={loginImg}/>
      </div>
      <div className='auth-login'>
        <div className='auth-login__content'>
          <h2>Bienvenido a Learner seed</h2>
          <p>Inicie sesión en su cuenta y comience la aventura</p>
          <div className="form-group">
            <p className='form-label'>Email</p>
            <input name='name' className="form-control" />
            <p className='form-message'>Requerido</p>
          </div>
          <div className="form-group">
            <p className='form-label'>Password</p>
            <input name='name' className="form-control" />
            <p className='form-message'>Requerido</p>
          </div>
          <button className='btn'>Sing in</button>
        </div>
      </div>
    </div>
  )
}
