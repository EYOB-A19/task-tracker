import { useTasks } from "../store/taskContext";

const Stats = () => {
  const { tasks } = useTasks();

  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div>
      <h2>Task Statistics</h2>
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {completed}</p>
      <p>Remaining Tasks: {tasks.length - completed}</p>
    </div>
  );
};

export default Stats;
