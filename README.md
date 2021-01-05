# redux-react-project

NOTA: todo el desarrollo se encuentra en la rama `develop`. La estructura de ramas esta basada en gitflow con nombres: `feature/NOMBRE-FEATURE`

## Levantar y ejecutar con Docker

Para levantar el proyecto se debe tener instalado en el equipo `Docker` y `Docker compose`

instalar docker: https://docs.docker.com/engine/install/ubuntu/
instalar docker-compose: https://docs.docker.com/compose/install/

En la raiz del proyecto (dentro del directorio react-redux-project) se debe ejecutar el comando `docker-compose up` y esperar que se construya la imagen y posteriormente se levante el servidor web con la aplicacion

Dicha aplicacion sera levantada de manera local quedando ubicada en la url indicada por el mismo contenedor una vez lista para su uso

Puede quedar en: 
    * http://localhost:3000/
    * http://172.17.0.2:3000/

## Levantar y ejecutar con npm

Para levantar el proyecto se debe tener instalado en el equipo `nodejs`

instalar nodejs: https://nodejs.org/es/download/

En el directorio `app` dentro de la raiz (directorio react-redux-project) se debe ejecutar:

1. npm install
2. npm start

el proyecto se abrira en: http://localhost:3000/

## La aplicacion 
Dentro de la aplicacion existe un menu que permite navegar a las soluciones de los problemas presentados para este test siendo

    - store:
        - url: "http://localhost:3000/"
        - Lista de 10 primeros amiibos traidos desde la api.
        - opcion de agregar productos al carro de compras
    - carrito de compras:
        - url: "http://localhost:3000/cart"
        - Lista de los productos agregados al carrito con opcion de:
            - agregar/eliminar items a cada producto
            - eliminar producto del carro
            - precio total de la compra
            - seguir comprando
            - finalizar compra
