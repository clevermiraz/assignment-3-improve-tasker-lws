import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TaskTable from "./components/TaskTable";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TasksProvider from "./contexts/taskContext";

export default function App() {
    return (
        <TasksProvider>
            <main className="bg-[#191D26] font-[Inter] text-white max-md:px-4 lg:text-lg">
                <Navbar />
                <HeroSection />

                <TaskTable />

                <Footer />

                <ToastContainer />
            </main>
        </TasksProvider>
    );
}
