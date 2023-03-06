import React from 'react'

function ServiceItemLink({item}) {
  return (
    <>
      <a href={item.href}>{item.name}</a><br />
    </>
  )
}

export default ServiceItemLink