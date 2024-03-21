import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import db from '../db.json'; //db.json파일 가져오기

const ProductDetail = () => {
  let [product, setProduct]= useState(null);
  let {id} = useParams();

  useEffect(()=>{
    //url 파라미터로 받은 상품 아이디에 해당하는 상품을 db.json에서 찾아서 설정
    const selectedProduct = db.products.find((item)=>
      item.id === parseInt(id));
      setProduct(selectedProduct)
    
  },[id]); //id 가 변경될때마다 useEffect 실행
  return (
    <div className='ProductDetail'>
      <img src={product?.img} alt="image" />
      <form className='DetailContent'>
        <h3 className='Title'>{product?.title}</h3>
        <span className='Price'>₩ {product?.price?.toLocaleString(undefined, {
            minimumFractionDigits: 0,
          })}</span>
        <select name="" id="">
          <option value="-1">사이즈 선택</option>
          {
            product?.size.map((item)=>(
              <option>{item}</option>
            ))
          }
        </select>
        <button>장바구니 추가</button>
      </form>
    </div>
  )
}

export default ProductDetail