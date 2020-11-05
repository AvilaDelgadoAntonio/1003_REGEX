
/* Sintaxis para que la consulta nos devuelva todos los documentos de la colección cuyo campo de número de pieza tenga el valor que contenga 2016_1" */


db.componentes.find( { pieza_numerada: { $regex: /2016_1$/ } } )


/* Sintaxis para que la consulta nos devuelva todos los documentos donde en detalles de componente tenga RAM o ram (da igual que sea mayúscula o minúscula) */


db.componentes.find( { detalle_componente: { $regex: /RAM/i } } )


/* Sintaxis para que la consulta nos devuelva solo los documentos donde en detalles de componente tenga RAM (solo mayúscula) */


db.componentes.find( { detalle_componente: { $regex: /RAM/ } } )


/* Sintaxis para que la consulta nos devuelva solo los documentos donde en detalles de componente empiece por T mayúscula */


db.componentes.find( { detalle_componente: { $regex: /^T/ } } )


/* Sintaxis para que la consulta nos devuelva solo los documentos donde en detalles de componente tenga "nal" en cualquier parte de la secuencia */


db.componentes.find( { detalle_componente: { $regex: /m.*nal/, $options: 's' } } )


/* Sintaxis para que la consulta nos devuelva todos los documentos con pieza mumerada proc2020_1, usando $eq */

db.componentes.find( { pieza_numerada: { $eq: "proc2020_1" } } )


/* Sintaxis para que la consulta nos devuelva todos los documentos cuya identificador sea mayor que 20, usando $gt */

db.componentes.find( { identificador: { $gt: 20 } } )


/* Sintaxis para que la consulta nos devuelva todos los documentos cuya identificador sea menor que 2, usando $lt */

db.componentes.find( { identificador: { $lt: 2 } } )


/* Sintaxis para que la consulta nos devuelva todos los documentos cuya identificador sea mayor o igual que 20, usando $gte */

db.componentes.find( { identificador: { $gte: 20 } } )


/* Sintaxis para que la consulta nos devuelva todos los documentos cuya identificador sea menor o igual que 2, usando $lte */

db.componentes.find( { identificador: { $lte: 2 } } )


/* Sintaxis para que la consulta nos devuelva todos los documentos cuya pieza numerada no sea proc2020_1, usando $ne */

db.componentes.find( { pieza_numerada: { $ne: "proc2020_1" } } )


/* Sintaxis para que la consulta nos devuelva todos los documentos cuya identificador sea o bien 20 o bien 2, usando $in */

db.componentes.find( { identificador: { $in: [ 20, 2 ] } } )


/* Sintaxis para que la consulta nos devuelva todos los documentos cuya identificador no sea ni 20 ni 2, usando $nin */

db.componentes.find( { identificador: { $nin: [ 20, 2 ] } } )


/* Sintaxis para que la consulta nos devuelva todos los documentos cuyo identificador sea menor o igual que 10 y su detalle sea PENTIUM obsoleto, usando $and */

db.componentes.find( { $and: [ { identificador: { $lte: 10 } }, { detalle_componente: { $eq: "PENTIUM obsoleto" } } ] } )


/* Sintaxis para que la consulta nos devuelva todos los documentos cuyo identificador sea menor o igual que 10 o su número de pieza sea mem2020_2, usando $or */

db.componentes.find( { $or: [ { identificador: { $lte: 10 } }, { pieza_numerada: { $eq: "mem2020_2" } } ] } )


/*Sintaxis para que la consulta nos devuelva todos los documentos cuyo identificador no sea menor o igual que 10 ni su número de pieza sea mem2020_2, usando $nor */

db.componentes.find( { $nor: [ { identificador: { $lte: 10 } }, { pieza_numerada: { $eq: "mem2020_2" } } ] } )


/* Sintaxis para que la consulta nos devuelva todos los documentos cuyo identificador no sea mayor o igual que 7, usando $not */

db.componentes.find( { identificador: {$not: { $gte: 7 } } } )