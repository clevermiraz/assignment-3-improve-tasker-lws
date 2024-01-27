import { useState } from "react";
import { toast } from "react-toastify";
import { useTasks, useTasksDispatch } from "../hooks/customHooks";
import { getRandomTagColor } from "../lib/utils";
import AddTaskModal from "./AddTaskModal";
import EditTaskModal from "./EditTaskModal";
import TaskActions from "./TaskActions";

export default function TaskTable() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [editTask, setEditTask] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const tasks = useTasks();
    const dispatch = useTasksDispatch();

    const filteredTasks = tasks.filter((task) =>
        task?.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (taskId) => {
        // confirm before deleting
        if (window.confirm("Are you sure you want to delete this task?")) {
            dispatch({
                type: "deletedTask",
                taskId,
            });
            toast.success("Task Deleted Successfully");
        }
    };

    const handleFavorite = (taskId) => {
        dispatch({
            type: "toggleFavoriteTask",
            taskId,
        });
    };

    return (
        <>
            <section className="mb-20" id="tasks">
                <div className="container">
                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                        <div className="mb-14 items-center justify-between sm:flex">
                            <h2 className="text-2xl font-semibold max-sm:mb-4">
                                Your Tasks
                            </h2>
                            <TaskActions
                                onIsAddModalOpen={setIsAddModalOpen}
                                inputValue={searchTerm}
                                onInputChange={(searchTerm) => {
                                    setSearchTerm(searchTerm);
                                }}
                            />
                        </div>
                        <div className="overflow-auto">
                            <table className="table-fixed overflow-auto xl:w-full">
                                <thead>
                                    <tr>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                                            {" "}
                                            Title{" "}
                                        </th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                                            {" "}
                                            Description{" "}
                                        </th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                                            {" "}
                                            Tags{" "}
                                        </th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                                            {" "}
                                            Priority{" "}
                                        </th>
                                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                                            {" "}
                                            Options{" "}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTasks.length === 0 ? (
                                        <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                                            <td
                                                colSpan="6"
                                                className="text-center text-red-400 font-semibold text-lg"
                                            >
                                                Task List is empty!
                                            </td>
                                        </tr>
                                    ) : (
                                        <>
                                            {filteredTasks.map((task) => (
                                                <tr
                                                    className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
                                                    key={task?.id}
                                                >
                                                    <td
                                                        onClick={() =>
                                                            handleFavorite(
                                                                task?.id
                                                            )
                                                        }
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon icon-tabler icon-tabler-star"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="2"
                                                            stroke={`${
                                                                task?.isFavorite
                                                                    ? "yellow"
                                                                    : "currentColor"
                                                            }`}
                                                            fill={`${
                                                                task?.isFavorite
                                                                    ? "yellow"
                                                                    : "none"
                                                            }`}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                                fill="none"
                                                            />
                                                            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                        </svg>
                                                    </td>
                                                    <td>{task?.title}</td>
                                                    <td>
                                                        <div>
                                                            {task?.description}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul className="flex justify-center gap-1.5 flex-wrap">
                                                            {task?.tags
                                                                .split(",")
                                                                .map((tag) => (
                                                                    <li
                                                                        key={
                                                                            tag
                                                                        }
                                                                    >
                                                                        <span
                                                                            className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6] ${getRandomTagColor()}`}
                                                                        >
                                                                            {
                                                                                tag
                                                                            }
                                                                        </span>
                                                                    </li>
                                                                ))}
                                                        </ul>
                                                    </td>
                                                    <td className="text-center capitalize">
                                                        {task?.priority}
                                                    </td>
                                                    <td>
                                                        <div className="flex items-center justify-center space-x-3">
                                                            <button
                                                                className="text-red-500"
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        task?.id
                                                                    )
                                                                }
                                                            >
                                                                Delete
                                                            </button>
                                                            <button
                                                                className="text-blue-500"
                                                                onClick={() =>
                                                                    setEditTask(
                                                                        task
                                                                    )
                                                                }
                                                            >
                                                                Edit
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {isAddModalOpen && (
                <AddTaskModal onIsModalOpen={() => setIsAddModalOpen(false)} />
            )}

            {editTask && (
                <EditTaskModal
                    closeEditTaskModal={() => setEditTask(null)}
                    editTask={editTask}
                />
            )}
        </>
    );
}
