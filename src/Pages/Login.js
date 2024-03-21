import React from 'react'
import { useNavigate } from 'react-router';

const Login = ({setAuthentication}) => {
  const navigate = useNavigate();
  const loginUser = (event)=>{
    event.preventDefault();
    console.log('로그인 버튼 동작');
    navigate('/');
    setAuthentication(true);
  }
  return (
    <div className='Login'>
      <h3>SIGN IN</h3>
      <form onSubmit={(event)=>loginUser(event)}>
        <input type="email" placeholder='이메일을 입력해주세요' id='email'/><br />
        <input type="password" placeholder='비밀번호를 입력해주세요'id='password'/><br/>
        <label htmlFor="checkbox">Remember me</label>
        <input type="checkbox" id='checkbox'/><br/>
        <button type='submit'>로그인</button>
      </form>
    </div>
  )
}

export default Login