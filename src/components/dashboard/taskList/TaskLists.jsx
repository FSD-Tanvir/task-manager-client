/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import Section from "./Section";

const TaskLists = ({ tasks, onTaskDeleted, onStatusUpdated }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);


  useEffect(() => {
    const fTodos = tasks.filter((task) => task.status === "todo");
    const fInProgress = tasks.filter((task) => task.status === "inprogress");
    const fCompleted = tasks.filter((task) => task.status === "completed");

    setTodos(fTodos);
    setInProgress(fInProgress);
    setCompleted(fCompleted);
  }, [tasks]);

  const statuses = ["todo", "inprogress", "completed"];

  return (
    <div className="flex flex-col md:flex-row gap-5">
      {statuses.map((status) => {
        return (
          <Section
            key={status}
            status={status}
            todos={todos}
            inProgress={inProgress}
            completed={completed}
            onTaskDeleted={onTaskDeleted}
            onStatusUpdated={onStatusUpdated}
          ></Section>
        );
      })}
    </div>
  );
};

export default TaskLists;
