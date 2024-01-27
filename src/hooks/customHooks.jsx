import { useContext } from "react";
import { TasksContext, TasksDispatchContext } from "../contexts/taskContext";

export const useTasks = () => {
    return useContext(TasksContext);
};

export const useTasksDispatch = () => {
    return useContext(TasksDispatchContext);
};
