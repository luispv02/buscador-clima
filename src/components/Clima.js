import { motion } from 'framer-motion'

const Clima = ({resultadoapi}) => {

    if(Object.keys(resultadoapi).length === 0) return null

    const {name, main:{temp, temp_max, temp_min}, sys:{country}} = resultadoapi;

    const actual = (temp - 273.15).toFixed(2);
    const maxima = (temp_max - 273.15).toFixed(2);
    const minima = (temp_min - 273.15).toFixed(2);
 
    return (
        <>
            <motion.div 
                className="text-center mt-4 pb-3 contenedor-clima bg-white"
                initial={{scale: 0}}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <h2 className="my-3">Clima en: {name}, {country}</h2>

                <p className="my-1">Temperatura: <span className="fw-bold">{actual} &#x2103;</span></p>
                <p className="my-1">Temperatura Maxima: <span className="fw-bold">{maxima} &#x2103;</span></p>
                <p className="my-1">Temperatura Minima: <span className="fw-bold">{minima} &#x2103;</span></p>
            </motion.div>
        </>
    )
}

export default Clima
