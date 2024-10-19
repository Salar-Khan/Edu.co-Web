import React from "react";

const Item = ({ title, Links }) => {
  return (
    <div>
      <h1 className="mb-1 font-semibold">{title}</h1>
      <ul>
        {Links.map((link) => (
          <li key={link.id} className="cursor-pointer font-thin">
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
