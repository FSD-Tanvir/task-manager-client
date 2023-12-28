import axios from "axios";
import { useDrag } from "react-dnd";
import toast from "react-hot-toast";
import { IoIosRemoveCircle } from "react-icons/io";

/* eslint-disable react/prop-types */
const Task = ({ task, bg, onTaskDeleted }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "task",
      item: { id: task._id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));
  
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
        ref={drag}
        className={`relative ${bg} p-4 md:p-6 rounded-lg shadow-md mb-4 md:w-64 lg:w-60 max-w-full mt-2 text-white ${
          isDragging ? "opacity-25" : "opacity-100"
        } `}
      >
        <div>
          <h3 className="text-xl md:text-lg lg:text-xl font-bold mb-2 w-48 text-wrap ">
            {task.taskTitle}
          </h3>
          <p className="mb-2 w-48 text-wrap text-justify">{task.description}</p>
          <div className="flex flex-row  mb-2">
            <span className="mr-2">Deadlines:</span>
            <span className="">{task.deadlines}</span>
          </div>
          <div className="flex flex-row  mb-2">
            <span className="mr-2">Priority:</span>
            <span className="capitalize">{task.taskPriority}</span>
          </div>
        </div>
        <button
          className="absolute bottom-1 right-1 text-2xl md:text-3xl text-red-300"
          onClick={() => handleRemove(task._id)}
        >
          <IoIosRemoveCircle />
        </button>
      </div>
    );
  };

  export default Task