import style from "./TaskList.module.css";
import TaskBlock from "./TaskBlock";
import TriggerConfirm from "./TriggerConfirm";
import { useState } from "react";
function TaskList(props) {
  const [triggerIsPop, setTriggerPop] = useState(false);
  const [namePop, setNamePop] = useState('');

  function deleteTaskHandler(nameTask) {
    console.log(nameTask);
    setTriggerPop(true);
    setNamePop(nameTask);
  }
  function closeTriggerHandler() {
    setTriggerPop(false);
  }

  return (
    <div>
      <ul className={style.list}>
        {props.tasks
          .sort(
            (a, b) =>
              a.deadline
                .toLowerCase()
                .localeCompare(b.deadline.toLowerCase()) ||
              a.time.toLowerCase().localeCompare(b.time.toLowerCase())
          )
          .map((task) => (
            <TaskBlock
              onDeleteClick={deleteTaskHandler}
              key={task.id}
              id={task.id}
              name={task.name}
              time={task.time}
              deadline={task.deadline}
              description={task.description}
            />
          ))}
      </ul>
      {triggerIsPop ? (
        <TriggerConfirm
          nameToPop = {namePop}
          onCancelClick={closeTriggerHandler}
          onAcceptClick={closeTriggerHandler}
        />
      ) : null}
    </div>
  );
}
export default TaskList;
