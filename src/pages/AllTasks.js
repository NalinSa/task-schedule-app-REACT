import TaskList from "../components/tasks/TaskList";
const DATA = [
  {
    id: "id1",
    name: "Clean the dishes",
    time: "00:40",
    deadline: "2022-12-07",
    description:
      "mom will kill you if you do not finish it--------------------------------------------------------------------------------------------------------------",
  },
  {
    id: "id5",
    name: "Clean the dishes",
    time: "00:35",
    deadline: "2022-12-06",
    description:
      "mom will kill you if you do not finish it--------------------------------------------------------------------------------------------------------------",
  },
  {
    id: "id3",
    name: "Learn React",
    time: "00:35",
    deadline: "2022-12-11",
    description: "it's interesting!",
  },
  {
    id: "id4",
    name: "Learn React",
    time: "00:36",
    deadline: "2022-12-07",
    description: "it's interesting!",
  },
  {
    id: "id7",
    name: "Learn React",
    time: "00:35",
    deadline: "2022-12-03",
    description: "it's interesting!",
  }
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
