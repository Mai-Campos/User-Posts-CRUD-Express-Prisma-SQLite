1️⃣ README.md para tu proyecto
# API REST con Express + Prisma + SQLite

Esta es una API REST desarrollada con **Node.js**, **Express**, **Prisma ORM** y **SQLite**, siguiendo buenas prácticas y estructura modular.

## 🛠️ Tecnologías usadas
- Node.js
- Express
- Prisma ORM
- SQLite
- Nodemon (para desarrollo)

## 📦 Instalación
### 1. Clona el repositorio:
```bash
git clone <URL_DEL_REPO>
cd <NOMBRE_DEL_PROYECTO>
```

### 2. Instala dependencias:
`npm install`

### 3. Configura variables de entorno en `.env`:
`DATABASE_URL="file:./dev.db"`

### 4. Aplica migraciones de Prisma:
`npx prisma migrate dev --name init`

### 5. (Opcional) Ejecuta seeds para poblar la base de datos:
`node prisma/seed.js` o `npm run seeds`

### 6. Inicia el servidor en modo desarrollo:
`npm start`

### 7. 📁 Estructura del proyecto

```CSS
 src/
 ├─ routes/       # Endpoints de la API (users.route.js, posts.route.js)
 ├─ middleware/   # Middlewares (error handling)
 ├─ congif.js     # Configuraciones(PORT)
 └─ index.js      # Servidor Express principal

prisma/
 └─ schema.prisma # Modelos y configuración de la base de datos

.env              # Variables de entorno (no subir)
dev.db            # Base de datos SQLite local (no subir)
```

## 📌 Endpoints principales
- GET /users → Listar usuarios

- POST /users → Crear usuario

- GET /users/:id → Obtener usuario por ID

- PUT /users/:id → Actualizar usuario

- DELETE /users/:id → Eliminar usuario

- GET /posts → Listar posts

- POST /posts → Crear post

- GET /posts/:authorName → Listar posts de un autor

- PUT /posts/:id → Actualizar posts

- DELETE /posts/:id → Eliminar posts
