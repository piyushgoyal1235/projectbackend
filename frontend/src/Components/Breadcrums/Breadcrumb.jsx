import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../assets/breadcrum_arrow.png';

const Breadcrumbs = (props) => {
  const { Product } = props;

  // Check if 'Product' and 'category' are defined before using them
  if (Product?.category) {
    return (
      <div className='breadcrum'>
        HOME <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt='' /> {Product.category}
        <img src={arrow_icon} alt='' />
        {Product.name} ;
      </div>
    );
  } else {
    return null;
  }
};
export default Breadcrumbs;
