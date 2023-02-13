import React from "react";

function AboutOurMachinesLink({ item }) {
  return (
    <li className="nav-item">
      <a
        className={`nav-link fs-5 ${item.active && "active fw-bold"}`}
        aria-current="page"
        href={item.link}
      >
        {item.name}
      </a>
    </li>
  );
}

export default AboutOurMachinesLink;
