3/4 de Cielito Lindo/
│── frontend/              # Código del frontend (Next.js)
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Páginas de la tienda, cuenta, etc.
│   │   ├── styles/        # Estilos globales
│   │   ├── hooks/         # Hooks personalizados
│   │   ├── utils/         # Funciones auxiliares
│   │   ├── context/       # Context API o Zustand para manejar estado global
│   ├── public/            # Archivos estáticos (imágenes, logos)
│   ├── next.config.js     # Configuración de Next.js
│   ├── tsconfig.json      # Configuración de TypeScript
│   ├── package.json       # Dependencias del frontend
│   ├── .env.local         # Variables de entorno
│── backend/               # Código del backend (NestJS)
│   ├── src/
│   │   ├── modules/       # Módulos de la API (usuarios, productos, pedidos)
│   │   ├── controllers/   # Controladores de endpoints
│   │   ├── services/      # Lógica de negocio
│   │   ├── entities/      # Modelos de base de datos con TypeORM
│   │   ├── middleware/    # Seguridad, autenticación, logs, etc.
│   │   ├── config/        # Configuración global del backend
│   ├── .env               # Variables de entorno
│   ├── tsconfig.json      # Configuración de TypeScript
│   ├── package.json       # Dependencias del backend
│   ├── docker-compose.yml # Configuración de Docker para base de datos
│── database/              # Configuración de PostgreSQL
│── tests/                 # Pruebas unitarias y de integración
│── docs/                  # Documentación del proyecto
│── .github/workflows/     # Configuración de CI/CD con GitHub Actions
│── .gitignore             # Archivos a ignorar en Git
│── README.md              # Descripción del proyecto
