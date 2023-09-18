# Fetch App in React
Este es un ejemplo de una aplicación que realiza una peticion a una API desarrollada en React. Puedes utilizarlo como un punto de partida para proyectos más complejos o como un ejercicio para aprender sobre React y Docker.

## Cómo Usar
Sigue estos pasos para construir y ejecutar la aplicación en un contenedor Docker:

### 1. Crear la Imagen
Ejecuta el siguiente comando para construir la imagen Docker:

<code>
docker build -t fetch-app-react .
</code>

Este comando construirá una imagen de Docker llamada "counter-app-react" utilizando el Dockerfile proporcionado.

### 2. Ejecutar la Aplicación
Una vez que la imagen esté construida, puedes ejecutar la aplicación en un contenedor Docker utilizando el siguiente comando:

<code>
docker run -p 80:80 fetch-app-react
</code>
Esto ejecutará la aplicación en un contenedor y mapeará el puerto 80 del contenedor al puerto 80 de tu máquina local. Puedes acceder a la aplicación en tu navegador web visitando http://localhost.

## Personalización
Si deseas personalizar esta aplicación o agregar nuevas características, puedes modificar el código fuente en el directorio src y luego volver a construir la imagen Docker utilizando el comando docker build.

## Contribuciones
Siéntete libre de abrir problemas (issues) y enviar solicitudes de extracción (pull requests) para mejorar esta aplicación. ¡Tus contribuciones son bienvenidas!