
# Información General

## Aplicación Objetivo
- Ghost v 5.47.1

## Funcionalidades Objetivas 

- Crear Post 

- Editar Post 

- Eliminar Post 

- Buscar Post

- Crear Tag 

- Editar Tag 

- Buscar Tags 

- Editar información de perfil

- Crear un nuevo miembro

- Editar un miembro

- Eliminar un miembro

- Crear una nueva pagina

- Editar una nueva pagina

- Editar la zona horaria de la pagina

- Editar el idioma de las publicaciones de la página.

- Activar o desactivar el modo oscuro

# Herramientas Para pruebas E2E

## Kraken 

Kraken es una herramienta de código abierto para realizar pruebas automáticas del tipo E2E con aplicaciones móviles para Android y aplicaciones WEB. Esta soporta escenarios donde es requerida la intercomunicación entre usuarios o dispositivos 

### Librerías utilizadas: 
- Node v16.13.0 
- **kraken-node v.1.0.24** 
- Cucumber v.7.2.1

 
### Preparación del ambiente para Kraken 

 1. Clonar el repositorio: <br> git clone https://github.com/Lrozoq/Propuesta-final-pruebas-automatizadas.git

2. Abrir la carpeta **vrt/kraken_tests/kraken_project** con el IDE de su gusto. Esta será nuestra carpeta raiz de ahora en adelante 

3. Ejecutar en la raíz del proyecto: <br> npm install kraken-node
4. En caso de tener problemas appium, instalarlo globalmente con el siguiente comando: <br> npm install -g appium

### Ejecución de pruebas 

1. Correr Ghost localmente en el puerto 2368 para la version v5.47.1
2. Correr Ghost localmente en el puerto 3001 para la version v3.42.0.

3. Crear una cuenta en la aplicación de ghost que se encuentra corriendo localmente en su maquina en: <br> http://localhost:2368/ghost/#/setup. <br> El email y password para la version v3.42.0 y v5.47.1 de Ghost seran las siguientes: <br> email: pruebas_automaticas@gmail.com <br> password: Uniandes2023

5. Cambiar la extensión del archivo el cual se desea probar a .feature y validar que sea el unico archivo con esa extensión en la carpeta **features**  

6. Ejecutar el escenario de prueba ejecutando el siguiente comando en **vrt/kraken_tests/kraken_project** (preferiblemente con git bash): <br> ./node_modules/kraken-node/bin/kraken-node run

7. Ir a la carpeta **reports** en la raíz del proyecto y revisar los resultados 

### Muy importante
- El usuario registrado en el paso 2 será con el que se realizaran todas las pruebas
- Las pruebas se deben ejecutar de forma secuencial es decir: Primero se ejecuta sc01-v5.47.1.feature, después sc02-v5.47.1.feature y así sucesivamente.
- Al momento de correr la pruebas con kraken utilizando el comando ./node_modules/kraken-node/bin/kraken-node run preferiblemente utilizar git bash 

### Formato del nombre para los escenarios de pruebas presentes **features**
La convención de nombres para los escenarios de pruebas en el proyecto de kraken es el siguiente: <br>
codigoDelEscenario-VersionDelAplicativo <br>
Por ejemplo: Para el escenario de prueba 1 de la version 5.47.1 es: sc01-v5.47.1.feature <br>
Donde sc01 indica el numero del escenario y v5.47.1 la versión del aplicativo para cual fue diseñado el escenario de prueba


# Herramientas para pruebas de regresión visual

## Versiones de aplicacion para pruebas
- **Version Vieja** Ghost v 5.47.1
- **Version Nueva** Ghost v3.42.0

## Librerías utilizadas: 
- Node v16.13.0 
- kraken-node v.1.0.24 
- Cucumber v.7.2.1 
- ResembleJS v.4.1.0
- 
## Resemble Js

### Funcionalidades probadas
* Crear Post y revisar que existe
* Crear Tag y abrir el nuevo tag con el buscador

### Preparación del ambiente para Resemblejs 
 1. Clonar el repositorio: <br> git clone https://github.com/Lrozoq/Propuesta-final-pruebas-automatizadas.git

2. Abrir la carpeta **vrt/kraken_tests/ResembleJS_kraken** con el IDE de su gusto. Esta será nuestra carpeta raiz de ahora en adelante para realizar nuestras pruebas de regrsión

3. Ejecutar en **vrt/kraken_tests/ResembleJS_kraken** el siguiente comando: <br> npm install

### Ejecucion de pruebas de regresion visual con Resemblejs

**La aplicacion Ghost pasa de la version 5.47.1 a la version 3.42.0**


### Ejemplo de nombramiento para escenarios de pruebas
Ejemplo: <br>Para el escenario de pruebas 1 el file correspondiente a la version 3.42.0 es **sc01-v3.42.0** y para la version 5.47.1 es **sc01-v5.47.1**

1. Se ejucutan los escenarios de pruebas con la herramienta kraken para la version antigua 5.47.1 generando asi reportes en la carpeta report en la raiz del proyecto ***vrt/kraken_tests/kraken_project/reports*** donde se podra encontrar una carpeta por cada uno de escenarios de pruebas ejecutados y dentro de esta habrá un folder llamadado screenshots donde se puede encontrar un screenshot por cada paso perteneciente al escenario de prueba ejecutado

2. Se ejucutan los escenarios de pruebas con la herramienta kraken para la version nueva 3.42.0 generando asi reportes en la carpeta reports en la raiz del proyecto ***vrt/kraken_tests/kraken_project/reports*** donde se podra encontrar una carpeta por cada uno de escenarios de pruebas ejecutados y dentro de esta habrá un folder llamadado screenshots donde se puede encontrar un screenshot por cada paso perteneciente al escenario de prueba ejecutado

3. Verificar que las carpetas ***vrt/kraken_tests/ResembleJS_kraken/scenario/old-version*** y ***vrt/kraken_tests/ResembleJS_kraken/scenario/new-version*** esten vacias

4. Se copia los screenshots generados en el paso 1 para el escenario x en el proyecto de ResembleJS_kraken en la ubicación  ***vrt/kraken_tests/ResembleJS_kraken/scenario/old-version***

5. Se copia los screenshots generados en el paso 2 para el escenario x en la carpeta ***vrt/kraken_tests/ResembleJS_kraken/scenario/new-version***

6. Se ejecuta el comando ***node index.js*** en ***vrt/kraken_tests/ResembleJS_kraken***  para correr las pruebas de regresion visual

7. Se dirigue a ResembleJS_kraken/report/*FechaDeEjecucionDeLaRegresionVisual*
8. Se abre el report.html para visualizar el resultado de las pruebas
                                                             
