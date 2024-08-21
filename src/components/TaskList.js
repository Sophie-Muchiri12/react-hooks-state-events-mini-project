import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          category={task.category}
          text={task.text}
          onDeleteTask={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
