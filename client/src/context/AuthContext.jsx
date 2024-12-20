import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from 'js-cookie'


export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("El useAuth debe estar adentro de un provider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors,] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticated(true);
        setErrors({}); // Limpiar los errores si el registro es exitoso
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data); // Aquí se setean los errores recibidos del backend
      } else {
        setErrors({ general: "Ocurrió un error en el servidor. Intenta más tarde." });
      }
    }
  };

  const signIn = async (data) => {
    try {
      const res = await loginRequest(data);
      console.log(res);
      setIsAuthenticated(true);   
      setUser(res.data)    
      if (res.status === 200) {
        // Si el login es exitoso, limpiamos los errores y realizamos otras acciones (ejemplo: guardar usuario)
        setSignInErrors([]);
      } else {
        // Si el login falla pero no hay un error grave (status distinto de 200), mostramos un error específico
        setSignInErrors([res.data.error || "Error desconocido"]);
      }
    } catch (error) {
        if (Array.isArray(error.response.data)) {
          return setErrors(error.response.data); // Aquí se setean los errores recibidos del backend
        } else {
          setErrors([error.response.data.message]);
        }
      }
    };
  
  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  }

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
        }
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false)
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false)
      }
    };
    checkLogin();
  }, []);
 


  return (
    <AuthContext.Provider value={{ signup, signIn, logout, loading, user, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
