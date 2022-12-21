import { useContext } from "react";
import FavoriteContext from "../state/favorite-tasks";
import TaskList from "../components/tasks/TaskList";
function FavariteTasks() {
  const favoriteContext = useContext(FavoriteContext);
  return (
    <section>
      <h1>My Favorite Tasks</h1>
      <TaskList tasks={favoriteContext.allFavoriteTasks}></TaskList>
    </section>
  );
}
export default FavariteTasks;
