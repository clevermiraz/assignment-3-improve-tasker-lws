import SearchBox from "./Searchbox";

export default function TaskActions({
    onIsAddModalOpen,
    onDeleteAllClick,
    onInputChange,
}) {
    return (
        <>
            <div className="flex items-center space-x-5">
                <SearchBox onInputChange={onInputChange} />

                <button
                    onClick={() => onIsAddModalOpen(true)}
                    className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
                >
                    Add Task
                </button>
                <button
                    onClick={onDeleteAllClick}
                    className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
                >
                    Delete All
                </button>
            </div>
        </>
    );
}
