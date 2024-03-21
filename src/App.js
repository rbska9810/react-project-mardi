import './Styles/reset.css'
import './Styles/App.css';
import './Styles/Responsive.css'
// React Router v6
import { Routes, Route } from "react-router-dom";
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import ProductAll from './Pages/ProductAll';
import Login from './Pages/Login';
import { useEffect, useState } from 'react';
import PrivateRoute from './Route/PrivateRoute';

/* 
  마르디 메크리디 쇼핑몰 페이지 만들기
  1. 헤더, 푸터, 비주얼영역, 전체 상품페이지가 있다.
  2. 전체 상품페이지에서는 전체상품을 볼 수있다.
  3. 로그인 버튼을 누르면 로그인페이지가 나온다.
  4. 상품 디테일 누르면 로그인이 안되었을 경우 로그인페이지가 먼저 나온다.
  5. 로그인이 되었을경우는 상품 상세페이지를 볼 수 있다.
  6. 로그아웃을 하면 상품 상세페이지를 볼 수 없다.(로그인을 해야 보인다.)
  7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
  8. 상품을 검색할 수 있다.  
*/
function App() {
  const [authentication, setAuthentication]=useState(false);//true 로그인, false 로그인안됨

  useEffect(()=>{
    console.log('aaa',authentication)
  },[authentication])
  return (
    <div>
      <Header authentication={authentication} setAuthentication={setAuthentication}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/Login" element={<Login setAuthentication={setAuthentication}/>} />
        <Route path='/product/:id' element={<PrivateRoute authentication={authentication}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
