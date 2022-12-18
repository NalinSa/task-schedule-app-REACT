import Card from "../ui/Card";
import style from "./TaskForm.module.css";

function TaskForm() {
  return (
    <Card>
      <form className={style.form}>
        <div className={style.control}>
          <label htmlFor="name">Task Name</label>
          <input type="text" required id="name"></input>
        </div>
        <div className={style.control}>
          <label htmlFor="deadline">Deadline Date</label>
          <input type="date" id="deadline"></input>
        </div>
        <div className={style.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="6"></textarea>
        </div>
        <div className={style.actions}>
          <button>Add Task</button>
        </div>
      </form>
    </Card>
  );
}
export default TaskForm;
