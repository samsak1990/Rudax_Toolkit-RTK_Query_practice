import { useFavorites } from "./Hooks/useFavorites";
import RecipeItem from "./recipeItem/recipeItem";
import { FaBookBookmark } from "react-icons/fa6";
function App() {
  const favorites = useFavorites();
  return (
    <>
      <div style={{ margin: "10px" }}>
        <FaBookBookmark />
        <span style={{ marginLeft: "10px" }}>{favorites.length}</span>
      </div>
      <div className="wrapper">
        <RecipeItem
          recipe={{
            id: 1,
            name: "Lasaniya",
          }}
        />
        <RecipeItem
          recipe={{
            id: 2,
            name: "Pizza",
          }}
        />
        <RecipeItem
          recipe={{
            id: 3,
            name: "Pasta",
          }}
        />
      </div>
    </>
  );
}

export default App;
