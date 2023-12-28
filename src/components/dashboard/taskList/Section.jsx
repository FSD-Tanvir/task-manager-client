import axios from "axios";
import { useDrop } from "react-dnd";
import toast from "react-hot-toast";
import Header from "./Header";
import Task from "./Task";

/* eslint-disable react/prop-types */
const Section = ({
    status,
    todos,
    inProgress,
    completed,
    onTaskDeleted,
    onStatusUpdated,
  }) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: "task",
      drop: (item) => updateStatus(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
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
  
    const updateStatus = (id) => {
      const updateStatus = { status };
  
      axios
        .patch(`http://localhost:5000/update/${id}`, updateStatus)
        .then((response) => {
          if (response.data.modifiedCount > 0) {
            toast.success("Task Updated Successfully");
            onStatusUpdated();
          }
        })
        .catch((error) => {
          toast.error("Error:", error);
        });
    };
  
    return (
      <div
        ref={drop}
        className={`w-64 md:w-60 p-2 ${isOver ? "bg-slate-200" : ""} `}
      >
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

  export default Section