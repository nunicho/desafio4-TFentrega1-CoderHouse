# Archivo readme
Información útil para analizar este repositorio


1. # ALUMNO: 

Mauricio Javier ALONSO


2. # COMISION:

 N° 55565


3. # TITULO DESAFIO ENTREGABLE: 

PRIMERA ENTREGA DEL DESAFÍO FINAL

4. # N° DESAFIO ENTREGABLE: 

N° 4

5. # CONSIGNA DESAFIO ENTREGABLE: 

Se desarrollará un servidor que contenga los endpoints y servicios necesarios para gestionar los productos y carritos de compra en el e-commerce. 


6. # EXPLICACIÓN ESPECIAL - PETICIÓN POST - CARRITO
Para configurar la petición POST de carrito en POSTMAN:

En la barra principal seleccionar POST e ingresar http://localhost:8080/api/carts/products

Luego elegir Body, raw, JSON.

El cuerpo de la petición debe agregarse así:

[
    {
        "id": 1,
        "quantity": 2
    },
    {
        "id": 3,
        "quantity": 4
    },
    {
        "id": 2,
        "quantity": 4
   }
]


La cantidad de productos es a elección de quien ingresa la petición, pueden ser 3 como en el ejemplo, uno o más. Si un producto no está en stock, se anula la petición. 

7. # EXPLICACIÓN ESPECIAL - PETICIÓN POST - PRODUCTO

Para configurar la petición POST de carrito en POSTMAN:

En la barra principal seleccionar POST e ingresar http://localhost:8080/api/products

Luego elegir Body, raw, JSON.

El cuerpo de la petición debe agregarse así:

     {
          "title": "Sella Roscas Hidro 3",
          "description": "55cc Sella Caños Agua Verde",
          "price": 1850,
          "thumbnail": "https://http2.mlstatic.com/D_NQ_NP_758483-MLA47006749310_082021-V.webp",
          "code": "TA-1800",
          "stock": 10
     }

     No se agregan el id (el sistema lo autogenera controlando que no se repita) ni tampoco el status (el sistema lo genera en true de forma predeterminada )





          {
          "title": "Sella Roscas Hidro 5",
          "description": "55cc Sella Caños Agua Verde",
          "price": 1850,
          "thumbnail": "https://http2.mlstatic.com/D_NQ_NP_758483-MLA47006749310_082021-V.webp",
          "code": "TA-1800",
          "stock": 10
     }


8. # EXPLICACIÓN ESPECIAL - PETICIÓN PUT - PRODUCTO

Para configurar la petición PUT de carrito en POSTMAN:


En la barra principal seleccionar POST e ingresar http://localhost:8080/api/products/6

(en nuestro ejemplo suponemos que tenemos un producto de id 6)

Luego elegir Body, raw, JSON.

El cuerpo de la petición debe agregarse así:

     {
          "title": "Sella Roscas Hidro 5",
          "description": "55cc Sella Caños Agua Verde",
          "price": 1850,
          "thumbnail": "https://http2.mlstatic.com/D_NQ_NP_758483-MLA47006749310_082021-V.webp",
          "code": "TA-1800",
          "stock": 10
     }


La petición no modifica el id ni el status. 