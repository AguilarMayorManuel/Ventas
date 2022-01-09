db.ventas.drop()
db.ventas.insertMany ([
    {
        _id:0, 
        producto:"Pincho Kebab Ternera 15kg", 
        precio:62.70, 
        cantidad:9, 
        fechaVenta:new Date("2021-10-13"), 
        precioCompraVendedor:45.78, 
        cliente:"King Doner Kebab & Pizzas"
    },
    {_id:1, producto:"Pincho Kebab Pollo 10kg", precio:41.80, cantidad:15, fechaVenta:new Date("2021-06-12"), precioCompraVendedor:32.63, cliente:"Kebab Torneo"},
    {_id:2, producto:"Pincho Kebab Pollo 15kg", precio:62.70, cantidad:10, fechaVenta:new Date("2021-11-20"), precioCompraVendedor:53.60, cliente:"King Doner Kebab & Pizzas"},
    {_id:3, producto:"Pincho Kebab Ternera 15kg", precio:62.70, cantidad:18, fechaVenta:new Date("2021-11-23"), precioCompraVendedor:41.02, cliente:"King Doner Kebab & Pizzas"},
    {_id:4, producto:"Pincho Kebab Ternera 10kg", precio:41.80, cantidad:23, fechaVenta:new Date("2021-12-04"), precioCompraVendedor:34.43, cliente:"Kebab Mesopotamia"},
    {_id:5, producto:"Pincho Kebab Pollo 15kg", precio:62.70, cantidad:7, fechaVenta:new Date("2021-03-12"), precioCompraVendedor:55.15, cliente:"Kebab Torneo"},
    {_id:6, producto:"Pincho Kebab Ternera 15kg", precio:62.70, cantidad:12, fechaVenta:new Date("2021-01-02"), precioCompraVendedor:42.67, cliente:"King Doner Kebab & Pizzas"},
    {_id:7, producto:"Pincho Kebab Pollo 15kg", precio:62.70, cantidad:5, fechaVenta:new Date("2021-04-16"), precioCompraVendedor:50.04, cliente:"King Doner Kebab & Pizzas"},    
    {_id:8, producto:"Pincho Kebab Pollo 15kg", precio:62.70, cantidad:8, fechaVenta:new Date("2021-07-05"), precioCompraVendedor:52.56, cliente:"Kebab Torneo"},    
    {_id:9, producto:"Pincho Kebab Ternera 10kg", precio:41.80, cantidad:7, fechaVenta:new Date("2021-08-01"), precioCompraVendedor:38.70, cliente:"Kebab Mesopotamia"},    
    {_id:10, producto:"Pincho Kebab Pollo 10kg", precio:41.80, cantidad:12, fechaVenta:new Date("2021-12-11"), precioCompraVendedor:55.80, cliente:"King Doner Kebab & Pizzas"},    
    {_id:11, producto:"Pincho Kebab Ternera 15kg", precio:62.70, cantidad:15, fechaVenta:new Date("2021-12-11"), precioCompraVendedor:56.70, cliente:"King Doner Kebab & Pizzas"},    
    {_id:12, producto:"Pincho Kebab Pollo 15kg", precio:62.70, cantidad:10, fechaVenta:new Date("2021-11-24"), precioCompraVendedor:53.89, cliente:"Kebab Torneo"},    
    {_id:13, producto:"Pincho Kebab Pollo 15kg", precio:62.70, cantidad:16, fechaVenta:new Date("2021-10-08"), precioCompraVendedor:56.34, cliente:"Kebab Torneo"},    
    {_id:14, producto:"Pincho Kebab Ternera 10kg", precio:41.80, cantidad:13, fechaVenta:new Date("2021-12-01"), precioCompraVendedor:36.56, cliente:"King Doner Kebab & Pizzas"},
])