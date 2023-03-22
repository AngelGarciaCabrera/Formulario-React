import React from 'react'
import { useForm } from 'react-hook-form';


export const Formulario = (props) => {
    const {Refresh } = props
    //fuction 

    
    const { register, formState:{errors}, handleSubmit} = useForm();
    const onSubmit= (data) =>{
         alert("mandado correctamente");
         debugger
         Refresh()
        console.log(data);
        fetch('http://www.raydelto.org/agenda.php',{
        method: 'POST',
        body: JSON.stringify(data)
    })


}

    

Refresh()
    return (
        

        <><br></br><h1>formularios</h1>
        <br></br>
            <form onSubmit={handleSubmit (onSubmit)}>
                <div >
                    <div  className="card-header container border  bg-info"><h1>Infromation customer</h1></div>
                    <div className="card-body container border ">
                      
                            <div className="col-md-12">
                                <label className="form-label float-left" >firstName</label>
                                <input className="form-control" type="text" {...register('nombre',{
                                    required:true, maxLength:20
                                })} />
                                {errors.nombre?.type === 'required' && <p>El campo es requerido</p>}
                                {errors.nombre?.type === 'maxLength' && <p>El Nombre debe ser menor que 20 carateres</p>}
                                
                                    
                            </div>
                            <div  className="col-md-12">
                                <label  className="form-label float-left" >Lastname</label>
                                <input  className="form-control" type="text" {...register('apellido',{
                                    required:true, maxLength:20
                                })} />
                                {errors.apellido?.type === 'required' && <p>El campo es requerido</p>}
                                {errors.apellido?.type === 'maxLength' && <p>El Apellido debe ser menor que 20 carateres</p>}
                                   
                                
                            </div>
                            <div  className="col-md-12 ">
                                <label className="form-label float-left">phone</label>
                                <input className="form-control" type=""   {...register('telefono',{
                                    required:true
                                })} />
                                {errors.telefono?.type === 'required' && <p>El campo es requerido</p>}
                                     
                               
                            </div>
                            <br></br>
                            <div  className="col-12 boton ">
                                <button  className="btn btn-primary" type="submit" value="enviar">Agregar</button>
                            </div >
                            <br></br>

                      


                    </div>
                </div>

            </form>
        </>
    )
};





