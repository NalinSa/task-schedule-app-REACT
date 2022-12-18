import Card from "../ui/Card";
import style from "./TaskBlock.module.css";
function TaskBlock(props) {
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
          <button>Favarite</button>
        </div>
      </Card>
    </li>
  );
}
export default TaskBlock;
