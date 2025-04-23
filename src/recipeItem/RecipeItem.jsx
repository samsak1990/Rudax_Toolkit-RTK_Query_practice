import React, { useState } from "react";
import styles from "./RecipeItem.module.css";
import { useActions } from "../Hooks/useActions";
import { useFavorites } from "../Hooks/useFavorites";

export default function RecipeItem({ recipe }) {
  const favorites = useFavorites();
  const { toggleFavorites } = useActions();
  const [isAdded, setIsAdded] = useState(false);

  console.log(favorites);
  return (
    <div className={styles.item}>
      <img
        src="https://avatars.mds.yandex.net/i?id=8938909fad9c44cfc9b4e4e83a0192be_sr-5236157-images-thumbs&n=13"
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
