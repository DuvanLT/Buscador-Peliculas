import { useState, useEffect } from "react";


const Titulo = ({searching}) => {
    const [title, setTitle] = useState('')

    useEffect(() => {
        if(searching){
            setTitle("EL RESULTADO DE TU BUSQUEDA AQUI")
        }else{
            setTitle('PELICULAS POPULARES')
        }
    }, [searching])
 return (
    <>
    <h2>{title}</h2>
    </>
)}

export default Titulo