# hackathon-unac-frontend

Bienvenid@, este es el proyecto frontend donde está que es un cliente web desarrollado en React en javascript, el cual  consume la API Rest Full de la Hakathon en la Corporación Universitaria Adventista - UNAC

## Información relevante
Este es es un cliente web desarrollado en React y javascript, el cual  consume la API Rest Full de la Hakathon en la Corporación Universitaria Adventista - UNAC.

### Especicifaciones de las librerías:
* Javascript: Como lenguaje de programación preferido para el desarrollo web.
* React: Como librería potente para renderizar html en el navegador.
* Redux: Como administrador del estado/información en la plataforma.
* Jest: Como libraría para testing.
* React testing Library: Como conjunto de librarías para testing en general.

### Metodología de trabajo
Se trabaja medianta el modelo de metodología Agil Scrum

Roles:

* Product Owner: Jesiel Palacios.

* Scrum Master: Jesiel Palacios.

* Equipo de desarrollo: Jesiel Palacios, Juan Cabana.

## Descargar el repositorio
A continuación los pasos para la instalación de las dependencias con `git`

* Para descargar el repositorio en una carpeta con el mismo nombre del repositorio

```markdown
git clone https://github.com/JesielPalacios/hackathon-unac-frontend
```

* Para descargar el repositorio en una carpeta actual

```markdown
git clone https://github.com/JesielPalacios/hackathon-unac-frontend .
```

* Para descargar una rama específica del repositorio

```markdown
git clone https://github.com/JesielPalacios/hackathon-unac-frontend -b <nombredeLaRama>
```

* Para descargar una rama específica del repositorio en una carpeta actual

```markdown
git clone https://github.com/JesielPalacios/hackathon-unac-frontend -b <nombredeLaRama> .
```


## Instalación de dependencias
* Para instalar todas las dependencias de nuestro proyecto debemos  ejecutar el siguiente comando: `npm i`

```markdown
npm i
```

ó también puede utiliza el comando referente:

```markdown
npm install
```

Y con esto ya habrás instalado todas las dependencias de nuetro proyecto y estarás listo para empeazar  ausarlo o modificarlo.

* Para instalar una nueva dependencia: `npm i <nombreDeLaDependencia>`

```markdown
npm i <nombreDeLaDependencia>
```

ó también puede utiliza el comando referente:

```markdown
npm install <nombreDeLaDependencia>
```

* Para instalar una nueva dependencia con una versión en específico: `npm i <nombreDeLaDependencia>@versión`

```markdown
npm i <nombreDeLaDependencia>@versión
```

ó también puede utiliza el comando referente:

```markdown
npm install <nombreDeLaDependencia>@versión
```



## Iniciar el servidor
* Para iniciar el servidor en modo de desarrollo se hace con el comando: `npm run dev`, por defecto el puerto de desarrollo es `3000` pero también se le puede pasar la bandera `--port=<númeroDePuertoDeseado>` en la que se puede configurar el puerto especifico indicando el número deseado:

```markdown
npm run dev
```

Agregando una variable de entorno (también puede agregar una variable de entorno en el archivo `.env` sin necesidad de pasarla a cada rato por la terminal o la consola)

```markdown
npm run dev --port=<númeroDePuertoDeseado
```

* Para iniciar el servidor en modo de producción se hace con el comando: `npm start`

```markdown
npm start
```

ó también puede utiliza el comando referente:

```markdown
npm run start
```



## Correr pruebas
* Para correr las diferentes pruebas del proyecto: `npm run tests`

```markdown
npm run tests
```



## Contacto
Esto ha sido todo por ahora, muchas gracias por tu interés en este proyecto, si necesitas alguna información adicional, soporte, reporte de errores, pull recuests, donarme un cafesito puedes contactarme al correo: jesielvirtualsa@gmail.com


### Arquitectura
El mdelo de la arquitectura es mediante microservicios, mediante un patrón MVC (Modelo Vista Controlador), en donde la vista está hecha por React en un proyecto como servicio separado. Así mismo como la base de datos que también se encuentra en un dominio y servidor por separado.

