import React, { useState } from "react";
import styles from "./RecipeItem.module.css";
import { useActions } from "../../Hooks/useActions";
import { useFavorites } from "../../Hooks/useFavorites";
import {useRemoveRecipeMutation} from '../../store/favorites/api/api.ednpoints'

export default function RecipeItem({ recipe }) {
  const favorites = useFavorites();
  const { toggleFavorites } = useActions();
  const [isAdded, setIsAdded] = useState(false);
  const [removeRecipe]= useRemoveRecipeMutation()

  return (
    <div className={styles.item}>
      <img
        src={recipe.image}
        alt= "description"
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
      <button className="deleteBtn" onClick={()=>{
        removeRecipe(recipe.id)}}>Delete from list</button>
    </div>
  );
}
