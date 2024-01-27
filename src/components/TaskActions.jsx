import { useState } from "react";
import { toast } from "react-toastify";
import { useTasksDispatch } from "../hooks/customHooks";

export default function TaskActions({ onIsAddModalOpen, onInputChange }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);

        onInputChange(e.target.value);
    };

    const dispatch = useTasksDispatch();

    const handleDeleteAll = () => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            dispatch({
                type: "deletedAllTasks",
            });
            toast.success("All Tasks Deleted Successfully");
        }
    };

    return (
        <>
            <div className="flex items-center space-x-5">
                <form>
                    <div className="flex">
                        <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                            <input
                                type="search"
                                id="search-dropdown"
                                className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                                placeholder="Search Task"
                                required
                                value={searchTerm}
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
                            >
                                <svg
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

                <button
                    onClick={() => onIsAddModalOpen(true)}
                    className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                >
                    Add Task
                </button>
                <button
                    onClick={handleDeleteAll}
                    className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
                >
                    Delete All
                </button>
            </div>
        </>
    );
}
