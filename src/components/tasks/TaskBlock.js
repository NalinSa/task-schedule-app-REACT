import style from "./TaskBlock.module.css";
function TaskBlock(props) {
  return (
    <div className={style.card}>
      <li>
        <div className={style.content}>
          <h3>{props.title}</h3>
          <p>{props.deadlineday}</p>
          <p>{props.deadlinemonth}</p>
          <p>{props.deadlineyear}</p>
          <p>{props.description}</p>
        </div>
        <div className={style.actions}>
          <button>Favarite</button>
        </div>
      </li>
    </div>
  );
}
export default TaskBlock;
