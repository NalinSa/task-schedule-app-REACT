import { createContext, useState } from "react";
const FavoriteContext = createContext({
  allFavoriteTasks: [],
  addFavorite: (favoritask) => {},
  removeFavorite: (taskId) => {},
  isFavorite: (taskId) => {},
});

export function FavoriteTaskContext(props) {
  const [listFavorite, setListFavorite] = useState([]);

  function addFavoriteHandler(task) {
    setListFavorite((prev) => {
      return prev.concat(task);
    });
  }
  function removeFavoriteHandler(taskId) {
    setListFavorite((prev) => {
      return prev.filter((task) => task.id !== taskId);
    });
  }
  function isFavorite(taskId) {
    return listFavorite.some((task) => task.id === taskId);
  }
  const contextValue = {
    allFavoriteTasks: listFavorite,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavorite,
  };

  return (
    <FavoriteContext.Provider value={contextValue}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;
