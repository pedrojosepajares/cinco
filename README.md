# Cinco
Juego de cartas cuyo objetivo es amenizar fiestas y eventos.

## Prerrequisitos e instalación
El sistema puede correr en cualquier distribución Linux. Las siguientes instrucciones se corresponden con la preparación para arrancar la aplicación en un sistema Ubuntu.

1. Es necesario tener instalado y escuchando peticiones el servidor [cinco-server](https://github.com/pedrojosepajares/cinco-server)

2. Instalación de [NodeJS](https://nodejs.org/en/)
	```sh
	apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_6.x | bash -
    apt-get install -y nodejs
	```
3. Instalación del framework [Angular2] (https://angular.io/) y  [Angular CLI](https://cli.angular.io/)
	```sh
    npm install -g @angular/cli@latest
	```
4. Instalar el resto de paquetes necesarios en el directorio de la aplicación
	```sh
    cd cinco
    npm install
	```

## Ejecutando la aplicación
Sólo queda ejecutar el cliente desde su directorio
	```sh
    ng serve
	```

## Tecnologías
* [TypeScript](https://www.typescriptlang.org/)
* [NodeJS](https://nodejs.org/en/)
* [Angular2](https://angular.io/)
* [Angular CLI](https://cli.angular.io/)

## Autores
* Pedro José Pajares Ramírez