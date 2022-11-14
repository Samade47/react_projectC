import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const CategoryColor = ({ categoryId }) => {
  const [categories, setCategories] = useState([]);
  const { list } = useFetch();
  useEffect(() => {
    list("categories").then((data) => setCategories(data));
  });

  return (
    <div className="square" style={{ width: "50px", height: "50px" }}>
      {categories.map(
        (category, index) =>
          category.id === categoryId && (
            <div
              key={index}
              className="color"
              style={{
                backgroundColor: category.color,
                width: "100%",
                height: "100%",
              }}
            ></div>
          )
      )}
    </div>
  );
};

export default CategoryColor;
