import React, { useEffect, useState } from 'react'
import { llamadoApi } from './api/llamadoApi'
import Clima from './components/Clima'
import FormClima from './components/FormClima'
import Spinner from './components/Spinner'

const AppClima = () => {

  const [{ciudad,pais}, guardarDatos] = useState({})
  const [cargando, guardarCargando ] = useState(false)
  const [resultadoapi, guardarResultadoApi] = useState({})
  const [existeerror, guardarExisteError] = useState(false)
 
  useEffect(() => {
    if(cargando){
      llamadoApi(ciudad,pais)
        .then(clima => {
          if(clima.cod === '404'){
            guardarExisteError(true)
            guardarCargando(false)
            return;
          }else{
            
            guardarExisteError(false)
            guardarResultadoApi(clima);
            guardarCargando(false);
            
          }
        })
    }
  }, [cargando]);

  console.log(resultadoapi)

  return (
    <div className="container">

      <h1 className="text-center py-3">Buscador de Clima</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <FormClima 
            guardarDatos={guardarDatos}
            guardarCargando={guardarCargando}
          />
        </div>


        <div className="col-12 col-md-6">
          {
            (cargando )
            ? <Spinner /> 
            :( existeerror )
              ? <p className="alert alert-danger p-1 mt-3 text-center">Ciudad Incorrecta</p>
              : <Clima 
                resultadoapi={resultadoapi}
                />
          }

        </div>
      </div>
    </div>
  )
}

export default AppClima

