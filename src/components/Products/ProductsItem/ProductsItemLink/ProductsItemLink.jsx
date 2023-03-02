import React from 'react'

function ProductsItemLink({ item }) {
  return (
    <>
      <a href={item.href}>{item.name}</a><br />
    </>
  )
}

export default ProductsItemLink