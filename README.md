# Aplicación Pokemon 

Este es un proyecto construido con React y Vite que utiliza Firebase para gestionar el registro, inicio y cierre de sesión de usuarios. La aplicación permite visualizar datos de la API de Pokémon, realizar búsquedas, guardar un historial de búsquedas y ver información detallada de cada Pokémon.

## Tecnologías Utilizadas

- **React**: Framework de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción que mejora la velocidad de inicio y los tiempos de recarga en desarrollo.
- **Firebase**: Plataforma de desarrollo de aplicaciones web y móviles de Google que proporciona herramientas para el seguimiento de analytics, reporte de errores, machine learning, autenticación de usuarios, y base de datos en tiempo real.

## Configuración Inicial

Para ejecutar el proyecto correctamente, es necesario realizar las siguientes instalaciones y configuraciones:

1. **Clonar el repositorio**:  
```bash 
git clone URL_DEL_REPOSITORIO  
cd NOMBRE_DEL_DIRECTORIO
```

2. **Instalar dependencias**:
```bash   
npm install
```

3. **Instalar Firebase**: 
```bash 
npm install firebase
```

4. **Configurar Firebase**:  
Las credenciales de Firebase necesarias se encuentran en el archivo credenciales.js dentro del proyecto.

5. **Instalar React Router para manejo de rutas**: 
```bash
npm install react-router-dom@6
```

6. **Instalar UI Ball Loaders para animaciones de carga**:  
```bash
npm install @uiball/loaders
```

## Uso de la API de Pokémon
Este proyecto utiliza la PokeAPI para obtener datos sobre Pokémon. No se requiere configuración adicional para utilizar esta API.

## Ejecutar el Proyecto
```bash
npm run dev
```
El proyecto se ejecutará en el localhost:3000