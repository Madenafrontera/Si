function HomePage() {
  return (
    <div className="bg-zinc-800 min-h-screen flex flex-col justify-center items-center p-6">
      <div className="text-center max-w-2xl bg-zinc-700 p-10 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-white mb-4">
          ¡Bienvenidos a Mi App de Tareas!
        </h1>
        <p className="text-xl text-slate-300 mb-6">
          Esta aplicación te permite gestionar tus tareas de manera sencilla y eficiente. Añade, edita y elimina tareas, y mantén tu vida organizada.
        </p>
        <p className="text-lg text-slate-400 mb-8">
          ¿Qué puedes hacer aquí?
        </p>
        <ul className="list-disc text-left text-slate-300">
          <li className="mb-2">Crear nuevas tareas con fechas.</li>
          <li className="mb-2">Editar tareas existentes para actualizarlas.</li>
          <li className="mb-2">Eliminar tareas completadas o que ya no necesitas.</li>
        </ul>
        <p className="text-slate-400 mt-4">
          Comienza a organizarte hoy mismo y mejora tu productividad.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
