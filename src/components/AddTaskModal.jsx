import { useState } from "react";
import { toast } from "react-toastify";

export default function AddTaskModal({ onIsModalOpen, addNewTask }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        tags: "",
        priority: "",
    });

    const handleStopPropagation = (event) => {
        event.stopPropagation();

        // Prevents the modal from closing when clicking On Child Element
        // stop Parent Element from receiving the event

        // basically when clicking outside the modal, the modal should close
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const checkValidation = () => {
        if (!formData.title) {
            toast.error("Title is required");
            return false;
        }

        if (!formData.description) {
            toast.error("Description is required");
            return false;
        }

        if (!formData.tags) {
            toast.error("Tags is required");
            return false;
        }

        if (!formData.priority) {
            toast.error("Priority is required");
            return false;
        }

        return true;
    };

    const handleCreateNewTask = (event) => {
        event.preventDefault();

        if (checkValidation()) {
            addNewTask({ id: crypto.randomUUID(), ...formData });
        }
    };

    return (
        <div
            role="button"
            className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm overflow-y-auto text-center"
            onClick={() => onIsModalOpen()}
        >
            <div
                onClick={handleStopPropagation}
                className="relative inline-block"
            >
                <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
                    <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
                        Add New Task
                    </h2>

                    {/* <!-- inputs --> */}
                    <div className="space-y-9 text-white lg:space-y-10 text-left">
                        {/* <!-- title --> */}
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="title">Title</label>
                            <input
                                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        {/* <!-- description --> */}
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                                type="text"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        {/* <!-- input group --> */}
                        <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
                            {/* <!-- tags --> */}
                            <div className="space-y-2 lg:space-y-3">
                                <label htmlFor="tags">Tags</label>
                                <input
                                    className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                    type="text"
                                    id="tags"
                                    name="tags"
                                    value={formData.tags}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            {/* <!-- priority --> */}
                            <div className="space-y-2 lg:space-y-3">
                                <label htmlFor="priority">Priority</label>
                                <select
                                    className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                                    id="priority"
                                    required
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Priority</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <!-- inputs ends --> */}
                    <div className="mt-16 flex gap-x-8 justify-center lg:mt-20">
                        <button
                            onClick={() => onIsModalOpen()}
                            type="button"
                            className="rounded bg-slate-600 px-4 py-2 text-white transition-all hover:opacity-80"
                        >
                            Close
                        </button>

                        <button
                            onClick={handleCreateNewTask}
                            type="submit"
                            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
                        >
                            Create new Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
