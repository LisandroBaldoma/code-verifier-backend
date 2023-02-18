# code-verifier-backend
Node Express project - backend

# Dependencias
    "@types/express": "^4.17.17",
    Express.js o simplemente Express, es un entorno de trabajo para aplicaciones web para el programario Node.js, de código abierto y con licencia MIT. Se utiliza para desarrollar aplicaciones web y APIs.
    
    "concurrently": "^7.6.0",
    Run multiple commands concurrently. Like npm run watch-js & npm run watch-less but better.
    
    "eslint": "^8.34.0",
     ESLint es una herramienta de análisis de código estático para identificar patrones problemáticos que se encuentran en el código JavaScript.
    
    "jest": "^29.4.2",
    Jest es un marco de prueba de JavaScript 
    
    "nodemon": "^2.0.20",  
     Nodemon es un desarrollo programa de utilidad que puede monitorear cualquier cambio en su fuente de directorio y reiniciar automáticamente su servidor o aplicaciones.
    
    "typescript": "^4.9.5",
    TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases
    
    "webpack": "^5.75.0",
    Webpack es un paquete de módulos gratuito y de código abierto para JavaScript. Está hecho principalmente para JavaScript, pero puede transformar recursos frontales como HTML, CSS e imágenes si se incluyen los cargadores correspondientes


## Scripts
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"",
    "test": "jest",
    "serve:coverage": "npm run test && cd coverage/lcov-report && npx serve"


## Variables de entorno
PORT: 8000 
Puerto en el que se levantara el servidor creado.

