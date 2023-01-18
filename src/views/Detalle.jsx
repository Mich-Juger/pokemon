import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detalle() {
    const url_api = 'https://pokeapi.co/api/v2/pokemon/';
    const { nombre } = useParams();
   

useEffect(() => {
    getInfoPokemon();
}, []);

const getInfoPokemon = async() => {
    const resp = await fetch(url_api + nombre);
    const data = await resp.json();  
    console.log(data);      
};     



    return (
        <div className="mt-5">
            {
                (!nombre)?
                <p>No hay valor</p>:
                <h1>{nombre}</h1>
            }       
        </div>
    );
}