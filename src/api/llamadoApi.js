export const llamadoApi = async(ciudad,pais) => {
    const key = '71a5ebd13201a685655279217183763c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    
    return resultado;
}


