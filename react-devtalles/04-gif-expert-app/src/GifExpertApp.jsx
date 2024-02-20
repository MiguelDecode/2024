import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const addCategory = (newCategory) => {
    if (newCategory.trim().length <= 1) return;

    if (categories.includes(newCategory)) return;

    setCategories([newCategory.trim(), ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory addCategory={addCategory} />

      <div>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};

export default GifExpertApp;
