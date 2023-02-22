import React from 'react'

function HomeOurSpecialityItem({item}) {
  return (
    <div className="col-6 col-sm-3 productitem">
      <div className="productitem_title text-center">
        <a href="/uslugi/pechat-na-plastike/">{item.title}</a>
      </div>
      <div className="productitem_image mb-5" >
        <div>
          <img alt={item.alt} src={item.img} /><br />
        </div>
      </div>
    </div>
  )
}

export default HomeOurSpecialityItem