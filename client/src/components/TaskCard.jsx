import { useTasks } from "../context/TasksContext";
import { Link } from "react-router";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-6 rounded-md shadow-lg mb-6">
      <header className="flex justify-between items-start mb-4">
        <h1 className="text-xl font-bold text-white truncate max-w-full">{task.title}</h1>
        <div className="flex gap-x-3 items-center">
          <button
            onClick={() => deleteTask(task._id)}
            className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
          >
            Borrar
          </button>
          <Link
            to={`/tasks/${task._id}`}
            className="text-indigo-500 hover:text-indigo-600 font-semibold transition-colors duration-300"
          >
            Editar
          </Link>
        </div>
      </header>

      {/* Descripción truncada sin usar line-clamp */}
      <p className="text-slate-300 mb-4 truncate-description">{task.description}</p>
      <p className="text-sm text-slate-400">{new Date(task.date).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;
