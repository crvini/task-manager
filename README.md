# 📝 Aplicación de Gestión de Tareas (Angular + .NET)

Este proyecto es una aplicación web para la gestión de tareas, desarrollada con **Angular** en el frontend y **.NET** en el backend.

## 🚀 Características
- 📋 Listado de tareas
- ➕ Agregar una nueva tarea
- ✅ Marcar tarea como completada
- ❌ Eliminar tarea
- 🔎 Filtrar tareas por estado (Todas, Pendientes, Completadas)

## 🏗️ Tecnologías Utilizadas
### **Frontend:**
- Angular (Versión más reciente)
- PrimeNG (Componentes UI)
- TypeScript
- Bootstrap/TailwindCSS

### **Backend:**
- .NET Core Web API
- Entity Framework Core (Base de datos en memoria)
- C#

---
## 📦 Instalación y Configuración

### **1️⃣ Clonar el repositorio**
```sh
git clone https://github.com/crvini/task-manager.git
cd task-manager
```

### **2️⃣ Instalación del Frontend**
```sh
cd TASK-FRONTEND
npm install # O yarn install
```

### **3️⃣ Instalación del Backend**
```sh
cd TASK-BACKEND
```
Si usas .NET CLI:
```sh
dotnet restore
```

---
## ▶️ Ejecución

### **1️⃣ Ejecutar el Backend**
```sh
dotnet run
```
El servidor por defecto se ejecutará en `http://localhost:5000`

### **2️⃣ Ejecutar el Frontend**
```sh
cd TASK-FRONTEND
ng serve
```
Por defecto, la aplicación se abrirá en `http://localhost:4200`

---
## 📂 Estructura del Proyecto

```sh
TASK-FRONTEND/
│── src/
│   ├── app/
│   │   ├── core/ (Lógica de negocio y casos de uso)
│   │   ├── infrastructure/ (Servicios y repositorios)
│   │   ├── presentation/ (Componentes y pantallas UI)
│   ├── assets/
│   ├── environments/
│── angular.json
│── package.json
│── README.md


---
## 🌐 API Endpoints

### **Tareas** (`/api/tasks`)
| Método | Endpoint            | Descripción                 |
|--------|--------------------|-----------------------------|
| GET    | `/api/tasks`       | Obtener todas las tareas   |
| POST   | `/api/tasks`       | Crear una nueva tarea      |
| PUT    | `/api/tasks/{id}`  | Actualizar una tarea       |
| DELETE | `/api/tasks/{id}`  | Eliminar una tarea         |

---