# Libreta de Direcciones

Este proyecto es una aplicación de libreta de direcciones que permite gestionar contactos, incluyendo teléfonos, correos electrónicos y direcciones. La aplicación está compuesta por un backend desarrollado en Laravel y un frontend desarrollado en Angular.

## Instalación

### Backend (Laravel)

1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/tu_usuario/libreta-direcciones.git
2. **Instalar Dependencias para el proyecto de Laravel**
    ```bash
    composer install
3. **Configurar archivo .env**

    Copia el archivo de ejemplo y configúralo con tus credenciales de base de datos el nombre de la base de datos es contactos:

    ```bash
    cp .env.example .env
4. **Generar la Clave de Aplicación**

    ```bash
    php artisan key:generate
5. **Migrar la Base de Datos**
    Asegúrate de que tu servidor MySQL esté en funcionamiento y ejecuta las migraciones:

    ```bash
    php artisan migrate

5. **Ejecutar seeder para la base de datos**

    ```bash
    php artisan db:seed --class=ContactosSeeder
### Frontend (Angular)
1. **Instalar dependencias**

    ```bash
    npm install
2. **Ejecutar la aplicacion**
    ```bash
    ng serve

###  Uso

Navegación en la Aplicación

La aplicación permite gestionar contactos mediante los siguientes componentes:

Agregar Contacto: Para añadir nuevos contactos.

Editar Contacto: Para editar la información de un contacto existente.

Detalles del Contacto: Para ver detalles completos de un contacto.

### Funcionalidades

Crear Contacto: Completa el formulario para agregar un nuevo contacto.

Actualizar Contacto: Edita un contacto existente y guarda los cambios.

Eliminar Contacto: Elimina un contacto de la base de datos.
