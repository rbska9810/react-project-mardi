import React from 'react'
import { useNavigate } from 'react-router';

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const goToDetail = ()=>{
    navigate(`/product/${item.id}`);
  }
  return (
    <div className='ProductCard' onClick={goToDetail}>
      <img src={item?.img} />
      <h3 className='SubTitle'>Conscious choice</h3>
      <span>{item?.tag.join(' | ')}</span>
      <h2 className='Title'>{item?.title}</h2>
      <p className='Price'>₩ {item?.price?.toLocaleString(undefined, {
            minimumFractionDigits: 0,
          })}</p>
    </div>
  )
}

export default ProductCard