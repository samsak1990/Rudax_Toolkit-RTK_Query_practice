import React, { useState } from "react";
import styles from "./RecipeItem.module.css";
import { useActions } from "../../Hooks/useActions";
import { useFavorites } from "../../Hooks/useFavorites";

export default function RecipeItem({ recipe }) {
  const favorites = useFavorites();
  const { toggleFavorites } = useActions();
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className={styles.item}>
      <img
        src={recipe.image}
        alt=""
        className={styles.image}
      />
      <h3>{recipe.name}</h3>
      <button
        className={!isAdded ? styles.btnAdd : styles.btnAdd_red}
        onClick={() => {
          toggleFavorites(recipe);
          setIsAdded(!isAdded);
        }}
      >
        {!isAdded ? "Add to favorite" : "Remove from favorite"}
      </button>
    </div>
  );
}
