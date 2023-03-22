const  ruta='http://www.raydelto.org/agenda.php'
const OptenerContactos = () =>{
    
    
    
    return  fetch(ruta)
        .then(res =>res.json())
        .then(response =>{
            const {dataResivida =[] } = response
            console.log(response)
            return response
        })

}

export default OptenerContactos