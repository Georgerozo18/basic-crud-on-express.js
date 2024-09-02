// 1. importar el modulo de la base de datos desde un archivo
let items = require('../data/items')

// 2. Crear un nuevo 
exports.createItem = (request, response)=>{
    const newitem = {
        id:items.length + 1,
        name:request.body.name, 
        job_description:request.body.job_description,
        job_name:request.body.job_name
    }
    items.push(newitem)
    response.status(201).json(newitem)
}

// 3. Obtener todos los Ítems
exports.getItems = (request, response) => {
    response.json(items)
}

// 3.1 Obtener un Ítem por Id
exports.getItemByid = (request, response)=>{
    const item = items.find(i => i.id === parseInt(request.params.id))
    if(!item) return response.status(404).json({
        message:'Item not found'
    })

    response.json(item)
}

// 4. Actualizar un Ítems por Id
exports.updateItemById = (request, response)=>{
    const item = items.find(i=> i.id === parseInt(request.params.id))
    if(!item) return response.status(404).json({
        message:'Item not found'
    })

    item.name = request.body.name || item.name
    item.job_description = request.body.job_description || item.job_description
    item.job_name = request.body.job_name || item.job_name

    response.json(item)
}

// 5. Eliminar un Ítem por Id
exports.deleteItemById = (request, response)=>{
    const item = items.findIndex(i => i.id === parseInt(request.params.id))
    if(item === -1) return response.status(404).json({
        message:'Item not found'
    })

    items.splice(item, 1)
    response.json({message:'Item deleted successfully'})
}
