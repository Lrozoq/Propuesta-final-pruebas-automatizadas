# Aplicación objetivo
Ghost v.5.47.1


# Pruebas de reconocimiento con Monkeys
Con la herramienta [Monkey-cypress](https://github.com/TheSoftwareDesignLab/monkey-cypress) se pueden realizar pruebas de reconocimiento generando automaticamente entradas y eventos sobre la interfaz grafica usando monkeys 

## Preparacion del ambiente
1. Clonar el repositorio
1. Abrir la carpeta Propuesta-final-pruebas-automatizadas/reconocimiento/monkey
2. Instalar cypress en su maquina local ejecutando: <br> npm install cypress@9.7.0 -g
3. Estando en la carpeta monkey ejecutar el siguiente: <br> npm install

## Correr pruebas
1. Correr Ghost localmente. Verificar que este corriendo en el puerto 2368
2. Crea una cuenta en Ghost con la siguiente información con el fin de garantizar calidad en las pruebas: <br> email: pruebas_automaticas@gmail.com <br> password: Uniandes2023
4. Estando en la carpeta monkey ejecutar el siguiente comando para inicializar las pruebas <br> cypress run -C monkey-config.json -b chrome

# Pruebas de reconocimeinto con RIPuppet
Con la libería [https://github.com/TheSoftwareDesignLab/RIPuppetCoursera] se pueden realizar pruebas de reconocimiento con exploración sistematica.

## Preparación del ambiente
1. Clonar el repositorio
2. Abrir la carpeta Propuesta-final-pruebas-automatizadas/reconocimiento/RIPuppet
3. Instalar Playwright en su última versión ^1.34.3
4. Instalar el navedor [Chromium](https://www.chromium.org/getting-involved/download-chromium/)
5. Instalar el navegador [Firefox](https://www.mozilla.org/en-US/firefox/new/)
