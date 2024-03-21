import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Header = ({authentication, setAuthentication}) => {
  const navigate = useNavigate();
  const goToLogin = ()=>{
    navigate('/login');
  }
  const goTologout = ()=>{
    navigate('/');
    setAuthentication(false);
  }
  const search = (event)=>{
    /* console.log('키가입력되는중'); */
    if(event.key === 'Enter'){
      event.preventDefault();
      /* console.log('click Enter key', event.key); */
      let keyword = event.target.value;
      console.log('keyword :', keyword);
      navigate(`/?q=${keyword}`);
    }
  }
  return (
    <div className='Header'>
      <div className="HeaderInner">
        <div className="TopBanner">
          <p>KAKAOTALK FRIENDS 10% OFF SPECIAL COUPON</p>
        </div>
        <div className="nav">
          <Link className='logo' to='/'>
            <img src={process.env.PUBLIC_URL+'./images/logo.png'} alt="로고이미지" />
          </Link>
          <ul>
            <li>SHOP</li>
            <li>BRAND</li>
            <li>COLLAB.</li>
            <li>STYLING</li>
            <li>STORES</li>
          </ul>
          <form onKeyDown={search}>
            <p className='login' 
            onClick={
              authentication == true ? goTologout : goToLogin
            }>
              {
                authentication == true ? '로그아웃' : '로그인'
              }
              </p>
              { /* authentication ? 
                <span className='login' onClick={goTologout}>로그아웃</span>
                :
                <span className='login' onClick={goToLogin}>로그인</span> */
              }
            <div>
              <input type="text" placeholder='SEARCH'  />
              <img src={process.env.PUBLIC_URL+'./images/search.png'} alt="search이미지" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header