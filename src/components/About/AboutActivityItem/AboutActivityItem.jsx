import React from "react";

function AboutActivityItem({ bg, name }) {
  return (
    <div className="col">
      <div className={`border fs-1 rounded ${bg}`}>
        <a className="text-decoration-none text-reset" href="#" target="_blank">
          <i className="fa-sharp fa-solid fa-gears"></i>
          <p className="text-center fs-4">{name}</p>
        </a>
      </div>
    </div>
  );
}

export default AboutActivityItem;
