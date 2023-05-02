import React, { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { getPersistedTasks, persistTasks } from "../utils/coockiePersist";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: Math.random(),
      title: "First Task",
      description: "This is description",
    },
  ]);

  useEffect(() => {
    const availableTasks = getPersistedTasks();
    setTasks(availableTasks);
  }, []);

  const addNewTask = ({ title, description }) => {
    setTasks((prevTasks) => {
      const updtedTasks = [
        ...prevTasks,
        {
          id: Math.random(),
          title,
          description,
        },
      ];
      persistTasks(updtedTasks);
      return updtedTasks;
    });
  };

  const handleDeleteTask = (deleteTaskId) => {
    setTasks((prevTasks) => {
      const filteredTask = [...prevTasks].filter(
        ({ id }) => id !== deleteTaskId
      );

      persistTasks(filteredTask);
      return filteredTask;
    });
  };

  return (
    <div className="container">
      <div className="task-header">
        <h2>Tasks</h2>
      </div>

      <AddTaskForm addNewTask={addNewTask} />

      <div className="tasks-container">
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <div className="task-delete-btn">
              <button onClick={() => handleDeleteTask(task.id)}>delete</button>
            </div>

            <div className="task-title">{task.title}</div>
            <div className="task-description">{task.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
