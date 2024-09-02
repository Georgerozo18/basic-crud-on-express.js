// 1. Importar las librerías necesarias
const express = require('express')
require('dotenv').config()

// 2. Definición de variables 
const app = express()
const PORT = process.env.PORT || 3000

// 3. Middleware
app.use(express.json())

// 4. Routes 
const itemRoutes = require('./routes/itemRoutes')
app.use('/api/items', itemRoutes)

// 5 Iniciación del servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})