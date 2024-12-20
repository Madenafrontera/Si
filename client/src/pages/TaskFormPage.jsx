import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

function TasksFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    loadTask();
  }, [params.id, setValue, getTask]);

  return (
    <div className="bg-zinc-800 max-w-md w-full p-8 rounded-md shadow-lg mx-auto mt-12">
      <h2 className="text-2xl font-semibold text-white text-center mb-6">
        {params.id ? "Editar Tarea" : "Crear Nueva Tarea"}
      </h2>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="text-white font-medium">Título</label>
          <input
            id="title"
            type="text"
            placeholder="Escribe el título de la tarea"
            {...register("title")}
            autoFocus
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
            style={{ wordWrap: 'break-word', maxWidth: '100%' }} 
          />
        </div>

        <div>
          <label htmlFor="description" className="text-white font-medium">Descripción</label>
          <textarea
            id="description"
            rows="4"
            placeholder="Escribe una descripción para la tarea"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg resize-y" // Habilitar el ajuste vertical
            style={{ maxHeight: '200px', overflowY: 'auto' }}
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button 
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export default TasksFormPage;
