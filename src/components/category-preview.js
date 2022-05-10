import { Link } from "react-router-dom";

import ProductCard from "./productCard";

import "../styles/category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <div className="title-container">
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
        <Link className="view-all" to={title}>
          view all
        </Link>
      </div>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
