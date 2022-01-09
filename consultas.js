//IMPORTE TOTAL DE CADA VENTA

db.ventas.aggregate([
    {$project:
    {producto:1, fechaVenta:1, importeTotal:{$multiply:["$precio","$cantidad"]}}}
])

//BENEFICIOS DE CADA VENTA

db.ventas.aggregate([
    {$project:
        {producto:1, fechaVenta:1, beneficio:
            {$subtract:[
                {$multiply:["$precio","$cantidad"]},
                {$multiply:["$cantidad","$precioCompraVendedor"]}
            ]}
        }
    }
])

//MEJORES CLIENTES

db.ventas.aggregate([
    {$group:{
        _id:"$cliente",
        totalGastado:{$sum:
        {$multiply:["$cantidad","$precio"]}},
    }},
    {$sort:{totalGastado:-1}}
])

db.ventas.aggregate([
    {$group:{
        _id:"$cliente",
        totalGastado:{$sum:
        {$multiply:["$cantidad","$precio"]}},
    }},
    {$group:{
        _id:null,
        totalGastado:{$max:"$totalGastado"}
    }}
])


//MEJORES PRODUCTOS

db.ventas.aggregate([
    {$group:{
        _id:"$producto",
        totalVendidos:{$sum:"$cantidad"},
        ingresosGenerados:{$sum:
        {$multiply:["$cantidad","$precio"]}}
    }},
    {$sort:{ingresosGenerados:-1, totalVendidos:-1}}
])

//MEJORES MESES

db.ventas.aggregate([
    {$project:{
        _id:"$producto",
        mes:{$month:"$fechaVenta"}
    }}
])

db.ventas.aggregate([
    {$group:{
        _id:"$fechaVenta",
        ganancia:{$sum:
        {$multiply:["$precio","$cantidad"]}}
    }},
])

//TOTAL DE UNIDADES DE "PINCHO KEBAB POLLO 15KG" QUE HA PEDIDO EL CLIENTE KEBAB TORNEO
db.ventas.aggregate([
    {$match:{
        cliente:"Kebab Torneo",
        producto:"Pincho Kebab Pollo 15kg"
    }},
    {$project:
        {producto:1, cliente:1, cantidad:1, importeTotal:{$multiply:["$precio","$cantidad"]}}},
    {$group:{
        _id:"$cliente",
        totalUnidades:{$sum:"$cantidad"}
    }}
])