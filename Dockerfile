# Etapa 1: Construye la aplicación React con Vite
FROM node:18-alpine AS build

WORKDIR /app

# Copia los archivos de configuración y el archivo package.json
COPY package*.json ./
COPY vite.config.ts ./

# Instala las dependencias
RUN npm install

# Copia el código fuente de la aplicación
COPY . .

# Construye la aplicación React
RUN npm run build

# Etapa 2: Configura Nginx y copia los archivos de construcción
FROM nginx:latest

# Copia la configuración de Nginx personalizada
COPY nginx.conf /etc/nginx/nginx.conf

# Copia los archivos de construcción de la aplicación React desde la etapa 1
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80 para Nginx
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
