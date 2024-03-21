
import MainVisual from './MainVisual';
import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard';
import { useSearchParams } from 'react-router-dom';
import db from '../db.json'; //db.json파일 가져오기

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery]=useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    //모든제품 가져오기
    let products = db.products;
    //검색 쿼리를 포함하는 제품 필터링
    let fillteredProducts = products.filter(products => products.title.toLowerCase().includes(searchQuery.toLowerCase()));
    




    setProductList(fillteredProducts);
  }
  useEffect(() => {
    getProducts();
  }, [query])




  return (
    <div className='ProductAll'>
      <MainVisual/>
      <div className="ProductAllInner">
        {productList.map((item)=>(

          <ProductCard item={item} key={item.id} />

        ))}
      </div>
    </div>
  )
}

export default ProductAll