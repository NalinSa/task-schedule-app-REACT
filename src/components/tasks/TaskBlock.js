import Card from "../ui/Card";
import style from "./TaskBlock.module.css";
function TaskBlock(props) {
  return (
    <li className={style.item}>
      <Card>
        <div className={style.content}>
          <h3>TASK: {props.name}</h3>
          <div>
            <h4>DEADLINE: </h4>
            <p>
              {props.deadlineday}/{props.deadlinemonth}/{props.deadlineyear}
            </p>
          </div>
          <div>
            <h4>DESCRIPTION: </h4>
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
