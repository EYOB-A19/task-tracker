import { useState } from "react";
import { useTasks } from "../store/taskContext";

const TaskInput = () => {
  const [text, setText] = useState("");
  const { tasks, setTasks } = useTasks();

  const addTask = () => {
    if (!text.trim()) return;

    setTasks([...tasks, { id: Date.now(), text, completed: false }]);

    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
