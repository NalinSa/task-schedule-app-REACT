import style from "./TaskList.module.css";
import TaskBlock from "./TaskBlock";
function TaskList(props) {
  return (
    <ul className={style.list}>
      {props.tasks.map((task) => (
        <TaskBlock
          key={task.id}
          id={task.id}
          name={task.name}
          time={task.time}
          deadline={task.deadline}
          description={task.description}
        />
      ))}
    </ul>
  );
}
export default TaskList;
