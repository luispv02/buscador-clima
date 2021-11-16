import {useState} from 'react'

const useForm = () => {
    const [inputvalue, guardarInputValue] = useState({
        ciudad:'',
        pais: '',
    })

    const leerInput = (e) => {
        guardarInputValue({
            ...inputvalue,
            [e.target.name]: e.target.value
        })
    }


    return [inputvalue, leerInput, guardarInputValue]
}

export default useForm
