import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isSubmittingState, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks"); // Redirigir después de autenticarse
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);
    await signup(data);
    setIsSubmitting(false);
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {/* Mostrar los errores de registro */}
        {registerErrors && registerErrors.length > 0 && (
          <div className="bg-red-500 p-2 mb-4">
            {registerErrors.map((error, index) => (
              <div key={index}>{error}</div> // Mapeamos los errores para mostrarlos
            ))}
          </div>
        )}

        <h1 className="text-2xl font-bold flex justify-center mb-6">Registrar</h1>

        <form onSubmit={onSubmit}>
          {/* Campo de nombre de usuario */}
          <input
            type="text"
            {...register("username", { required: "El nombre de usuario es requerido" })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Nombre de Usuario"
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}

          {/* Campo de email */}
          <input
            type="email"
            {...register("email", {
              required: "El email es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Correo electrónico inválido",
              },
            })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Ingrese su E-mail"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          {/* Campo de contraseña */}
          <input
            type="password"
            {...register("password", {
              required: "La contraseña es requerida",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Ingrese su contraseña"
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          {/* Botón de registro */}
          <button
            type="submit"
            disabled={isSubmitting || isSubmittingState}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
          >
            {isSubmitting || isSubmittingState ? "Registrando..." : "Registrar"}
          </button>
        </form>

        {/* Enlace a login */}
        <p className="flex mt-4 gap-x-2 justify-between text-slate-300">
          ¿Ya tienes una cuenta?
          <Link
            className="text-blue-500 hover:text-blue-700 font-semibold"
            to="/login"
          >
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
