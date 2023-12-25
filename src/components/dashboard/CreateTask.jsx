/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const CreateTask = ({ onTaskCreated }) => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = async (data) => {
    const addTask = {
      taskTitle: data.taskTitle,
      description: data.description,
      deadlines: data.deadlines,
      taskPriority: data.taskPriority,
      userEmail: user.email,
      status: "todo",
    };
    console.log(addTask);

    const result = await axios.post(
      "http://localhost:5000/create-task",
      addTask
    );
    if (result.data.insertedId) {
      toast.success("Created successfully");
      reset();
      onTaskCreated();
    }
  };

  return (
    <div>
      <h2 className="text-4xl text-center mb-4 font-bold">Create Your Task</h2>
      <div className=" mb-4 bg-purple-700 border rounded-lg px-5 py-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 gap-4 "
        >
          <div>
            <div className="mb-6">
              <label className="block text-white font-bold mb-2">
                Task Title*
              </label>
              <input
                type="text"
                name="takTitle"
                placeholder="Task Title"
                {...register("taskTitle", { required: true })}
                required
                className="input w-full"
              />
            </div>
            <div className="">
              <label className="block text-white font-bold mb-2">
                Task Description
              </label>
              <textarea
                {...register("description")}
                className="textarea w-full"
                placeholder="Description"
                rows={5}
              ></textarea>
            </div>
          </div>
          <div>
            <div className="flex flex-col md:gap-6">
              <div className="">
                <label className="block text-white font-bold mb-2">
                  Deadlines*
                </label>
                <input
                  type="date"
                  placeholder="Deadlines"
                  {...register("deadlines", { required: true })}
                  className="input w-full"
                />
              </div>
              <div className="">
                <label className="block text-white font-bold mb-2">
                  Task Priority*
                </label>
                <select
                  {...register("taskPriority", { required: true })}
                  className="input w-full"
                >
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                </select>
              </div>
              <button type="submit" className="btn bg-purple-300 mt-8">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
