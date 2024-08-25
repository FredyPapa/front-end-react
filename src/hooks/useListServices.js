import { useEffect, useState } from "react";
import servicios from "../data/services.json";
import { useParams } from "react-router-dom";

const useListServices = () => {
    const {categoryId} = useParams();
    //Usando UseState
    const [listaServicios,setListaServicios] = useState();
    const [isLoading,setIsLoading] = useState(true);
    //UseEffect que se ejecuta una sola vez
    useEffect(()=>{
        setIsLoading(true);
        //Promesa
        const obtenerServiciosPorCategoria = () =>
        new Promise((resolve, reject) => {
        setTimeout(() => {
            const filterCategory = servicios.filter(servicio => servicio.idCategoria === categoryId); 
            resolve(filterCategory);
        }, 2000);
        });
        obtenerServiciosPorCategoria()
        .then(
        (result) => {
            setIsLoading(false);
            setListaServicios(result);
        },
        (err) => console.log(err)
        )
        .finally(() => console.log("Proceso finalizado correctamente"));
    },[categoryId]);
  return [
            listaServicios,
            isLoading
        ]
}

export default useListServices