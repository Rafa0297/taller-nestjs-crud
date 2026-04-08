# README.md

<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  Taller de NestJS: Creación de un CRUD de tareas personalizado
</p>

---

## Descripción

Este proyecto es un taller básico de **NestJS** para aprender a crear un **CRUD de tareas**.
Aprenderás a manejar rutas, controladores, servicios y DTOs, y a estructurar un proyecto backend con TypeScript de manera sencilla y clara.

---

## Requisitos

Antes de empezar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada >= 18)
- npm (viene con Node.js)
- Git
- NestJS CLI:

```bash
npm install -g @nestjs/cli
```

---

## Clonar el proyecto

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/mi-repo.git
cd mi-repo
```

---

## Instalación de dependencias

Instala todas las dependencias necesarias:

```bash
npm install
```

---

## Ejecutar el proyecto

Puedes correr el proyecto en distintos modos:

```bash
# Modo desarrollo (con hot reload)
npm run start:dev

# Modo producción
npm run start:prod
```

El backend quedará corriendo generalmente en `http://localhost:3000`.

---

## Estructura del CRUD de tareas

1. **Controladores** (`tasks.controller.ts`): Reciben las solicitudes HTTP y llaman a los servicios.
2. **Servicios** (`tasks.service.ts`): Contienen la lógica de negocio y manipulan los datos de tareas.
3. **DTOs** (`create-task.dto.ts`, `update-task.dto.ts`): Definen cómo debe ser la estructura de los datos que entran y salen.
4. **Entidades/Modelos**: Representan las tareas (en este proyecto básico pueden ser objetos en memoria o JSON).

---

## Crear y probar endpoints

El CRUD incluye:

- **Crear tarea:** `POST /tasks`
- **Obtener todas las tareas:** `GET /tasks`
- **Obtener tarea por ID:** `GET /tasks/:id`
- **Actualizar tarea:** `PATCH /tasks/:id`
- **Eliminar tarea:** `DELETE /tasks/:id`

Puedes probarlos usando [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/).

---

## Tests

Para ejecutar los tests:

```bash
# Tests unitarios
npm run test

# Tests de integración (e2e)
npm run test:e2e

# Cobertura de tests
npm run test:cov
```

---

## Recursos

- [Documentación oficial de NestJS](https://docs.nestjs.com/)
- [Tutoriales en vídeo de NestJS](https://courses.nestjs.com/)
- [Discord oficial para soporte](https://discord.gg/rafa_89605)

---

## Licencia

Este proyecto está bajo licencia **MIT**.
