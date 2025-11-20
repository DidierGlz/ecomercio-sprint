# 🛍️ Proyecto E-commerce React – Metodología SCRUM  
**Autor:** Néstor Didier Lino González  
**Universidad de Guadalajara – Licenciatura en Desarrollo de Sistemas Web**

---

## Descripción general
Aplicación web de **comercio electrónico** desarrollada en **React** y gestionada bajo la **metodología ágil SCRUM**.  
El sistema permite navegar entre categorías de productos, visualizar detalles, gestionar un carrito de compras, simular pagos, administrar inventario y mostrar notificaciones visuales al usuario.

Cada iteración del proyecto (Sprint) entregó funcionalidades concretas y medibles conforme al **Product Backlog**.

---

## Objetivos del proyecto
- Aplicar la **metodología SCRUM** en un proyecto de desarrollo web.  
- Implementar una app modular con **React + Vite**.  
- Mantener control de avance mediante **Product Backlog**, **Sprint Backlog** y retrospectivas.  
- Entregar incrementos funcionales en cada Sprint con evidencia y documentación.

---

##  Funcionalidades principales

| Categoría | Descripción | Estado |
|----------|-------------|--------|
| 🗂️ Catálogo de productos | Navegación por categorías, filtros por precio y detalle de producto con imagen | ✅ |
| 🛒 Carrito de compras | Añadir productos, ver cantidades y total con persistencia en `localStorage` | ✅ |
| 💳 Checkout (pago simulado) | Formulario de pago, validación básica, registro de pedido e historial por usuario | ✅ |
| 👤 Cuenta de usuario | Registro/login (simulado) y listado de pedidos previos | ✅ |
| ⚙️ Inventario (Admin) | Alta, edición y eliminación de productos, con catálogo persistente | ✅ |
| 🔔 Notificaciones visuales | Barra de notificaciones global (banner) para mostrar mensajes de éxito/error/info | ✅ |
| 🎚️ Filtros | Filtrado por categoría y rango de precio en el catálogo | ✅ |

---

##  Sprint Schedule

| Sprint | Objetivo | Historias | Estado |
|--------|----------|-----------|--------|
| Sprint 1 | Navegación, detalle y carrito | US-1, US-2, US-3 | ✅ Completado |
| Sprint 2 | Cuenta, checkout y filtros | US-4, US-5, US-8 (parcial) | ✅ Completado |
| Sprint 3 | Inventario, notificaciones y cierre de filtros | US-6, US-7, US-8 | ✅ Completado |

---

##  Tecnologías utilizadas
- **React 18 + Vite**  
- **JavaScript (ES6)**  
- **HTML5 / CSS3**  
- **LocalStorage** para persistencia simple  
- **Git + GitHub** para control de versiones  
- **Trello/Jira (a nivel documental)** para gestión ágil

---

##  Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/DidierGlz/ecomercio-sprint.git

2. Entrar al directorio:

cd ecomercio-sprint


3. Instalar dependencias:

npm install


4. Ejecutar en modo desarrollo:

npm run dev


5. Abrir en el navegador:

La terminal mostrará algo como: http://localhost:5173/

Abrir esa URL en el navegador.

Para detener el servidor:

Ctrl + C

"Y" en la terminal.



**Avances por Sprint**

Sprint 1 – Fundamentos

- Estructura base de la app con React + Vite.

- Navegación por categorías.

- Detalle de producto con imagen, nombre y precio.

- Carrito con listado de productos y cálculo de total.

- Persistencia del carrito mediante localStorage.

Sprint 2 – Cuenta y Checkout

- Componente de autenticación (login/registro simulado).

- Persistencia de “usuario” en localStorage.

- Checkout con validaciones básicas.

- Registro de pedidos y visualización en la sección “Mi cuenta”.

- Filtros por categoría y rango de precio para el catálogo.

Sprint 3 – Inventario, Notificaciones y refinamiento

- Panel de Inventario (Admin):

- Alta, edición y eliminación de productos.

- Catálogo persistente combinando productos base con los agregados por admin.

- Sistema de notificaciones visuales:

- Barra global de notificaciones (NotificationBar) para mensajes de éxito, error o información.

- Integración con acciones clave (agregar al carrito, vaciar carrito, pago exitoso, errores de validación).

- Ajustes finales de filtros y detalles de interfaz para mejorar la experiencia de usuario.

Repositorio

GitHub:
https://github.com/DidierGlz/ecomercio-sprint

Notas finales

Este proyecto se desarrolló como parte de la Unidad 3 de Proyecto II, aplicando prácticas de SCRUM (backlog, sprints, retrospectivas) para entregar incrementos funcionales de forma iterativa.