import style from "./TaskList.module.css";
import TaskBlock from "./TaskBlock";
function TaskList(props) {
  return (
    <ul className={style.list}>
      {props.tasks.map((task) => (
        <TaskBlock
          key={task.id}
          id={task.id}
          title={task.title}
          deadlineday={task.deadlineday}
          deadlinemonth={task.deadlinemonth}
          deadlineyear={task.deadlineyear}
          description={task.description}
        />
      ))}
    </ul>
  );
}
export default TaskList;
