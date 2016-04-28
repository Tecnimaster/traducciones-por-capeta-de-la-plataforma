# traducciones-por-capeta-de-la-plataforma
Se traducirá los módulos de la plataforma
Catarse
círculo CI Estado de la cobertura código climático

La primera plataforma de crowdfunding de Brasil

Una plataforma de crowdfunding de código abierto para proyectos creativos

Bienvenido al repositorio de código fuente de Catarse. Nuestro objetivo con la apertura del código fuente es estimular la creación de una comunidad de desarrolladores en torno a una plataforma de crowdfunding de alta calidad.

Se puede ver el software en acción en http://catarse.me . El repositorio oficial es https://github.com/catarse/catarse

Empezando

dependencias

Para ejecutar este proyecto es necesario tener:

2.2.3 rubí

Rails 4.1

postgREST 0,3

PostgreSQL 9.4

OSX - Postgres.app
Linux - $ sudo apt-get install postgresql
Ventanas - PostgreSQL para Windows
IMPORTANTE : Asegúrese de que tiene postgresql-contrib ( Adicional Módulos ) instalado en su sistema.

Configuración del proyecto

Clonar el proyecto

$ Git clone https://github.com/catarse/catarse.git
Introduzca carpeta del proyecto

$ Cd catarse
Crear el database.yml

$ Cp config / config database.sample.yml / database.yml
Debe hacer esto para configurar la base de datos local! Añadir su nombre de usuario y la contraseña de la base de datos (a menos que usted no tiene ninguna).

Instalar las gemas

$ Bundle install
Instalar las dependencias de front-end

$ Glorieta instalar
Requiere Bower , que requiere Node.js y su gestor de paquetes, la NGP . Siga las instrucciones en la página web bower.io.

Crear y sembrar la base de datos

$ Rake db: create db: migrate db: semillas
Configurar el servidor de la API

Proporcionamos autenticación a través de JWT ( JSON Web tokens ) y que puede ser configurado por CatarseSettings en ​​la consola carriles.

$ Consola carriles paquete exec
> CatarseSettings [: api_host] = "http: // localhost: 3004" URL del servidor # postgREST
> CatarseSettings [: jwt_secret] = "gZH75aKtMN3Yj0iPS4hcgUuTwjAzZr9C" # este símbolo es sólo un ejemplo válido
Si todo va bien, ahora puede ejecutar el proyecto!

La ejecución del proyecto

servidor de la API de gestión

Después de descargar PostgREST 0.3.x puede descomprimir y ejecutar el archivo ejecutable como abajo.

$ postgres ./postgrest: // postgrest @ localhost / catarse_development -a gZH75aKtMN3Yj0iPS4hcgUuTwjAzZr9C --jwt secreto anónimo -s 1 -p 3004
servidor de rieles Run

$ Servidor de rieles
Abra http: // localhost: 3000

traducciones

Esperamos apoyar una gran cantidad de idiomas en el futuro, por lo que estamos dispuestos a aceptar solicitudes de extracción con traducciones a otros idiomas.

Mucho que Daniel Walmsley, de ¡Gracias http://purpose.com , para el inicio de la internacionalización y comenzar la traducción en Inglés.

Las pasarelas de pago

Actualmente, apoyamos a pagarme a través de nuestros motores de pago. Los motores de pago son extensiones a Catarse que implementan una lógica específica pasarela de pago.

Si ha creado un motor de pago diferente a Catarse, por favor, póngase en contacto con nosotros para que podamos vincular su motor aquí. Si desea crear un motor de pago, por favor, únase a nuestra lista de correo en http://groups.google.com/group/catarse-dev

¿Cómo contribuir con código

Discutir sus planes en nuestra lista de correo ( http://groups.google.com/group/catarse-dev ).

Después de eso, simplemente bifurcar el proyecto, cambiar lo que quiere, y nos envía una solicitud de extracción.

Las mejores prácticas (o cómo llegar a su solicitud de extracción aceptó más rápido)

Siga esta guía de estilo: https://github.com/bbatsov/ruby-style-guide
Cree uno pruebas de aceptación para cada escenario de la función que está intentando llevar a cabo.
Crear pruebas de modelo y el controlador para mantener el 100% de cobertura de código en las partes nuevas que está escribiendo.
No dude en añadir características al código comprometido que carece de cobertura;)
Deje que nuestros ensayos sirven como una guía de estilo: tratamos de utilizar temas de especificaciones implícitas y evaluación perezosa siempre que podamos.
créditos

Autor: Daniel Weinmann

Colaboradores: Usted sabe quién eres;) La historia puede ayudar a cometer, pero la lista era cada vez más grande y sin sentido para mantener en el README.

Licencia

Copyright (C) 2016 Softa

Licenciado bajo la licencia MIT (ver archivo MIT-licencia)
