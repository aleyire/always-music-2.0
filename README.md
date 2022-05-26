## Always Music :musical_score:
Aplicación en node que realiza consultas a postgreSQL a través del paquete 'pg' el cual realiza las siguientes acciones:
En éste desafío se ocupa la clase Pool definiendo sus diferentes propiedades, para capturar los posibles errores en el proceso de conexión con la base de datos al realizar las siguientes consultas, usando textos parametrizados y Prepared Statement:

- Agregar un nuevo estudiante.
- Consultar los estudiantes registrados.
- Consultar estudiante por rut.
- Actualizar la información de un estudiante.
- Eliminar el registro de un estudiante.

Ya que el caso se trata de un proceso de desarrollo, la  interacción se debe realizar con argumentos por la línea de comandos.

### Materia aplicada 	:musical_note:

- Pooling.
- Mi primera consulta con Pool.
- Consultas con texto parametrizado.
- JSON como argumento de una consulta.
- Prepared Statement.
- Captura de errores.

### Comandos :notes:

- `npm init`
- `npm i pg`
- `node index.js ingresar '789' maria pintar 4`
- `node index.js rut '789'`
- `node index.js 'consultar tabla'`
- `node index.js editar '789' 3`
- `node index.js eliminar '789'`
