/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosRemoveCircle } from "react-icons/io";

const TaskLists = ({ tasks, onTaskDeleted }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  console.log(tasks);

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
          ></Section>
        );
      })}
    </div>
  );
};

export default TaskLists;

const Section = ({ status, todos, inProgress, completed, onTaskDeleted }) => {
  let text = "Todo";
  let bg = "bg-slate-500";
  let tasksToMap = todos;

  if (status === "inprogress") {
    text = "In Progress";
    bg = "bg-purple-500";
    tasksToMap = inProgress;
  }
  if (status === "completed") {
    text = "completed";
    bg = "bg-green-500";
    tasksToMap = completed;
  }

  return (
    <div className="w-64 md:w-60">
      <Header text={text} bg={bg} count={tasksToMap.length} />
      {tasksToMap.length > 0 &&
        tasksToMap.map((task) => {
          return (
            <Task
              key={task._id}
              task={task}
              bg={bg}
              onTaskDeleted={onTaskDeleted}
            />
          );
        })}
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} flex items-center h-12 justify-center rounded-md uppercase text-sm text-white`}
    >
      {text}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};
const Task = ({ task, bg, onTaskDeleted }) => {
  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/delete/${id}`);

      if (response.status === 200) {
        toast.success("Task deleted successfully");
        onTaskDeleted();
      } else {
        toast.error("Error deleting task");
      }
    } catch (error) {
      toast.error("Error deleting task:", error);
    }
  };

  return (
    <div
      className={`relative ${bg} p-6 rounded-lg shadow-md mb-4 w-64 md:w-60 max-w-full mt-2 text-white`}
    >
      <div>
        <h3 className="text-xl font-bold mb-2">{task.taskTitle}</h3>
        <p className="mb-2 ">{task.description}</p>
        <div className="flex items-center mb-2">
          <span className="mr-2">Deadlines:</span>
          <span className="">{task.deadlines}</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="mr-2">Priority:</span>
          <span className="capitalize">{task.taskPriority}</span>
        </div>
      </div>
      <button
        className="absolute bottom-1 right-1 text-3xl text-red-300"
        onClick={() => handleRemove(task._id)}
      >
        <IoIosRemoveCircle />
      </button>
    </div>
  );
};
