import { useFavorites } from "./Hooks/useFavorites";
import RecipeItem from "./components/recipeItem/recipeItem";
import { FaBookBookmark } from "react-icons/fa6";
import { useGetRecipesQuery } from "./store/favorites/api/api.ednpoints";
import CreateRecipe from "./components/create-recipe/createRecipe";


function App() {
  const favorites = useFavorites();
  const {data, isLoading, error} = useGetRecipesQuery()

  return (
    <>
      <div style={{ margin: "10px" }}>
        <FaBookBookmark />
        <span style={{ marginLeft: "10px" }}>{favorites.length}</span>
      </div>
      <div>
        <CreateRecipe />
      </div>
      <div className="wrapper">
        {isLoading ? 'Please wait... Loading' : data ? data.map(res=>(<RecipeItem recipe={res} key={res.id}/>)) : 'Not found'}
        {/* {data && )} */}
      </div>
    </>
  );
}

export default App;
