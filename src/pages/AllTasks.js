import TaskList from "../components/tasks/TaskList";
const DATA = [
  {
    id: "id1",
    name: "Clean the dishes",
    deadlineday: "01",
    deadlinemonth: "01",
    deadlineyear: "2021",
    description:
      "mom will kill you if you do not finish it--------------------------------------------------------------------------------------------------------------",
  },
  {
    id: "id2",
    name: "Learn React",
    deadlineday: "02",
    deadlinemonth: "02",
    deadlineyear: "2022",
    description: "it's interesting!",
  },
  {
    id: "id3",
    name: "Learn React",
    deadlineday: "02",
    deadlinemonth: "02",
    deadlineyear: "2022",
    description: "it's interesting!",
  },
  {
    id: "id4",
    name: "Learn React",
    deadlineday: "02",
    deadlinemonth: "02",
    deadlineyear: "2022",
    description: "it's interesting!",
  },
  {
    id: "id5",
    name: "Clean the dishes",
    deadlineday: "01",
    deadlinemonth: "01",
    deadlineyear: "2021",
    description:
      "mom will kill you if you do not finish it--------------------------------------------------------------------------------------------------------------",
  },
];
function AllTasks() {
  return (
    <section>
      <h1>All Tasks</h1>
      <TaskList tasks={DATA}></TaskList>
    </section>
  );
}
export default AllTasks;
