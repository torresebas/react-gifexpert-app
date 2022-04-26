import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  // Esto pasa por props a AddCategory
  // const handleAdd = () => {
  //   setCategories([...categories, "HunterXHunter"]);
  // };
  return (
    <>
      <div>GifExpertApp</div>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={ category } />
        ))}
      </ol>
    </>
  );
};
