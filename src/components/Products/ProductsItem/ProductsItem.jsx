import React from 'react'
import ProductsItemLink from './ProductsItemLink/ProductsItemLink'

function ProductsItem({ item }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 products-item">

      <div className="products-header text-center mb-2">{item.name}</div>
      <div className="products-image">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="product-text text-center text-sm-start fw-bold">
        {item.links?.map((item) => (
          <ProductsItemLink key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductsItem