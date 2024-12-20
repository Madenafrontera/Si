import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between items-center py-5 px-10 rounded-lg shadow-md">
      <Link to="/" className="text-3xl font-bold text-white hover:text-indigo-500 transition-colors duration-300">
        Menu
      </Link>
      <ul className="flex gap-x-6 items-center">
        {isAuthenticated ? (
          <>
            <li className="text-white">
              Bienvenido, {user.username}
            </li>
            <li>
              <Link 
                to="/add-task" 
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Añadir una nueva tarea
              </Link>
            </li>
            <li>
              <Link 
                to="/" 
                onClick={logout} 
                className="text-red-600 hover:text-red-700 font-semibold transition-colors duration-300"
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link 
                to="/login" 
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Iniciar Sesión
              </Link>
            </li>
            <li>
              <Link 
                to="/register" 
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Registro
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
