import React, { useContext } from "react";

import { ProductsContext } from "../contexts/productsContext";
import MenuItem from "./menu-item";

import "../styles/directory.styles.scss";

function Directory() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="directory-menu">
      {products.map(({ title, titleImage, id, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          titleImage={titleImage}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
}

export default Directory;
