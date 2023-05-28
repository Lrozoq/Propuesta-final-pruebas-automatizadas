
# Información General

## Aplicación Objetivo
- Ghost v 5.47.1 

## Funcionalidades Objetivas 
- Log in 

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

- Eliminar una página

- Editar una nueva pagina

-Editar título y descripción del sitio

- Editar la zona horaria del sitio

- Editar el idioma de las publicaciones de la página.

- Activar o desactivar el modo oscuro

- Cambio de contraseña

## Escenarios de pruebas definidos: 

[Escenarios de pruebas](https://github.com/JJMontenegroP/EntregaSemana7_PruebasAutomatizadas/wiki/2.2.-Escenarios-de-pruebas-con-Kraken)

# Herramientas Para pruebas E2E

## Kraken 

Kraken es una herramienta de código abierto para realizar pruebas automáticas del tipo E2E con aplicaciones móviles para Android y aplicaciones WEB. Esta soporta escenarios donde es requerida la intercomunicación entre usuarios o dispositivos 

### Librerías utilizadas: 
- **Usar version de Node 16.13.0**
- **kraken-node v.1.0.24** 
- Cucumber v.7.2.1
- node-fetch2

 
### Preparación del ambiente para Kraken 

 1. Clonar el repositorio: <br> git clone https://github.com/Lrozoq/Propuesta-final-pruebas-automatizadas

2. Abrir la carpeta **escenarios_validacion_datos/kraken_tests/kraken_project** con el IDE de su gusto. Esta será nuestra carpeta raiz de ahora en adelante 

3. Ejecutar en la raíz del proyecto: <br> npm install kraken-node
4. Ejecutar en la raíz del proyecto: <br> npm install node-fetch@2
5. En caso de tener problemas appium, instalarlo globalmente con el siguiente comando: <br> npm install -g appium

### Ejecución de pruebas 

1. Correr Ghost localmente en el puerto 2368, generalmente este es el puerto por defecto.

2. Crear una cuenta en la aplicación de ghost que se encuentra corriendo localmente en su maquina en: <br> http://localhost:2368/ghost/#/setup <br>
Con las siguientes credenciales: email: pruebas_automaticas@gmail.com y password: Uniandes2023 Esto con el fin de garantizar la calidad de las pruebas

3. Cambiar la extensión del archivo el cual se desea probar a .feature y validar que sea el unico archivo con esa extensión en la carpeta **features**  

4. Ejecutar el escenario de prueba ejecutando el siguiente comando en la carpeta raiz (preferiblemente con git bash): <br> ./node_modules/kraken-node/bin/kraken-node run

5. Ir a la carpeta **reports** en la raíz del proyecto y revisar los resultados 

***Importante: al momento de ejecutar los escenarios correspondientes a la estrategia de generación de datos a priori es importante cerrar todas las ventanas abiertas solamente en el momento en que todas las pruebas del escenario han sido terminadas***

### Muy importante
- El usuario registrado en el paso 2 será con el que se realizaran todas las pruenas
- Al momento de correr la pruebas con kraken utilizando el comando ./node_modules/kraken-node/bin/kraken-node run preferiblemente utilizar git bash 

### Formato del nombre para los escenarios de pruebas presentes en **features** para las estrategias de generación de datos
[Estrategia de generación de datos](https://github.com/JJMontenegroP/EntregaSemana7_PruebasAutomatizadas/wiki/2.3-Estrategias-generaci%C3%B3n-de-datos-Kraken)


### Formato del nombre para los escenarios de pruebas presentes en **features** para la regresion visual
La convención de nombres para los escenarios de pruebas en el proyecto de kraken es el siguiente: <br>
codigoDelEscenario-VersionDelAplicativo <br>
Por ejemplo: Para el escenario de prueba 1 de la version 5.47.1 es: sc01-v5.47.1.feature <br>
Donde sc01 indica el numero del escenario y v5.41.0 la versión del aplicativo destino
                                                                           
 


