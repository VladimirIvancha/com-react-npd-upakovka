import React from 'react'

function HomeReasonItem({item}) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-3">
      <div className={item.cardClass}>
        <div className="col-2 col-sm-2">
          <div className="home-img mx-auto"></div>
        </div>
        <h3 className="reason-title col-10 text-start">{item.title}</h3>
        <div className="reason_descr col-12">
          {item.description}
        </div>
      </div>
    </div>
  )
}

export default HomeReasonItem