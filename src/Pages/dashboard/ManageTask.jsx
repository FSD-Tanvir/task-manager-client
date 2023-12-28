/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "react-query";
import CreateTask from "../../components/dashboard/CreateTask";
import useAuth from "../../components/hooks/useAuth";
import Loader from "../../components/shared/Loader";
import TaskLists from "../../components/dashboard/taskList/TaskLists";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ManageTask = () => {
  const { user } = useAuth();
  const userEmail = user.email;
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    data,
    isLoading: queryLoading,
    refetch,
  } = useQuery({
    queryKey: [userEmail],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/tasks?email=${userEmail}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  useEffect(() => {
    setTasks(data);
  }, [data]);

  useEffect(() => {
    setIsLoading(queryLoading);
  }, [queryLoading]);

  const handleRefetch = () => {
    // Manually trigger a refetch
    refetch();
  };

  if (isLoading) return <Loader />;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col items-center gap-16">
        <CreateTask onTaskCreated={handleRefetch} />
        <TaskLists
          onTaskDeleted={handleRefetch}
          onStatusUpdated={handleRefetch}
          tasks={tasks}
        />
      </div>
    </DndProvider>
  );
};

export default ManageTask;
