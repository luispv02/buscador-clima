import React, { useState } from 'react'
import useForm from '../hooks/useForm'

const FormClima = ({guardarDatos, guardarCargando}) => {
    const [error, guardarError] = useState(false)

    const [inputvalue, leerInput, guardarInputValue] = useForm({
        ciudad: '',
        pais: '',
    })

    const {ciudad,pais} = inputvalue;

    const buscarClima = (e) => {
        e.preventDefault();

        if(ciudad.trim().length === 0 || pais.trim().length === 0){
            guardarError(true);
            return;
        }
        guardarError(false)

        guardarDatos(inputvalue)

        guardarCargando(true);

        guardarInputValue({
            ciudad: '',
            pais: '',
        })
        
    }

    return (

        <>
            {error ? <p className="alert alert-danger p-1 mt-3 text-center">Ambos Campos son Obligatorios</p> : null}

            <form
                onSubmit={buscarClima}
            >
                <div className="contenedor-ciudad my-3">
                    <label>Ciudad</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Ingresa la Ciudad"
                        name="ciudad"
                        onChange={leerInput}
                        value={ciudad}
                    />
                </div>

                <div className="contenedor-pais">
                    <label>Pais</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Ingresa el pais en 2 digitos(mx, us)"
                        name="pais"
                        onChange={leerInput}
                        value={pais}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                >Buscar Clima</button>
            </form>
        </>
    )
}

export default FormClima
