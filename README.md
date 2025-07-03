# 🏆 Chapel Futbol - Frontend

**Sitio web del Centro Formativo de Alto Rendimiento Chapel Futbol**

Aplicación web moderna construida con Next.js 15, React 19 y TypeScript para gestionar perfiles de jugadores de fútbol.

## 🚀 Stack Tecnológico

- **Next.js 15.3.3** - Framework React con App Router
- **React 19.0.0** - Biblioteca de UI
- **TypeScript 5** - Tipado estático
- **Tailwind CSS 3.3.0** - Framework CSS utility-first
- **shadcn/ui** - Componentes de UI modernos
- **React Hook Form + Zod** - Formularios y validación
- **SWR** - Hooks para fetching de datos

## 🏗️ Estructura del Proyecto

```
frontend/
├── src/
│   ├── app/                    # App Router (Next.js 15)
│   │   ├── globals.css         # Estilos y variables CSS
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página de inicio
│   │   ├── login-chapel/       # Página de login
│   │   └── players/            # Gestión de jugadores
│   ├── components/             # Componentes reutilizables
│   │   ├── ui/                 # Componentes shadcn/ui
│   │   └── layout/             # Header, Footer
│   ├── hooks/                  # Hooks personalizados
│   └── lib/                    # Utilidades y API
├── public/                     # Archivos estáticos
└── tailwind.config.js          # Configuración Tailwind
```

## 🎨 Sistema de Diseño

- **Paleta Institucional**: Púrpura (`#4C3180`) y Dorado (`#BD852B`)
- **Tema Dark**: Fondo oscuro profesional
- **Componentes**: shadcn/ui con Radix UI para accesibilidad
- **Animaciones**: Tailwind CSS Animate

## 🔐 Autenticación

- JWT con cookies HTTP-only
- Hooks personalizados para gestión de estado
- Redirección automática basada en autenticación
- Protección de rutas administrativas

## 📱 Funcionalidades Principales

### Página de Inicio
- Hero Section con video de fondo
- About Us - Información institucional
- Conexiones - Logos de clubes asociados

### Gestión de Jugadores
- Lista con búsqueda y filtros
- Perfil detallado con estadísticas
- Formularios CRUD para administradores
- Skeleton loading para mejor UX

## 🚀 Instalación Rápida

### Prerrequisitos
- Node.js 18+

### Pasos

1. **Instalar dependencias**
```bash
cd frontend
npm install
```

2. **Configurar variables de entorno**
```bash
# Crear .env.local
NEXT_PUBLIC_API_URL=http://localhost:3001
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Abrir en navegador**
```
http://localhost:3000
```

## 📦 Scripts Disponibles

```bash
npm run dev          # Desarrollo con Turbopack
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
```

## 🔧 Configuración

### Variables de Entorno
- `NEXT_PUBLIC_API_URL` - URL del backend API

### Características
- **Turbopack** para desarrollo ultra-rápido
- **TypeScript** estricto con path mapping
- **Tailwind CSS** con variables personalizadas
- **ESLint** para calidad de código

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático

### Otros
- **Netlify**: Compatible con Next.js
- **Railway**: Deploy full-stack
- **Docker**: Containerización disponible

## 📊 Calidad

- **Lighthouse Score**: 95+ en todas las categorías
- **Core Web Vitals**: Optimizados
- **SEO**: Meta tags y estructura semántica
- **Accesibilidad**: WCAG 2.1 AA compliant

---

**Desarrollado con ❤️ para Chapel Futbol**
