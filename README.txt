Mi App de Tareas
Esta es una aplicación web que utiliza varias tecnologías modernas para la gestión de tareas con autenticación de usuarios mediante JWT. La aplicación consta de un backend en Node.js/Express y un frontend en React con una base de datos MongoDB. A continuación, se explica cómo iniciar ambos servidores (frontend y backend) y cómo realizar las pruebas utilizando Postman.

Tecnologías utilizadas
Frontend:

React: Librería para construir interfaces de usuario.
React Router: Maneja la navegación entre vistas en el frontend.
React Hook Form: Facilita la gestión de formularios en React.
Axios: Para realizar peticiones HTTP al backend.
Tailwind CSS: Framework de utilidades para construir interfaces rápidamente.
Vite: Herramienta de construcción rápida para React.
Backend:

Node.js & Express: Para crear el servidor backend.
MongoDB: Base de datos NoSQL para almacenar los datos de usuarios y tareas.
JWT (JSON Web Tokens): Para manejar la autenticación de usuarios.
bcrypt: Para encriptar las contraseñas de los usuarios.
Zod: Librería para validaciones de datos en el backend.
Morgan: Middleware para registrar las peticiones HTTP.
CORS: Middleware para habilitar el acceso entre el frontend y el backend en diferentes dominios.
js-cookie & cookie-parser: Para manejar las cookies de autenticación y validación de usuarios.
Iniciar la aplicación
1. Instalación
Para comenzar, clona el repositorio a tu máquina local:


Copiar código
git clone 
cd Si
2. Iniciar el Backend
Desde la carpeta principal del proyecto (donde se encuentra el archivo package.json del backend):

Instala las dependencias del backend:

Copiar código
npm install
Ejecuta el servidor backend:
bash
Copiar código
npm run dev
Esto iniciará el servidor en el puerto predeterminado (localhost:4000)

3. Iniciar el Frontend
Abre una segunda terminal y navega a la carpeta del frontend:

Copiar código
cd client
Instala las dependencias del frontend:

Copiar código
npm install

npm run dev
Esto iniciará el frontend en el puerto localhost:5173. Ahora, puedes acceder a la aplicación en tu navegador en esa dirección.

4. Pruebas con Postman
A continuación, se detallan las rutas que puedes probar utilizando Postman para realizar operaciones sobre usuarios y tareas.

Rutas de Usuarios
POST /register:
Registra un nuevo usuario.
Cuerpo de la solicitud:

json
Copiar código
{
  "username": "nuevoUsuario",
  "email": "usuario@dominio.com",
  "password": "contraseña123"
}
POST /login:
Inicia sesión con las credenciales del usuario.
Cuerpo de la solicitud:

json
Copiar código
{
  "email": "usuario@dominio.com",
  "password": "contraseña123"
}
POST /logout:
Cierra sesión del usuario actual.

GET /verify:
Verifica si el token de autenticación es válido.
Encabezados:

json
Copiar código
{
  "Authorization": "Bearer <tu_token_jwt>"
}
GET /profile:
Obtiene el perfil del usuario autenticado.
Encabezados:

json
Copiar código
{
  "Authorization": "Bearer <tu_token_jwt>"
}
Rutas de Tareas
GET /tasks:
Obtiene todas las tareas del usuario autenticado.
Encabezados:

json
Copiar código
{
  "Authorization": "Bearer <tu_token_jwt>"
}
POST /tasks:
Crea una nueva tarea.
Cuerpo de la solicitud:

json
Copiar código
{
  "title": "Tarea de ejemplo",
  "description": "Descripción de la tarea"
}
GET /tasks/:id:
Obtiene una tarea específica por su ID.
Encabezados:

json
Copiar código
{
  "Authorization": "Bearer <tu_token_jwt>"
}
DELETE /tasks/:id:
Elimina una tarea por su ID.
Encabezados:

json
Copiar código
{
  "Authorization": "Bearer <tu_token_jwt>"
}
PUT /tasks/:id:
Actualiza una tarea existente.
Cuerpo de la solicitud:

json
Copiar código
{
  "title": "Tarea actualizada",
  "description": "Descripción de la tarea actualizada"
}
Notas Adicionales
MongoDB: Asegúrate de tener una base de datos MongoDB en funcionamiento. Si no tienes MongoDB instalado, puedes usar MongoDB Atlas (un servicio de MongoDB en la nube). En ese caso, configura la URL de conexión en el archivo .env del backend o crea uno.

JWT y Cookies: El backend usa JWT para la autenticación. Cuando un usuario inicia sesión correctamente, el token JWT se guarda en una cookie. Cada vez que el frontend hace una solicitud a una ruta protegida, el token se envía en las cookies y es verificado por el backend para autenticar la solicitud.

CORS: Se configura CORS en el backend para permitir que el frontend (en un puerto diferente) haga peticiones al servidor backend sin restricciones.