Diagrama ER:
* ![diagrama e-r](https://user-images.githubusercontent.com/50146090/185843082-feae9def-b572-45dd-9dad-833df3bccf34.png)

* Vista física:
![image](https://user-images.githubusercontent.com/50146090/185843767-0efcf1fc-3cca-4099-b928-e50a3f56ce6c.png)
* ![asascasc](https://user-images.githubusercontent.com/50146090/185843127-65c5ee23-875f-47f3-8704-b15c2220c7ce.png)

* Vista de desarrollo

Las tecnologías a utilizar en el proyecto son las correspondientes al Stack MERN, interfaz de programación de aplicaciones API REST FULL, servicios de plataforma en la nube de: Heroku para el hosting de un servidor por aplicación del backend y el frontend y MongoDB Atlas el servicio de alojamiento en la nube del servidor de la base de datos MongoDB.
Stack MERN, es decir, MongoDB como gestor de la base de datos, Express.js como Framework para el lenguaje de la aplicación backend. La librería potente de React.js para la renderización en el lado del frontetnd y Node.js como entorno en tiempo de ejecución multiplataforma para el desarrollo de la aplicación backend.

* ![alto nivel](https://user-images.githubusercontent.com/50146090/185843131-9b81166a-8fa8-4065-85f0-93fbd4b08c62.png)

* Vista de procesos
 
Seguridad: Se manejará buen nivel de seguridad en la aplicación, se usará un sistema de autenticación con JWT y se manejaran niveles de acceso y roles a las diferentes páginas de la aplicación, que en caso de que un usuario quiera acceder a la API en endpoints no correspondientes, no le será posible a menos de que cuente con los permisos requeridos, los usuarios, los empleados contarán con un nickname y un password, el nickname será único.
Integridad: Se manejará una integración de alguna forma con el servidor de la universidad y/o de alguna manera con la base de datos para obtener la información de los estudiantes y así poder facilitar el proceso de adquisición de la información y seguimiento de la misma.
Modificabilidad: El código se encontrará bien estructurado y documentado, de tal manera que cualquier otro programador que entre a trabajar con la aplicación tenga facilidad al realizar cambios al sistema.
Portabilidad: La aplicación inicialmente será una aplicación web, pero se podrá abrir en dispositivos móviles, por medio del uso del sistema de diseño web responsive, y progresive web apps, de esta manera los usuarios podrán abrir la aplicación web en sus dispositivos móviles.
Disponibilidad: El sistema responde de manera satisfactoria a la concurrencia de usuarios en los diferentes endpoints de la API y la aplicación web frontend. 

* Diagrama de secuencia:
![image](https://user-images.githubusercontent.com/50146090/185843468-eed1a888-c6a0-4a27-8ebf-a0baf9c1381f.png)


* Diagrama de comunicación:
![image](https://user-images.githubusercontent.com/50146090/185843476-f187b723-1cf0-4fd9-9d2d-8e2b11cd647a.png)

* Info sobre arquitectura:
Arquitectura por capas MVC (Modelo, Vista, Controlador): El patrón MVC fue una de las primeras ideas en el campo de las interfaces gráficas de usuario y uno de los primeros trabajos en describir e implementar aplicaciones software en términos de sus diferentes funciones. 

![image](https://user-images.githubusercontent.com/50146090/185843663-1ef58295-5249-4574-bb49-21f6497ce83a.png)

* Modelo: El modelo se llevará a cabo en la base de datos indicado desde la capa de modelo de usuarios, roles y solicitudes.
* Vista: La vista se administra desde el framework React en la App del front. La aplicación backend no tendrá vistas como tal, este se encargará de definir los modelos de la base de datos, controladores y rutas por donde será consumida la misma.
* Controlador: Este se encargará de tratar las respectivas peticiones y respuestas de la API, tanto como del módulo de niveles de autenticación, encriptación y seguridad de la API.

![image](https://user-images.githubusercontent.com/50146090/185843714-086bc25f-7a89-485f-a513-d3f0b733877f.png)

### Escenarios

* Usabilidad
![image](https://user-images.githubusercontent.com/50146090/185843891-6213fae7-9abd-471f-ac28-7465541de2b9.png)

![image](https://user-images.githubusercontent.com/50146090/185843943-32b4a7b8-0179-4f6c-8e2f-be8d73bbad3a.png)

* Seguridad:
![image](https://user-images.githubusercontent.com/50146090/185843980-335daa99-bd83-4ac0-872c-7610cff19613.png)

* Modificabilidad:
![image](https://user-images.githubusercontent.com/50146090/185844042-87f8d655-7a90-4760-954c-74a8ad0b1029.png)

![image](https://user-images.githubusercontent.com/50146090/185844065-84b901ff-f8b0-4458-9d26-1ce2b1da1c64.png)

* Portabilidad:
![image](https://user-images.githubusercontent.com/50146090/185844091-e9659481-1320-4b0f-924f-cd79378357ca.png)

![image](https://user-images.githubusercontent.com/50146090/185844111-ddb4d886-fe16-4e5d-a084-91d98485ffa2.png)
