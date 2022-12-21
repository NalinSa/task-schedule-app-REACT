import Card from "../ui/Card";
import { useContext } from "react";
import FavoriteContext from "../../state/favorite-tasks";
import style from "./TaskBlock.module.css";
function TaskBlock(props) {
  const favoriteContext = useContext(FavoriteContext);
  const isFavorite = favoriteContext.isFavorite(props.id);

  function deleteTaskHandler(){
    props.onDeleteClick(props.name);
  }
  function toFavoriteHandler() {
    if (isFavorite) {
      favoriteContext.removeFavorite(props.id);
    } else {
      favoriteContext.addFavorite({
        id: props.id,
        name: props.name,
        time: props.time,
        deadline: props.deadline,
        description: props.description,
      });
    }
  }

  return (
    <li className={style.item}>
      <Card>
        <div className={style.content}>
          <h3>{props.name}</h3>
          <div>
            <h4>DEADLINE TIME:</h4>
            <p>{props.time}</p>
            <h4>DATE: </h4>
            <p>{props.deadline} </p>
          </div>
          <div>
            <h4>DESCRIPTION:</h4>
            <p> {props.description}</p>
          </div>
        </div>
        <div className={style.actions}>
          <div className={style.favorite}>
            <button onClick={toFavoriteHandler}>
              {isFavorite ? "Remove Favorites" : "To Favorites"}
            </button>
          </div>
          <div className={style.delete} onClick={deleteTaskHandler}>
            <button>Delete Task</button>
          </div>
        </div>
      </Card>
    </li>
  );
}
export default TaskBlock;
