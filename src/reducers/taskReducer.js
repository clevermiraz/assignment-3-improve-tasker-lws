export default function taskReducer(tasks, action) {
    switch (action.type) {
        case "addedNewTask": {
            return [action.newTask, ...tasks];
        }

        case "editedTask": {
            return tasks.map((task) =>
                task.id === action.editedTask.id ? action.editedTask : task
            );
        }

        case "deletedTask": {
            return tasks.filter((task) => task.id !== action.taskId);
        }

        case "deletedAllTasks": {
            return [];
        }

        case "toggleFavoriteTask": {
            return tasks.map((task) =>
                task?.id === action.taskId
                    ? { ...task, isFavorite: !task?.isFavorite }
                    : task
            );
        }

        default: {
            throw new Error(`No Matching with ${action.type}`);
        }
    }
}
